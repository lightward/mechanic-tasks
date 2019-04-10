# Keep inventory levels in sync within products

* [Task script](./script.liquid)

Useful for selling, say, a limited print with different framing options, this task makes sure that a product's inventory levels, for each variant and location, are all kept in sync.

## Default options

```json
{
  "filter_by_these_location_names__array": [

  ],
  "filter_by_these_product_types__array": [

  ]
}
```

## Subscriptions

```liquid
shopify/inventory_levels/update
```

## Documentation

When an inventory level is updated, this task will update the inventory for all other variants of the same product.

Optionally, configure this task to filter for certain location names and product types. If you leave these blank, the task will monitor and update inventory across all locations, and for all product types.

**Limitations**

Changes to multiple inventory items for a single product, within the span of 60 seconds, will result in only the first inventory change being applied to all inventory items. For example, if a customer purchases a framed _and_ unframed version of the same print, the inventory levels for that product will only be decremented by 1, not by 2. If this is causing trouble for you, let us know!