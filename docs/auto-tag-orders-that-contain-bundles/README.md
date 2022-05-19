# Auto-tag orders that contain bundles

Tags: Bundle, Orders

Use this task to automatically detect and tag orders that contain a complete bundle of products. Configure this task with as many bundles as you like, specifying a tag to add and a list of required SKUs.

* View in the task library: [tasks.mechanic.dev/auto-tag-orders-that-contain-bundles](https://tasks.mechanic.dev/auto-tag-orders-that-contain-bundles)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-that-contain-bundles.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tags_and_required_skus__keyval_required": {
    "Summer bundle": "SUN01,SUN02,SUN03",
    "Winter bundle": "SNOW01,SNOW02,SNOW03"
  }
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to automatically detect and tag orders that contain a complete bundle of products. Configure this task with as many bundles as you like, specifying a tag to add and a list of required SKUs.

Fill in "Tags and required SKUs" option with tags on the left, and a comma-delimited lists of SKUs on the right.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-orders-that-contain-bundles), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-that-contain-bundles.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
