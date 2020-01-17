# Auto-tag orders by app

* [Task script](./script.liquid)

Some apps are responsible for placing orders. Use this task to tag orders, both incoming and historical, based on which app was responsible for placing them.

## Default options

```json
{
  "app_titles_and_order_tags__keyval_required": null,
  "test_mode__boolean": null
}
```

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

## Documentation

This task scans your incoming orders, tagging them based on the Shopify app responsible for placing each one. Run this task manually to scan and tag your existing orders.

Configure this task with app titles on the left, and order tags to add on the right.

Use the "Test mode" option to see what the task intends to do, without actually having the task actually make any changes to your customers.