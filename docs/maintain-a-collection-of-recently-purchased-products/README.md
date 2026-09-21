# Maintain a collection of recently purchased products

Tags: Collections, Products

This task watches for newly-paid orders (or newly-fulfilled orders, if you choose), and adds or moves the purchased products to the top of the collection of your choice. Optionally, ignore products that are sold out or that have one of a list of certain tags. Useful for "trending products" functionality. :)

* View in the task library: [tasks.mechanic.dev/maintain-a-collection-of-recently-purchased-products](https://tasks.mechanic.dev/maintain-a-collection-of-recently-purchased-products)
* Task JSON, for direct import: [task.json](../../tasks/maintain-a-collection-of-recently-purchased-products.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "collection_maximum_size__number_required": null,
  "collection__picker_collection_required": null,
  "exclude_products_that_are_sold_out__boolean": false,
  "exclude_products_with_any_of_these_tags__array": null,
  "wait_until_order_is_fulfilled__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{% if options.wait_until_order_is_fulfilled__boolean %}
  shopify/orders/fulfilled
{% else %}
  shopify/orders/paid
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task watches for newly-paid orders (or newly-fulfilled orders, if you choose), and adds or moves the purchased products to the top of the collection of your choice. Optionally, ignore products that are sold out or that have one of a list of certain tags. Useful for "trending products" functionality. :)

Configure this task with a collection which either has no sources or conditions, or only has products manually added. The collection must also be configured for manual sorting or the task will not be able to add the most recent purchases to the top of the collection.

**IMPORTANT**:
- This task must use the 2026-07 API or newer
- Do not add additional sources or conditions to the configured collection as that may prevent this task from being able to maintain it


## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/maintain-a-collection-of-recently-purchased-products), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/maintain-a-collection-of-recently-purchased-products.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
