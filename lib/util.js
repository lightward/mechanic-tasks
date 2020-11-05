const Ajv = require('ajv')
const fs = require('fs')
const glob = require('glob')
const path = require('path')

const taskSchema = require('./task_schema.json')
const ajv = new Ajv({async: false})
const validateTask = ajv.compile(taskSchema)

module.exports = {}

module.exports.validateTasks = () => {
  const tasks = glob.sync('tasks/*.json')

  tasks.forEach(taskPath => {
    const taskJson = fs.readFileSync(taskPath, 'UTF-8')
    const task = JSON.parse(taskJson)

    if (!validateTask(task)) {
      for (const err of validateTask.errors) {
        console.log(err)
      }

      throw `Found an invalid task JSON file in ${taskPath}`
    }
  })
}

module.exports.formatJsonFiles = () => {
  const tasks = glob.sync('tasks/*.json')

  tasks.forEach(taskPath => {
    const taskJson = fs.readFileSync(taskPath, 'UTF-8')
    const task = JSON.parse(taskJson)
    fs.writeFileSync(taskPath, `${JSON.stringify(task, null, 2)}\n`)
  })
}

module.exports.buildDocs = (docsDir = 'docs', options = {}) => {
  if (options.validate !== false) {
    module.exports.validateTasks()
  }

  const tasks = glob.sync('tasks/*.json')
  const taskIndexMdLines = []

  if (fs.existsSync(docsDir)) {
    fs.rmdirSync(docsDir, {recursive: true})
  }

  fs.mkdirSync(docsDir)

  tasks.forEach(taskPath => {
    try {
      const taskJson = fs.readFileSync(taskPath, 'UTF-8')
      const taskHandle = taskPath.match(/\/([\w-]+)\.json$/)[1]
      const taskDocsDir = `${docsDir}/${taskHandle}`
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

      if (!options.silent) {
        process.stdout.write(`.`)
      }

    } catch (error) {
      console.error(`Error during ${taskPath}: ${error}`)
    }
  })

  taskIndexMdLines.sort()

  let taskIndexMd = `# Task documentation index`
  taskIndexMd += `\n\nThis directory is built automatically. Each task's documentation is generated from the corresponding task export file in [../tasks](../tasks/). To contribute, see [../CONTRIBUTING.md](../CONTRIBUTING.md).`
  taskIndexMd += `\n\n${taskIndexMdLines.join("\n")}\n`

  fs.writeFileSync(`${docsDir}/README.md`, taskIndexMd)

  if (!options.silent) {
    process.stdout.write(`\n`)
  }
}
