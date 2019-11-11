# Reset inventory levels when they get too low

* [Task script](./script.liquid)

Use this task to automatically maintain minimum inventory levels. Optionally, filter by variant or product ID, or by variant option, or by product type, choosing whether to blacklist or whitelist your filter selections.

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

## Subscriptions

```liquid
shopify/inventory_levels/update
```

## Documentation

This task runs as inventory levels are updated, auto-updating qualifying levels to meet the configured minimum.

This task can be configured with several resource IDs. [Learn how to find these.](https://help.usemechanic.com/en/articles/2946120-how-do-i-find-an-id-for-a-product-collection-order-or-something-else)

If a location ID is provided, this task will _only_ adjust inventory for items at that location.

Additional filters may be configured, using either whitelist mode to _only_ perform inventory adustments for items that match the filter, or blacklist mode to perform adjustments for all items that do _not_ match the filter. All filters are optional, and each filter will be ignored if it is left unconfigured.