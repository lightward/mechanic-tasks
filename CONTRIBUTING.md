# How to contribute

Glad you're here. :)

New and updated tasks are accepted via pull request. Each pull request should respect the following:

* The task script (whether new or updated) should reflect awareness of the guidelines in [Writing a high-quality task](https://docs.usemechanic.com/article/450-writing-a-high-quality-task).
* The task documentation must be filled in, and be up to date. The first paragraph of the task documentation will be used as the summary for the task, used in places like the task directory at [usemechanic.com/tasks](https://usemechanic.com/tasks); structure your documentation with that in mind.
* Changes to the task should be represented by a new or updated task JSON export (see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks)). This JSON file must be located in the [tasks/](./tasks/) directory, named with an appropriate handle for the task. (For example, a task named "Hide out-of-stock products" should have its JSON export stored in "tasks/hide-out-of-stock-products.json".)
* After each change to the JSON export file, run `node ./build.js`. Your pull request must include any files created or updated as a result. Do not make any manual changes to the docs/ directory.

Each contributor will be required to read and accept [our CLA](./CLA.md). When you file your first pull request, [the CLA assistant](https://github.com/marketplace/actions/cla-assistant-lite) will leave a comment, giving you a statement of agreement that you must paste into a comment of your own.
