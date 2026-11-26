# Move sold-out products to the end of collections when Shopify Flow sends a product

Tags: Collections, In stock, Out of Stock, Shopify Flow, Sort

Use this task with Shopify Flow to move a product to the end of its collections when it sells out, and back to the top when it is restocked.

* View in the task library: [tasks.mechanic.dev/move-sold-out-products-to-the-end-of-collections-when-shopify-flow-sends-a-product](https://tasks.mechanic.dev/move-sold-out-products-to-the-end-of-collections-when-shopify-flow-sends-a-product)
* Task JSON, for direct import: [task.json](../../tasks/move-sold-out-products-to-the-end-of-collections-when-shopify-flow-sends-a-product.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "only_these_collection_handles_or_ids__array": null,
  "ignore_these_collection_handles_or_ids__array": null,
  "test_mode__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
user/flow/sold_out_product
user/flow/restocked_product
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task with Shopify Flow to move a product to the end of its collections when it sells out, and back to the top when it is restocked.

Shopify Flow knows when a variant goes out of stock or comes back in stock, but it has no action for reordering the products in a collection. This task does the reordering. It pairs with two Shopify Flow templates: "Move sold-out products to the end of collections when a variant goes out of stock" and "Move restocked products to the top of collections when a variant is back in stock". Any workflow can call it.

### How it works

When Shopify Flow sends a product with the event topic `user/flow/sold_out_product`, this task checks every variant of that product. If none is available for sale, it moves the product to the last position in each manually sorted collection that contains it. If any variant can still be bought, nothing moves.

When Shopify Flow sends a product with the event topic `user/flow/restocked_product`, this task moves the product to the first position in each manually sorted collection that contains it, provided the product was sold out until now. If another variant was already available for sale, nothing moves.

Shopify only allows reordering in collections whose sort order is "Manually". Collections with any other sort order are skipped and listed in the task's log.

### Setting up the workflow

In Shopify Flow, add the action **Send event to Mechanic** after the "Product variant out of stock" trigger (or the "Product variant back in stock" trigger), with these values:

* Event topic: `user/flow/sold_out_product` (or `user/flow/restocked_product`)
* Event data: `{"product_id": "{{productVariant.product.id}}", "variant_id": "{{productVariant.id}}"}`

### Options

* **Only these collection handles or IDs**: limit the task to these collections. Leave empty to include every manually sorted collection the product is in.
* **Ignore these collection handles or IDs**: leave these collections alone. Not used when the first option has any entries.
* **Test mode**: the task reports the moves it would make, without changing anything.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/move-sold-out-products-to-the-end-of-collections-when-shopify-flow-sends-a-product), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/move-sold-out-products-to-the-end-of-collections-when-shopify-flow-sends-a-product.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
