# Reset all inventory levels to a single level, in bulk

* [Task script](./script.liquid)

A utility task, this one is useful for those one-off moments when your inventory needs a clean slate. Run this task manually to reset all of your inventory, across your entire store and for all locations, to the single level of your choice. No exceptions, no filters.

## Default options

```json
{
  "reset_all_inventory_items_to_this_level__number_required": 0,
  "test_mode__boolean": true
}
```

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

## Documentation

A utility task, this one is useful for those one-off moments when your inventory needs a clean slate. Run this task manually to reset all of your inventory, across your entire store and for all locations, to the single level of your choice. No exceptions, no filters.

Use test mode to see a preview of what this task _would_ do, if test mode were not enabled.