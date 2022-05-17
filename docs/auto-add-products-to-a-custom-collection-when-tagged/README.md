# Auto-add products to a custom collection when tagged

Tags: Collections, Products, Watch

Just as it says. Useful for collections that can't be configured for automatic products, but still should have some products pulled in automatically.

* View in the task library: [tasks.mechanic.dev/auto-add-products-to-a-custom-collection-when-tagged](https://tasks.mechanic.dev/auto-add-products-to-a-custom-collection-when-tagged)
* Task JSON, for direct import: [task.json](../../tasks/auto-add-products-to-a-custom-collection-when-tagged.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_tags_and_collection_ids__keyval_number_required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/products/create
shopify/products/update
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Just as it says. Useful for collections that can't be configured for automatic products, but still should have some products pulled in automatically.

This task runs in response to products being tagged. Configure the "Product tags and collection IDs" option with product tags on the left (case-insensitive), and collection IDs on the right. The collection _must_ be a custom collection - one that has its products chosen manually. ([Learn how to find the collection ID](https://help.usemechanic.com/en/articles/2946120-how-do-i-find-an-id-for-a-product-collection-order-or-something-else).)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-add-products-to-a-custom-collection-when-tagged), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-add-products-to-a-custom-collection-when-tagged.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
