# Tag orders that have at least x of a certain product

* [task.json](../../tasks/tag-orders-that-have-at-least-x-of-a-certain-product.json) (for import/export)
* [Task script](./script.liquid)

Use this task to monitor for orders that meet a certain quantity threshold, per line item or totaled up, optionally only looking at certain SKUs. Optionally, send yourself an email notification when such an order comes in.

## Default options

```json
{
  "minimum_quantity_threshold__number_required": null,
  "evaluate_threshold_per_line_item__boolean": false,
  "only_monitor_these_skus__array": null,
  "order_tag_to_apply": null,
  "email_notification_recipient__email": null
}
```

## Subscriptions

```liquid
shopify/orders/paid
```

## Documentation

Use this task to monitor for orders that meet a certain quantity threshold, per line item or totaled up, optionally only looking at certain SKUs. Optionally, send yourself an email notification when such an order comes in.
