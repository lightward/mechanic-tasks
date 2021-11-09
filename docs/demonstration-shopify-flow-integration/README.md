# Demonstration: Shopify Flow integration

Tags: Demonstration, Integration, Shopify Flow

This task demonstrates how to use the four Mechanic Shopify Flow triggers: General, Customer, Product, and Order.

* View in the task library: [usemechanic.com/task/demonstration-shopify-flow-integration](https://usemechanic.com/task/demonstration-shopify-flow-integration)
* Task JSON, for direct import: [task.json](../../tasks/demonstration-shopify-flow-integration.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "customer_id__number": "",
  "order_id__number": "",
  "product_id__number": "",
  "send_general_trigger__boolean": true
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger

user/flow/customer
user/flow/order
user/flow/product
user/flow/general
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task demonstrates how to use the four Mechanic Shopify Flow triggers: General, Customer, Product, and Order.

You'll learn about the user-defined data that we can send to Shopify Flow: user_boolean, user_email, user_number, user_string, user_url.

We demonstrate subscribing to an event topic fired by a Shopify Flow action. You'll need to set up a workflow in the Shopify Flow app to trigger this event topic. This example could be in any Mechanic task; we have this as part of this task for demonstration purposes. The event topic can be anything in the user domain. We choose user/flow/customer (etc), but it could be something like user/flow/xyz.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/demonstration-shopify-flow-integration), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/demonstration-shopify-flow-integration.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
