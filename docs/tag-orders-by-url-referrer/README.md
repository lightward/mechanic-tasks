# Tag online orders by their ?ref= referral codes

Tags: Auto-Tag, Orders, Referral

Have your traffic sources refer customers using ?ref=referral-code-here URLs (using the query parameter of your choice), then use this task to automatically tag each customer's order according to the referral value they arrived with. Optionally, tag the customer as well.

* View in the task library: [tasks.mechanic.dev/tag-orders-by-url-referrer](https://tasks.mechanic.dev/tag-orders-by-url-referrer)
* Task JSON, for direct import: [task.json](../../tasks/tag-orders-by-url-referrer.json)
* Preview task code:
  * [script.liquid](./script.liquid)
  * [online_store_javascript.js.liquid](./online_store_javascript.js.liquid)

## Default options

```json
{
  "query_parameter_name__required": "ref",
  "cart_attribute_name__required": "Referral code",
  "tag_customer_with_parameter_value__boolean": false,
  "only_tag_the_customer_for_their_first_order__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Have your traffic sources refer customers using ?ref=referral-code-here URLs (using the query parameter of your choice), then use this task to automatically tag each customer's order according to the referral value they arrived with. Optionally, tag the customer as well.

This task adds JavaScript to your storefront, which adds referral parameters (using the query parameter of your choice) to the customer's cart (using the cart attribute name of your choice). (Referral values are saved in a browser cookie for one year.) When the corresponding order is created, this task copies the cart attribute over to the order's tags. Optionally, select to have the value applied to the customer as a tag as well.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/tag-orders-by-url-referrer), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-orders-by-url-referrer.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
