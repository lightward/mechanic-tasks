const dirCompare = require('dir-compare')
const fs = require('fs')
const glob = require('glob')

const util = require('./util')

const tasksFiles = glob.sync('tasks/*')

const invalidFilenames = tasksFiles.filter(f => !f.match(/^tasks\/[0-9a-z-]+\.json$/))

if (invalidFilenames.length > 0) {
  console.error(`Invalid filenames in tasks/:\n${invalidFilenames.join("\n")}`)
  throw `Found ${invalidFilenames.length} unexpected file(s) in tasks/`
}

tasksFiles.forEach(path => {
  const json = fs.readFileSync(path, 'UTF-8')

  let data;

  try {
    data = JSON.parse(json)
  } catch (error) {
    throw `Found invalid JSON in ${path}`
  }

  if (!json.match(/^  "/m)) {
    throw `Found a JSON file that appears to not be formatted with two-space indentation: ${path}`
  }

  if (!json.match(/\n$/)) {
    throw `Found a JSON file that does not have a trailing newline: ${path}`
  }

  if (data.script.match(/^\s*\t/m)) {
    throw `Found a task that appears to use literal tab characters for indentation (only two-space indentation is allowed): ${path}`
  }
})

util.validateTasks()

try {
  util.buildDocs('.test-docs', {silent: true, validate: false})
} catch (error) {
  fs.rmSync('.test-docs', {recursive: true})

  throw `Caught an error while building to .test-docs: ${error}`
}

const comparison = dirCompare.compareSync('docs', '.test-docs', {compareContent: true})
fs.rmSync('.test-docs', {recursive: true})

if (!comparison.same) {
  console.error(`Differing content:`, comparison.diffSet.filter(d => d.state !== 'equal'))

  throw './docs directory appears to not be up to date; please run `npm run build`'
}

console.log('Everything looks good! 🚀')
