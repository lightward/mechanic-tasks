# Standardize UK postcodes

* [task.json](../../tasks/standardize-uk-shipping-postcodes.json) (for import/export)
* [Task script](./script.liquid)

null

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

null
