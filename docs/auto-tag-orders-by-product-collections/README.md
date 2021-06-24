# Auto-tag orders by product collections

Tags: Auto-Tag, Collections, Orders, Products

Use this task to automatically tag orders based on what collection(s) the customer has ordered from. Useful for broadly classifying orders according to their contents.

* View in the task library: [usemechanic.com/task/auto-tag-orders-by-product-collections](https://usemechanic.com/task/auto-tag-orders-by-product-collections)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-by-product-collections.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "collections_and_tags__keyval_required": {
    "Summer Swimware": "summer, swimware",
    "Cold Weather Gear": "winter"
  }
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to automatically tag orders based on what collection(s) the customer has ordered from. Useful for broadly classifying orders according to their contents.

Fill in the "Collections and tags" option with the collection on the left, and tags on the right. When specifying the collection, you can use the collection title (e.g. "Summer Swimware"), handle ("e.g. summer-swimware"), or ID (e.g. 27359487103). These are all case-sensitive, so double-check your work!

Run this task manually to scan and tag every order in your store. (To process orders older than 60 days, [enable "read all orders"](https://learn.mechanic.dev/platform/shopify/read-all-orders).)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-by-product-collections), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-by-product-collections.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
