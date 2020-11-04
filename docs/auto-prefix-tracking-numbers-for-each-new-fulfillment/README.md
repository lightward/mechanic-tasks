# Auto-prefix tracking numbers for each new fulfillment

* [task.json](../../tasks/auto-prefix-tracking-numbers-for-each-new-fulfillment.json) (for import/export)
* [Task script](./script.liquid)

This task runs immediately after each new fulfillment is created, and adds a prefix to its tracking number, if a tracking number is present.

## Default options

```json
{
  "tracking_number_prefix_to_add__required": null,
  "notify_customer__boolean": false
}
```

## Subscriptions

```liquid
shopify/fulfillments/create
```

## Documentation

This task runs immediately after each new fulfillment is created, and adds a prefix to its tracking number, if a tracking number is present.
