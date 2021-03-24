# Send an event to Klaviyo when a fulfillment is delayed

Tags: Fulfillment, External API

This task will watch for new order fulfillments, waiting a configurable number of days after each one. When the waiting period is over, if the fulfillment's status matches an item in the list, this task will send an event to Klaviyo, allowing you to use Klaviyo to contact the customer appropriately.

* View in the task library: [usemechanic.com/task/send-an-event-to-klaviyo-when-a-fulfillment-is-delayed](https://usemechanic.com/task/send-an-event-to-klaviyo-when-a-fulfillment-is-delayed)
* Task JSON, for direct import: [task.json](../../tasks/send-an-event-to-klaviyo-when-a-fulfillment-is-delayed.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "test_mode__boolean": null,
  "qualifying_fulfillment_statuses__array_required": [
    "in_transit",
    "failure",
    "attempted_delivery"
  ],
  "klaviyo_api_token__required": null,
  "klaviyo_event_name__required": "Fulfillment delayed or failed",
  "days_to_wait_before_checking__number_required": 5
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
{% if options.test_mode__boolean %}
  mechanic/user/trigger
{% else %}
  shopify/orders/fulfilled+{{ options.days_to_wait_before_checking__number_required | default: 5 }}.days
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task will watch for new order fulfillments, waiting a configurable number of days after each one. When the waiting period is over, if the fulfillment's status matches an item in the list, this task will send an event to Klaviyo, allowing you to use Klaviyo to contact the customer appropriately.

Configure the "Qualifying fulfillment statuses" option with values [from Shopify's "shipment_status" documentation](https://help.shopify.com/en/api/reference/shipping-and-fulfillment/fulfillment#shipment-status-property-2019-07).

Enable "Test mode" to make available a "Run task" button - press this button to have Mechanic send a test event to Klaviyo, allowing you to verify that everything's connected properly.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/send-an-event-to-klaviyo-when-a-fulfillment-is-delayed), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-an-event-to-klaviyo-when-a-fulfillment-is-delayed.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
