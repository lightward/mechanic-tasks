# Set a default tracking number for new fulfillments

* [Task script](./script.liquid)

This task is here to illustrate managing tracking numbers. If a default tracking number is right for your orders, you can use this task to make sure that one is added the instant a fulfillment is created.

## Default options

```json
{
  "default_tracking_number__required": null
}
```

## Subscriptions

```liquid
shopify/fulfillments/create
```

## Documentation

(none)