# Auto-tag orders that contain bundles

Use this task to automatically detect and tag orders that contain a complete bundle of products. Configure this task with as many bundles as you like, specifying a tag to add and a list of required SKUs.

* View in the task library: [usemechanic.com/task/auto-tag-orders-that-contain-bundles](https://usemechanic.com/task/auto-tag-orders-that-contain-bundles)
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

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to automatically detect and tag orders that contain a complete bundle of products. Configure this task with as many bundles as you like, specifying a tag to add and a list of required SKUs.

Fill in "Tags and required SKUs" option with tags on the left, and a comma-delimited lists of SKUs on the right.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-that-contain-bundles), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-that-contain-bundles.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
