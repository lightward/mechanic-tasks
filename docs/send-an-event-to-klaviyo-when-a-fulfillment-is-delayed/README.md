# Send an event to Klaviyo when a fulfillment is delayed

* [task.json](../../tasks/send-an-event-to-klaviyo-when-a-fulfillment-is-delayed.json) (for import/export)
* [Task script](./script.liquid)

null

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

## Subscriptions

```liquid
{% if options.test_mode__boolean %}
  mechanic/user/trigger
{% else %}
  shopify/orders/fulfilled+{{ options.days_to_wait_before_checking__number_required | default: 5 }}.days
{% endif %}
```

## Documentation

null
