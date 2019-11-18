# Email the customer when tracking numbers are added to their order

* [Task script](./script.liquid)

Use this task with services that add tracking numbers to fulfillments after fulfillments are created, to ensure that customers are notified when their tracking number is available.

## Default options

```json
{
  "email_subject__required": "Shipping update for order {{ fulfillment.order.name | default: \"(number)\" }}",
  "email_body__required_multiline": "Hello customer,\n\nTrack your package: TRACKING_NUMBERS\n\nThanks,\n{{ shop.name }}"
}
```

## Subscriptions

```liquid
shopify/fulfillments/create
shopify/fulfillments/update
```

## Documentation

This task works by monitoring created and updated fulfillments. It scans for and saves the tracking numbers currently available for an order, and whenever that set changes, it sends an email to the customer.

Use "TRACKING_NUMBERS" in your email body to insert a list of tracking numbers for the customer's order. Or, use "{{ fulfillment.tracking_number }}", to insert the single tracking number of the fulfillment   that the task has just been created or updated.

[YouTube: Watch the development video!](https://youtu.be/W9VztafUY84)