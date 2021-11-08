# Trigger Shopify Flow with a time delay

Tags: Integration, Shopify Flow

This task does exactly as it sounds :) Add time delays to your Shopify Flow workflows. Choose your time delays by using offsets in the Subscriptions field. Learn more about [offsets here.](https://learn.mechanic.dev/core/tasks/subscriptions#offsets "Offsets")

* View in the task library: [usemechanic.com/task/trigger-shopify-flow-with-a-time-delay](https://usemechanic.com/task/trigger-shopify-flow-with-a-time-delay)
* Task JSON, for direct import: [task.json](../../tasks/trigger-shopify-flow-with-a-time-delay.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
shopify/orders/create+5.minutes
shopify/orders/create+5.days
shopify/orders/create+5.months
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task does exactly as it sounds :) Add time delays to your Shopify Flow workflows. Choose your time delays by using offsets in the Subscriptions field. Learn more about [offsets here.](https://learn.mechanic.dev/core/tasks/subscriptions#offsets "Offsets")

Easily modify this task to subscribe to any [Shopify webhook.](https://learn.mechanic.dev/platform/events/topics#shopify "Shopify webhook") Use either `product_id` or `order_id` or `customer_id` in the Mechanic Flow action to bring the corresponding object into context in Shopify Flow. 

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/trigger-shopify-flow-with-a-time-delay), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/trigger-shopify-flow-with-a-time-delay.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
