# Auto-tag customers by order app

* [Task script](./script.liquid)

This task scans your incoming orders, tagging customers based on the Shopify app responsible for creating each order. Run this task manually to tag your customers based on their historical orders.

## Default options

```json
{
  "app_titles_and_customer_tags__keyval_required": null,
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

This task scans your incoming orders, tagging customers based on the Shopify app responsible for creating each order. Run this task manually to tag your customers based on their historical orders.

Configure this task with app titles on the left, and customer tags to add on the right.

Use the "Test mode" option to see what the task intends to do, without actually having the task actually make any changes to your customers.