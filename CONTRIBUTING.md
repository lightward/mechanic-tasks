# How to contribute

Glad you're here. :)

New and updated tasks and recipes are accepted via pull request. Both use this repository's existing review, checks, and CLA process.

## Tasks

Each task pull request should respect the following:

* The task script (whether new or updated) should reflect awareness of the guidelines in [Writing a high-quality task](https://learn.mechanic.dev/techniques/writing-a-high-quality-task).
* The task documentation must be filled in, and be up to date. The first paragraph of the task documentation will be used as the summary for the task, used in places like the task directory at [tasks.mechanic.dev](https://tasks.mechanic.dev); structure your documentation with that in mind.
* Task tags must come from the list in [lib/task_schema.json](./lib/task_schema.json). Feel free to add tags to that list! The maintainers will review those changes too. :)
* Changes to the task should be represented by a new or updated task JSON export (see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export)). This JSON file must be located in the [tasks/](./tasks/) directory, named with an appropriate handle for the task. (For example, a task named "Hide out-of-stock products" should have its JSON export stored in "tasks/hide-out-of-stock-products.json".)
* After each change to the JSON export file, run `npm run build`. Your pull request must include any files created or updated as a result. Do not make any manual changes to the docs/ directory. Address any failures found in the build process, watching for schema validation failures. (The JSON schema for tasks is found in [lib/task_schema.json](./lib/task_schema.json).)
* You can find step-by-step instructions for the contribution process [here](https://learn.mechanic.dev/resources/task-library/contributing).

## Recipes

1. Start with **Save as recipe** in Mechanic, or author a source recipe using the [recipe format](./recipes/README.md). A private export is a starting point for a contribution; downloading it does not publish anything.
2. Put the source in `recipes/<handle>.json`. Give it a clear name and description, review all code and text for private values, and declare inputs for settings the installing shop must choose.
3. Reference existing library tasks with `task_slug` where possible. Add a new reusable task under `tasks/` in the same PR when needed. This keeps reviewed task code in one place; custom task code may also be included directly.
4. Run the same `npm run build` and `npm test` commands used for tasks. Commit the source, generated bundle in `recipes/bundled/`, and generated documentation. Do not edit generated files directly. Changes to a referenced task also require rebuilding its recipes.
5. Test the resulting bundle in a development shop: review permissions, install the resources, make a deliberate test, and verify the intended result. Include these checks in the PR description.
6. Submit the PR for normal maintainer review and CLA checks. After merge, the existing GitHub webhook triggers library synchronization; no separate manual upload is needed. Recipe discovery remains hidden while the feature is in a private pilot.

Library updates supply the version used by future installations. They do not silently overwrite installed components. Unchanged library tasks retain their normal library connection and update checks; customized code is not replaced.

## Contributor agreement

Each contributor will be required to read and accept [our CLA](./CLA.md). When you file your first pull request, [the CLA assistant](https://github.com/marketplace/actions/cla-assistant-lite) will leave a comment, giving you a statement of agreement that you must paste into a comment of your own.

