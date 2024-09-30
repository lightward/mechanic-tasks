# Auto-remove a product tag x days after it's added

Tags: Auto-Tag, Schedule, Untag

Use this this task to monitor for the addition of a specific product tag, and to schedule the product to be untagged a configurable number of days later. Useful for temporarily adding a product to a collection, or qualifying the product for some other temporary functionality.

* View in the task library: [tasks.mechanic.dev/auto-remove-a-product-tag-x-days-after-its-added](https://tasks.mechanic.dev/auto-remove-a-product-tag-x-days-after-its-added)
* Task JSON, for direct import: [task.json](../../tasks/auto-remove-a-product-tag-x-days-after-its-added.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_to_monitor__required": null,
  "days_to_wait_before_untagging__number_required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/products/update
user/task/untag_product
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this this task to monitor for the addition of a specific product tag, and to schedule the product to be untagged a configurable number of days later. Useful for temporarily adding a product to a collection, or qualifying the product for some other temporary functionality.

As soon as that tag is detected, the task will _add_ a second tag, indicating that the product is scheduled to be untagged. (For example, if the task is configured to watch for the tag "Approved", the task will _add_ the tag "Approved - will be auto-removed by Mechanic".) The task will then schedule a followup event for the future, according to the configured number of days to wait. At that time, the task will remove both tags.

Important note: To _prevent_ the task from untagging the product later, manually remove the task's additional tag (i.e. the "will be auto-removed by Mechanic" tag).

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-remove-a-product-tag-x-days-after-its-added), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-remove-a-product-tag-x-days-after-its-added.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
