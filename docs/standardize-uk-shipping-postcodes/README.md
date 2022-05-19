# Standardize UK postcodes

Tags: Shipping, UK

This task watches for incoming orders for the United Kingdom, and reformats any address postcodes that are not in the standard formats "XX XXX", "XXX XXX", and "XXXX XXX".

* View in the task library: [tasks.mechanic.dev/standardize-uk-shipping-postcodes](https://tasks.mechanic.dev/standardize-uk-shipping-postcodes)
* Task JSON, for direct import: [task.json](../../tasks/standardize-uk-shipping-postcodes.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "standardize_billing_postcodes__boolean": true,
  "standardize_shipping_postcodes__boolean": true,
  "only_scan_open_orders_when_running_manually__boolean": true
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task watches for incoming orders for the United Kingdom, and reformats any address postcodes that are not in the standard formats "XX XXX", "XXX XXX", and "XXXX XXX".

Run this task manually to scan _all_ orders in your store's records. Mechanic will update address postcodes for United Kingdom orders, as described above. If you have a large number of orders in your store, this may take some time.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/standardize-uk-shipping-postcodes), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/standardize-uk-shipping-postcodes.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
