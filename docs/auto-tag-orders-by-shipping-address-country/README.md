# Auto-tag orders by shipping address country

This task automatically adds the tag of your choice to incoming orders, based on the country in the order's shipping address.

* View in the task library: [usemechanic.com/task/auto-tag-orders-by-shipping-address-country](https://usemechanic.com/task/auto-tag-orders-by-shipping-address-country)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-by-shipping-address-country.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "country_code__required": null,
  "tag_to_apply__required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task automatically adds the tag of your choice to incoming orders, based on the country in the order's shipping address.

This task automatically tags orders based on the country in the shipping address. The "Country code" option expects the two-character country code in all caps. [Find country codes here.](https://help.shopify.com/en/api/storefront-api/reference/enum/countrycode)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-by-shipping-address-country), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-by-shipping-address-country.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
