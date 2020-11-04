# Auto-tag orders with UTM parameters

* [task.json](../../tasks/auto-tag-orders-with-utm-parameters.json) (for import/export)
* [Task script](./script.liquid)

This task automatically tags incoming orders with the UTM campaign, content, medium, source, and/or term associated with the customer's visit. Run this task manually to tag your existing orders.

## Default options

```json
{
  "tag_with_utm_campaign__boolean": null,
  "tag_with_utm_content__boolean": null,
  "tag_with_utm_medium__boolean": null,
  "tag_with_utm_source__boolean": null,
  "tag_with_utm_term__boolean": null
}
```

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

## Documentation

This task automatically tags incoming orders with the UTM campaign, content, medium, source, and/or term associated with the customer's visit. Run this task manually to tag your existing orders.
