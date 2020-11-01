# How to contribute

Glad you're here. :)

New and updated tasks are accepted via pull request. Each pull request should respect the following:

* The task script (whether new or updated) should reflect awareness of the guidelines in [Writing a high-quality task](https://docs.usemechanic.com/article/450-writing-a-high-quality-task).
* Changes to the task should be represented by a new or updated task JSON export (see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks)). This JSON file must be located in the [tasks/](./tasks/) directory, named with an appropriate handle for the task. (For example, a task named "Hide out-of-stock products" should have its JSON export stored in "tasks/hide-out-of-stock-products.json".)
* After each change to the JSON export file, run `node ./build.js`. Your pull request must include any files created or updated as a result. Do not make any manual changes to the docs/ directory.
