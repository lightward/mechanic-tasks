# Auto-connect new products to all locations

* [Task script](./script.liquid)

Using Shopify's multi-locations feature, and importing products in bulk? Use this task to automatically connect each new product to every location for your store.

## Default options

```json
{
  "track_inventory_using_shopify__boolean": true,
  "allow_orders_for_out_of_stock_products__boolean": true
}
```

## Subscriptions

```liquid
shopify/products/create
```

## Documentation

(none)