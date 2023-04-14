# Reset inventory levels when they get too low

Tags: Inventory, Low Stock

Use this task to automatically maintain minimum inventory levels. Optionally, filter by variant or product ID, or by variant option, or by product type, choosing whether to blacklist or whitelist your filter selections.

* View in the task library: [tasks.mechanic.dev/reset-inventory-levels-when-they-get-too-low](https://tasks.mechanic.dev/reset-inventory-levels-when-they-get-too-low)
* Task JSON, for direct import: [task.json](../../tasks/reset-inventory-levels-when-they-get-too-low.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "minimum_inventory_level__number_required": 0,
  "location_id__number": null,
  "whitelist_filter_mode__boolean": null,
  "blacklist_filter_mode__boolean": null,
  "filter_for_these_variant_ids__array_number": null,
  "filter_for_these_variant_options__keyval": null,
  "filter_for_these_product_types__array": null,
  "filter_for_these_product_ids__array_number": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/inventory_levels/update
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to automatically maintain minimum inventory levels. Optionally, filter by variant or product ID, or by variant option, or by product type, choosing whether to blacklist or whitelist your filter selections.

This task runs as inventory levels are updated, auto-updating qualifying levels to meet the configured minimum.

This task can be configured with several resource IDs. [Learn how to find these.](https://learn.mechanic.dev/techniques/finding-a-resource-id)

If a location ID is provided, this task will _only_ adjust inventory for items at that location.

Additional filters may be configured, using either whitelist mode to _only_ perform inventory adjustments for items that match the filter, or blacklist mode to perform adjustments for all items that do _not_ match the filter. All filters are optional, and each filter will be ignored if it is left unconfigured.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/reset-inventory-levels-when-they-get-too-low), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/reset-inventory-levels-when-they-get-too-low.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
