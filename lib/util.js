const Ajv = require('ajv').default
const fs = require('fs')
const glob = require('glob')
const path = require('path')

const taskSchema = require('./task_schema.json')

module.exports = {}

module.exports.validateTasks = () => {
  const ajv = new Ajv({async: false})
  const validateTask = ajv.compile(taskSchema)

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
  const ajv = new Ajv({async: false, removeAdditional: true})
  const validateTask = ajv.compile(taskSchema)

  const tasks = glob.sync('tasks/*.json')

  tasks.forEach(taskPath => {
    try {
      const taskJson = fs.readFileSync(taskPath, 'UTF-8')
      const task = JSON.parse(taskJson)

      if (task.tags) {
        // forgive people for not getting tag case right
        task.tags = task.tags.map(
          givenTag => (
            taskSchema.properties.tags.items.enum.find(
              validTag => validTag.toLowerCase() === givenTag.toLowerCase()
            ) || givenTag
          )
        )

        // enforce sort order on tags, *after* standardizing casing
        task.tags.sort()
      }

      // the results of this don't matter (since we test for validity later),
      // so we're not testing the return value here. the only point right now
      // is to *remove* additional properties, potentially coercing this into
      // validity
      validateTask(task)

      fs.writeFileSync(taskPath, `${JSON.stringify(task, null, 2)}\n`)
    } catch (error) {
      throw `Encountered an error formatting ${taskPath}: ${error}`
    }
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
      readmeMd += `\n`
      readmeMd += `\nTags: `
      readmeMd += (task.tags && task.tags.length > 0) ? task.tags.join(', ') : '(not tagged!)'
      readmeMd += `\n`

      if (description) {
        readmeMd += `\n${description}`
      }

      readmeMd += `\n`
      readmeMd += `\n* View in the task library: [usemechanic.com/task/${taskHandle}](https://usemechanic.com/task/${taskHandle})`
      readmeMd += `\n* Task JSON, for direct import: [task.json](../../tasks/${taskHandle}.json)`

      const taskFiles = []

      if (task.script) {
        taskFiles.push('script.liquid')
        fs.writeFileSync(`${taskDocsDir}/script.liquid`, task.script.trim() + `\n`)
      }

      if (task.online_store_javascript) {
        taskFiles.push('online_store_javascript.js.liquid')
        fs.writeFileSync(`${taskDocsDir}/online_store_javascript.js.liquid`, task.online_store_javascript.trim() + `\n`)
      }

      if (task.order_status_javascript) {
        taskFiles.push('order_status_javascript.js.liquid')
        fs.writeFileSync(`${taskDocsDir}/order_status_javascript.js.liquid`, task.order_status_javascript.trim() + `\n`)
      }

      if (taskFiles.length === 1) {
        readmeMd += `\n* Preview task code: [${taskFiles[0]}](./${taskFiles[0]})`
      } else if (taskFiles.length > 1) {
        readmeMd += `\n* Preview task code:`

        taskFiles.forEach(file => {
          readmeMd += `\n  * [${file}](./${file})`
        })
      }

      if (Object.keys(task.options).length > 0) {
        readmeMd += `\n\n## Default options`
        readmeMd += `\n\n\`\`\`json\n${JSON.stringify(task.options, null, 2)}\n\`\`\``
        readmeMd += `\n\n[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)`
      }

      if (`${task.subscriptions_template}`.trim()) {
        readmeMd += `\n\n## Subscriptions`
        readmeMd += `\n\n\`\`\`liquid\n${task.subscriptions_template}\n\`\`\``
        readmeMd += `\n\n[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)`
      }

      if (`${task.docs}`.trim()) {
        readmeMd += `\n\n## Documentation`
        readmeMd += `\n\n${task.docs}`
      }

      readmeMd += `\n\n## Installing this task`
      readmeMd += `\n\nFind this task [in the library at usemechanic.com](https://usemechanic.com/task/${taskHandle}), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/${taskHandle}.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.`

      readmeMd += `\n\n## Contributions`
      readmeMd += `\n\nFound a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).`

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
