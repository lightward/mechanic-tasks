# Demonstration: Trigger a custom event on specific variant changes

Tags: Demonstration, Demonstration, Products, Variants, Watch

This demonstration task responds to product updates, and for each variant of a product it will check to see if the configured attribute matches the stored value. If any of the variant values have changed, then the task will fire the configured custom event, passing along the entire product resource in the same manner as a standard product webhook. This is very useful for creating custom tasks that focus on the busines logic for the problem being solved (e.g. "Send a notification when a product price changes"), without having to continually build the scaffolding of a specific attribute monitor in each.

* View in the task library: [tasks.mechanic.dev/demonstration-trigger-a-custom-event-on-specific-variant-changes](https://tasks.mechanic.dev/demonstration-trigger-a-custom-event-on-specific-variant-changes)
* Task JSON, for direct import: [task.json](../../tasks/demonstration-trigger-a-custom-event-on-specific-variant-changes.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "custom_event_topic__required": "user/product/price_update",
  "attribute_lookups__array_required": [
    "price"
  ]
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/products/update
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This demonstration task responds to product updates, and for each variant of a product it will check to see if the configured attribute matches the stored value. If any of the variant values have changed, then the task will fire the configured custom event, passing along the entire product resource in the same manner as a standard product webhook. This is very useful for creating custom tasks that focus on the busines logic for the problem being solved (e.g. "Send a notification when a product price changes"), without having to continually build the scaffolding of a specific attribute monitor in each.

A variant attribute lookup can be something simple, like "price", or more complicated: use multiple attribute lookups, like "metafields", "custom", and "unit_price", and "value" to get a specific variant metafield value. Refer to [Shopify's API documentation](https://shopify.dev/api/admin-rest/2023-01/resources/webhook#event-topics-products-update) to find the standard product variant property you want to monitor.

This demonstration task has been preconfigured with price as the variant attribute to monitor, and a custom event topic of "user/product/price_update". Read more about [custom user event topics](https://learn.mechanic.dev/platform/events/topics#user).

**Important**: After configuring this task, run the task manually once to have it store information about each product's existing variant attributes. The custom event will not be fired when a product is first seen by this task.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/demonstration-trigger-a-custom-event-on-specific-variant-changes), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/demonstration-trigger-a-custom-event-on-specific-variant-changes.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
