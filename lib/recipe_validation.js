const configKeys = {
  task: [
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
  ],
  webhook: ['name'],
  shopify_webhook: [
    'name',
    'shopify_topic',
    'filter',
    'include_fields',
    'metafield_namespaces',
    'metafields',
  ],
  form: [
    'version',
    'name',
    'title',
    'description',
    'submitLabel',
    'confirmation',
    'fields',
    'steps',
    'layout',
    'visibility',
    'captureCart',
    'presentation',
  ],
};

// Match the installer's portable settings and connections before generating a
// public bundle. Model validation and permission review still run at install time.
function validateRecipe(recipe, {resolved = true} = {}) {
  const fail = (message) => {
    throw new Error(message);
  };
  const text = (value, limit, blank = false) =>
    typeof value === 'string' &&
    [...value].length <= limit &&
    (blank || value.trim().length > 0);
  if (!text(recipe.name, 200) || !text(recipe.description, 10000, true))
    fail('Invalid recipe name or description');
  if (recipe.revision !== undefined && !text(recipe.revision, 100))
    fail('Invalid recipe revision');
  const resources = new Map(recipe.resources.map((r) => [r.key, r]));
  if (resources.size !== recipe.resources.length)
    fail('Duplicate resource key');
  const inputs = new Map(recipe.inputs.map((i) => [i.key, i]));
  if (inputs.size !== recipe.inputs.length) fail('Duplicate input key');
  for (const input of recipe.inputs) {
    if (
      !text(input.label, 200) ||
      (input.description !== undefined && !text(input.description, 1000, true))
    )
      fail('Invalid input label or description');
  }
  for (const resource of recipe.resources) {
    const config = resource.config;
    if (
      Object.keys(config).some(
        (key) => !configKeys[resource.type].includes(key),
      )
    )
      fail(`${resource.key}: unsupported resource setting`);
    if (resource.task_slug && resource.type !== 'task')
      fail('Only tasks may reference a task_slug');
    if (resolved || !resource.task_slug) {
      if (!text(config.name, 200)) fail(`${resource.key}: provide a name`);
      if (
        resource.type === 'task' &&
        (!text(config.script, 500000, true) ||
          !config.options ||
          Array.isArray(config.options) ||
          typeof config.options !== 'object')
      )
        fail(`${resource.key}: provide task code and options`);
    }
  }
  const targets = new Set();
  for (const binding of recipe.bindings) {
    const target = resources.get(binding.resource);
    const source = resources.get(binding.source.resource);
    const path = binding.path;
    if (
      !target ||
      (binding.source.input ? !inputs.has(binding.source.input) : !source)
    )
      fail('Binding references a missing resource or input');
    const location = JSON.stringify([binding.resource, path]);
    if (targets.has(location)) fail('Duplicate binding target');
    targets.add(location);
    const permitted =
      (target.type === 'task' &&
        ((path.length === 2 &&
          path[0] === 'options' &&
          typeof path[1] === 'string') ||
          (path.length === 1 && path[0] === 'subscriptions_template'))) ||
      (target.type === 'form' &&
        ((path.length === 1 && path[0] === 'webhookId') ||
          (path.length === 4 &&
            path[0] === 'visibility' &&
            path[1] === 'rules' &&
            path[3] === 'value'))) ||
      (target.type === 'shopify_webhook' &&
        path.length === 1 &&
        path[0] === 'filter');
    if (!permitted) fail('Unsupported binding target');
    const webhookConnection = path.length === 1 && path[0] === 'webhookId';
    const subscription =
      path.length === 1 && path[0] === 'subscriptions_template';
    if (binding.source.input) {
      if (webhookConnection || subscription)
        fail(
          'Webhook connections and subscriptions must reference recipe resources',
        );
    } else {
      const output = binding.source.output;
      const validOutput =
        (source.type === 'form' && output === 'id') ||
        (['webhook', 'shopify_webhook'].includes(source.type) &&
          output === 'topic') ||
        (source.type === 'webhook' && output === 'id' && webhookConnection);
      if (
        !validOutput ||
        (webhookConnection &&
          !(source.type === 'webhook' && output === 'id')) ||
        (subscription && output !== 'topic')
      )
        fail('Invalid resource output');
    }
    if (resolved) {
      let parent = target.config;
      for (const part of path.slice(0, -1)) {
        if (
          !parent ||
          typeof parent !== 'object' ||
          !Object.hasOwn(parent, part)
        )
          fail('Binding points to a missing setting');
        parent = parent[part];
      }
      if (
        !parent ||
        typeof parent !== 'object' ||
        Array.isArray(parent) ||
        typeof path.at(-1) !== 'string'
      )
        fail('Invalid binding destination');
    }
  }
  for (const resource of recipe.resources.filter((r) => r.type === 'form')) {
    if (!targets.has(JSON.stringify([resource.key, ['webhookId']])))
      fail('Connect each form to an incoming webhook');
  }
}
module.exports = {validateRecipe};
