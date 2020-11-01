const fs = require('fs')
const glob = require('glob')
const path = require('path')

const taskExports = glob.sync('tasks/*.json')
const taskIndexMdLines = []

if (fs.existsSync('docs')) {
  fs.rmdirSync('docs', {recursive: true})
}

fs.mkdirSync('docs')

taskExports.forEach(taskJsonPath => {
  try {
    const taskJson = fs.readFileSync(taskJsonPath, 'UTF-8')
    const taskHandle = taskJsonPath.match(/\/([\w-]+)\.json$/)[1]
    const taskDocsDir = `docs/${taskHandle}`
    const task = JSON.parse(taskJson)

    fs.mkdirSync(taskDocsDir)

    const description = `${task.docs}`.split(/(\r?\n){2,}/)[0];

    taskIndexMdLines.push(`* [${task.name}](./${taskHandle})`)

    // write script.liquid
    fs.writeFileSync(`${taskDocsDir}/script.liquid`, task.script)

    // build README.md
    let readmeMd = `# ${task.name}`

    readmeMd += `\n\n* [task.json](../../tasks/${taskHandle}.json) (for import/export)`

    if (task.script) {
      readmeMd += `\n* [Task script](./script.liquid)`
      fs.writeFileSync(`${taskDocsDir}/script.liquid`, task.script.trim() + `\n`)
    }

    if (task.online_store_javascript) {
      readmeMd += `\n* [Task online store javascript](./online_store_javascript.js.liquid)`
      fs.writeFileSync(`${taskDocsDir}/online_store_javascript.js.liquid`, task.online_store_javascript.trim() + `\n`)
    }

    if (task.order_status_javascript) {
      readmeMd += `\n* [Task order status javascript](./order_status_javascript.js.liquid)`
      fs.writeFileSync(`${taskDocsDir}/order_status_javascript.js.liquid`, task.order_status_javascript.trim() + `\n`)
    }

    if (description) {
      readmeMd += `\n\n${description}`
    }

    if (Object.keys(task.options).length > 0) {
      readmeMd += `\n\n## Default options`
      readmeMd += `\n\n\`\`\`json\n${JSON.stringify(task.options, null, 2)}\n\`\`\``
    }

    if (`${task.subscriptions_template}`.trim()) {
      readmeMd += `\n\n## Subscriptions`
      readmeMd += `\n\n\`\`\`liquid\n${task.subscriptions_template}\n\`\`\``
    }

    if (`${task.docs}`.trim()) {
      readmeMd += `\n\n## Documentation`
      readmeMd += `\n\n${task.docs}`
    }

    readmeMd += `\n`

    fs.writeFileSync(`${taskDocsDir}/README.md`, readmeMd)

    process.stdout.write(`.`)

  } catch (error) {
    console.error(`Error during ${taskJsonPath}: ${error}`)
  }
})

taskIndexMdLines.sort()

let taskIndexMd = `# Task documentation index`
taskIndexMd += `\n\nThis directory is built automatically. Each task's documentation is generated from the corresponding task export file in [../tasks](../tasks/). To contribute, see [../CONTRIBUTING.md](../CONTRIBUTING.md).`
taskIndexMd += `\n\n${taskIndexMdLines.join("\n")}\n`

fs.writeFileSync('docs/README.md', taskIndexMd)

process.stdout.write(`\n`)
