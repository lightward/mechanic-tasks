const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const Ajv = require('ajv');
const {validateRecipe} = require('./recipe_validation');

const validate = new Ajv({allErrors: true}).compile(
  require('./recipe_schema.json'),
);
const taskKeys = [
  'name',
  'script',
  'docs',
  'options',
  'subscriptions',
  'subscriptions_template',
  'tags',
  'perform_action_runs_in_sequence',
  'halt_action_run_sequence_on_error',
  'online_store_javascript',
  'order_status_javascript',
];

function buildRecipes({check = false, docsDir = 'docs'} = {}) {
  const sources = fs
    .readdirSync('recipes')
    .filter((name) => name.endsWith('.json'))
    .sort();
  if (sources.length > 100)
    throw new Error('The recipe catalog supports up to 100 entries');
  const bundledDir = 'recipes/bundled';
  if (!check) fs.mkdirSync(bundledDir, {recursive: true});
  const built = [];
  for (const filename of sources) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*\.json$/.test(filename))
      throw new Error(`Invalid recipe filename: ${filename}`);
    const recipe = JSON.parse(
      fs.readFileSync(path.join('recipes', filename), 'utf8'),
    );
    if (!validate(recipe))
      throw new Error(`${filename}: ${JSON.stringify(validate.errors)}`);
    validateRecipe(recipe, {resolved: false});
    const keys = recipe.resources.map((resource) => resource.key);
    if (new Set(keys).size !== keys.length)
      throw new Error(`${filename}: duplicate resource keys`);
    const inputKeys = recipe.inputs.map((input) => input.key);
    if (new Set(inputKeys).size !== inputKeys.length)
      throw new Error(`${filename}: duplicate input keys`);
    if (!recipe.resources.some((resource) => resource.type === 'task'))
      throw new Error(`${filename}: include a task`);
    for (const resource of recipe.resources) {
      if (resource.type === 'task' && resource.task_slug) {
        const task = JSON.parse(
          fs.readFileSync(`tasks/${resource.task_slug}.json`, 'utf8'),
        );
        const attributes = Object.fromEntries(
          Object.entries(task).filter(([key]) => taskKeys.includes(key)),
        );
        resource.config = {
          ...attributes,
          ...resource.config,
          options: {...task.options, ...resource.config.options},
        };
      }
      if (
        resource.type === 'task' &&
        typeof resource.config.script !== 'string'
      )
        throw new Error(`${filename}: task source missing`);
    }
    validateRecipe(recipe);
    recipe.revision = crypto
      .createHash('sha256')
      .update(JSON.stringify(recipe))
      .digest('hex');
    const output = `${JSON.stringify(recipe, null, 2)}\n`;
    if (Buffer.byteLength(output) > 1024 * 1024)
      throw new Error(`${filename}: recipe exceeds 1 MB`);
    const target = path.join(bundledDir, filename);
    if (check) {
      if (!fs.existsSync(target) || fs.readFileSync(target, 'utf8') !== output)
        throw new Error(`${target} is out of date; run npm run build`);
    } else fs.writeFileSync(target, output);
    const slug = filename.slice(0, -5);
    const docs = [
      `# ${recipe.name}`,
      '',
      recipe.description,
      '',
      `This is a recipe: it installs connected resources together. Individual tasks remain available separately.`,
      '',
      '## Included resources',
      '',
      ...recipe.resources.map(
        (resource) =>
          `- ${resource.type === 'task' && resource.task_slug ? `[${resource.config.name}](https://tasks.mechanic.dev/${resource.task_slug})` : resource.config.name} (${resource.type.replaceAll('_', ' ')})`,
      ),
      '',
      '## Installation',
      '',
      'Open the recipe in Mechanic, configure destination settings and review the included components, code and required access. Nothing is created until you choose Install. Installation creates connected drafts. Use their normal editors to enable tasks, grant access, enable Shopify webhooks, and publish and place forms. Make a deliberate test; installation does not run any test actions.',
      '',
      '## Contributing',
      '',
      'To propose a change, edit the source in recipes/ and run the repository build and tests. See [the contribution guide](../../../CONTRIBUTING.md). Do not edit generated bundles or documentation directly.',
      '',
      'Private exports use the same versioned format. Exporting or importing does not publish a recipe to this library.',
      '',
    ].join('\n');
    fs.mkdirSync(path.join(docsDir, 'recipes', slug), {recursive: true});
    fs.writeFileSync(path.join(docsDir, 'recipes', slug, 'README.md'), docs);
    built.push(filename);
  }
  if (fs.existsSync(bundledDir))
    for (const filename of fs.readdirSync(bundledDir)) {
      if (!built.includes(filename))
        throw new Error(
          `Remove the stale generated recipe: ${bundledDir}/${filename}`,
        );
    }
  if (built.length) {
    const index = [
      '# Recipe documentation index',
      '',
      'Generated from [recipe sources](../../recipes/). See [the contribution guide](../../CONTRIBUTING.md).',
      '',
      ...built.map((filename) => {
        const slug = filename.slice(0, -5);
        const recipe = JSON.parse(
          fs.readFileSync(path.join('recipes', filename), 'utf8'),
        );
        return `* [${recipe.name}](./${slug}/)`;
      }),
      '',
    ].join('\n');
    fs.writeFileSync(path.join(docsDir, 'recipes', 'README.md'), index);
    fs.appendFileSync(
      path.join(docsDir, 'README.md'),
      '\n## Recipes\n\n[Browse recipes](./recipes/) to install connected tasks, forms, and webhooks together.\n',
    );
  }
  return built;
}

module.exports = {buildRecipes};
