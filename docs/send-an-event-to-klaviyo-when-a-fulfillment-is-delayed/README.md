# Send an event to Klaviyo when a fulfillment is delayed

Tags: External API, Fulfillment

This task will watch for new order fulfillments, waiting a configurable number of days after each one. When the waiting period is over, if the fulfillment's status matches an item in the list, this task will send an event to Klaviyo, allowing you to use Klaviyo to contact the customer appropriately.

* View in the task library: [tasks.mechanic.dev/send-an-event-to-klaviyo-when-a-fulfillment-is-delayed](https://tasks.mechanic.dev/send-an-event-to-klaviyo-when-a-fulfillment-is-delayed)
* Task JSON, for direct import: [task.json](../../tasks/send-an-event-to-klaviyo-when-a-fulfillment-is-delayed.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "qualifying_fulfillment_statuses__array_required": [
    "in_transit",
    "failure",
    "attempted_delivery"
  ],
  "klaviyo_api_token__required": null,
  "klaviyo_event_name__required": "Fulfillment delayed or failed",
  "days_to_wait_before_checking__number_required": 5,
  "test_mode__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{% if options.test_mode__boolean %}
  mechanic/user/trigger
{% else %}
  shopify/orders/fulfilled+{{ options.days_to_wait_before_checking__number_required | default: 5 }}.days
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task will watch for new order fulfillments, waiting a configurable number of days after each one. When the waiting period is over, if the fulfillment's status matches an item in the list, this task will send an event to Klaviyo, allowing you to use Klaviyo to contact the customer appropriately.

Configure the "Qualifying fulfillment statuses" option with values from the **shipment_status** property on Shopify's [Fulfillment resource documentation](https://shopify.dev/docs/api/admin-rest/2024-04/resources/fulfillment).

Enable "Test mode" to make available a "Run task" button - press this button to have Mechanic send a test event to Klaviyo, allowing you to verify that everything's connected properly.

**Note:** This task has been updated to work with a newer Klaviyo API than the v1 and v2 versions being sunset at the end of June 2024. Specifically, it uses revision v2023-06-15.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/send-an-event-to-klaviyo-when-a-fulfillment-is-delayed), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-an-event-to-klaviyo-when-a-fulfillment-is-delayed.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
