# Send an email alert on fulfillment failure

* [task.json](../../tasks/fulfillment-failure-email.json) (for import/export)
* [Task script](./script.liquid)

Get an alert email sent to you when your tracking service reports a fulfillment failure. This email contains a link to the order details, so you can jump in and resolve the issue for the customer without losing any time.

## Default options

```json
{
  "email_recipient__required": null
}
```

## Subscriptions

```liquid
shopify/fulfillment_events/create
```

## Documentation

Get an alert email sent to you when your tracking service reports a fulfillment failure. This email contains a link to the order details, so you can jump in and resolve the issue for the customer without losing any time.
