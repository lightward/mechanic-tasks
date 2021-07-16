# Auto-tag orders by shipping address country

Tags: Auto-Tag, Orders, Shipping

This task automatically adds the tag of your choice to incoming orders, based on the country in the order's shipping address.

* View in the task library: [usemechanic.com/task/auto-tag-orders-by-shipping-address-country](https://usemechanic.com/task/auto-tag-orders-by-shipping-address-country)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-by-shipping-address-country.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tags_to_apply_and_country_codes__keyval_required": null
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

Begin by clicking the __Add item__ link next to the _Tags to apply and country codes_ field. Enter tags on the left (one per row), and for each tag add one or more two-character country codes on the right, separated by commas. Country codes should be entered in all caps. [Find country codes here.](https://help.shopify.com/en/api/storefront-api/reference/enum/countrycode)

Example input: Central America > BZ,CR,SV,GT,HN,NI,PA

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-by-shipping-address-country), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-by-shipping-address-country.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
