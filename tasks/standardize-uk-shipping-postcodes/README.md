# Standardize UK postcodes

* [Task script](./script.liquid)

This task watches for incoming orders for the United Kingdom, and reformats any address postcodes that are not in the standard formats "XX XXX", "XXX XXX", and "XXXX XXX".

## Default options

```json
{
  "standardize_billing_postcodes__boolean": true,
  "standardize_shipping_postcodes__boolean": true,
  "only_scan_open_orders_when_running_manually__boolean": true
}
```

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
```

## Documentation

This task watches for incoming orders for the United Kingdom, and reformats any address postcodes that are not in the standard formats "XX XXX", "XXX XXX", and "XXXX XXX".

Run this task manually to scan _all_ orders in your store's records. Mechanic will update address postcodes for United Kingdom orders, as described above. If you have a large number of orders in your store, this may take some time.