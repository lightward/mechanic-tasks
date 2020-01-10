# Auto-tag customers based on discount codes used

* [Task script](./script.liquid)

Use this task to easily identify customers who used certain discount codes. This task runs automatically on incoming orders, and can be run manually to tag customers based on historical orders. Optionally, choose to remove tags, instead of adding them.

## Default options

```json
{
  "discount_codes_and_tags__keyval_required": {
  },
  "untag_customers_instead_of_tagging_them__boolean": null,
  "allow_partial_matches_when_checking_for_discount_codes__boolean": null
}
```

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
```

## Documentation

This task runs automatically on incoming orders. Run this task manually to scan your store's order history, tagging customers based on historical orders.