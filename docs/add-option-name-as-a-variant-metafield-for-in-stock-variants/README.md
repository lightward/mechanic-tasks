# Add Option Name as a Variant Metafield for In Stock Variants

Tags: (not tagged!)

This task was originally designed to power a "Size in Stock" filter in Online Store 2.0 filtering. It could equally be configured for "Colour in Stock" or any other option name from where you want to use the values in a filter.
2.0 filtering does include an In Stock and Size filter by default, but the combination is unintuitive.

* View in the task library: [usemechanic.com/task/add-option-name-as-a-variant-metafield-for-in-stock-variants](https://usemechanic.com/task/add-option-name-as-a-variant-metafield-for-in-stock-variants)
* Task JSON, for direct import: [task.json](../../tasks/add-option-name-as-a-variant-metafield-for-in-stock-variants.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "metafield_namespace__required": "mechanic",
  "metafield_keyval__required": "size_in_stock",
  "match_option_name__required": "Size"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/inventory_levels/update
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task was originally designed to power a "Size in Stock" filter in Online Store 2.0 filtering. It could equally be configured for "Colour in Stock" or any other option name from where you want to use the values in a filter.
2.0 filtering does include an In Stock and Size filter by default, but the combination is unintuitive.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/add-option-name-as-a-variant-metafield-for-in-stock-variants), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/add-option-name-as-a-variant-metafield-for-in-stock-variants.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
