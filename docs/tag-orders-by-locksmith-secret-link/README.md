# Tag online orders by ?ls= Locksmith secret link used

Tags: Auto-Tag, Locksmith, Orders

Tag orders with the Locksmith secret link used when placing an order. Optionally, tag the customer as well. 

* View in the task library: [tasks.mechanic.dev/tag-orders-by-locksmith-secret-link](https://tasks.mechanic.dev/tag-orders-by-locksmith-secret-link)
* Task JSON, for direct import: [task.json](../../tasks/tag-orders-by-locksmith-secret-link.json)
* Preview task code:
  * [script.liquid](./script.liquid)
  * [online_store_javascript.js.liquid](./online_store_javascript.js.liquid)

## Default options

```json
{
  "query_parameter_name__required": "ls",
  "cart_attribute_name__required": "Locksmith Secret Link",
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

Tag orders with the Locksmith secret link used when placing an order. Optionally, tag the customer as well. 

### Enable Mechanic in your theme

This task needs to run JavaScript in your online store. If Mechanic shows a theme setup prompt, click **Enable Mechanic in your theme**, make sure Mechanic's **Online store JavaScript** is turned on under **App embeds**, and click **Save** in the theme editor. Then return to Mechanic to confirm setup.

You only need to do this once for your current theme; the same setting serves all your enabled tasks that use storefront JavaScript. You can leave it enabled if you disable this task. If your store doesn't already have Mechanic loading JavaScript, this task's storefront functionality won't work until setup is complete. [Learn about theme setup and existing tasks](https://learn.mechanic.dev/core/tasks/advanced-settings/javascript#enable-mechanic-in-your-theme).

### How this task works

Note: if a customer uses multiple secret links, the last one used is assigned to the order.

This task adds JavaScript to your storefront, which adds ?ls= parameter (Locksmith secret link) to the customer's cart (using the cart attribute name of your choice). (Locksmith secret link values are saved in a browser cookie for one year.) This task copies the cart attribute to the order's tags when the corresponding order is created. Optionally, select to have the value applied to the customer as a tag as well.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/tag-orders-by-locksmith-secret-link), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-orders-by-locksmith-secret-link.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
