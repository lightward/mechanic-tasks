# Auto-tag customers when another tag is added

Does exactly as it says. :) Optionally, use combinations of tags to require, and/or combinations of tags to add.

* View in the task library: [usemechanic.com/task/auto-tag-customers-when-another-tag-is-added](https://usemechanic.com/task/auto-tag-customers-when-another-tag-is-added)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-customers-when-another-tag-is-added.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tags_to_watch_for_and_tags_to_add__keyval_required": null,
  "remove_tag_to_add_when_the_corresponding_tag_to_watch_for_is_removed__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/customers/create
shopify/customers/update
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Does exactly as it says. :) Optionally, use combinations of tags to require, and/or combinations of tags to add.

Configure this task with customer tags to watch for on the left, and associated tags to add on the right. (Feel free to use comma-delimited lists on either side of that mapping!) This task will run whenever a customer is created or updated, tagging as configured.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-customers-when-another-tag-is-added), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-when-another-tag-is-added.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
