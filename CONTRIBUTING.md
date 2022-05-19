# How to contribute

Glad you're here. :)

New and updated tasks are accepted via pull request. Each pull request should respect the following:

* The task script (whether new or updated) should reflect awareness of the guidelines in [Writing a high-quality task](https://learn.mechanic.dev/techniques/writing-a-high-quality-task).
* The task documentation must be filled in, and be up to date. The first paragraph of the task documentation will be used as the summary for the task, used in places like the task directory at [tasks.mechanic.dev](https://tasks.mechanic.dev); structure your documentation with that in mind.
* Task tags must come from the list in [lib/task_schema.json](./lib/task_schema.json). Feel free to add tags to that list! The maintainers will review those changes too. :)
* Changes to the task should be represented by a new or updated task JSON export (see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export)). This JSON file must be located in the [tasks/](./tasks/) directory, named with an appropriate handle for the task. (For example, a task named "Hide out-of-stock products" should have its JSON export stored in "tasks/hide-out-of-stock-products.json".)
* After each change to the JSON export file, run `npm run build`. Your pull request must include any files created or updated as a result. Do not make any manual changes to the docs/ directory. Address any failures found in the build process, watching for schema validation failures. (The JSON schema for tasks is found in [lib/task_schema.json](./lib/task_schema.json).)
* You can find step-by-step instructions for the contribution process [here](https://learn.mechanic.dev/resources/task-library/contributing).

Each contributor will be required to read and accept [our CLA](./CLA.md). When you file your first pull request, [the CLA assistant](https://github.com/marketplace/actions/cla-assistant-lite) will leave a comment, giving you a statement of agreement that you must paste into a comment of your own.


