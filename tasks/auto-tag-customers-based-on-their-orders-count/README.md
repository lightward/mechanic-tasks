# Auto-tag customers based on their orders count

* [Task script](./script.liquid)

This task applies customer tags based on how many orders they've placed. Add multiple tags, with a minimum orders count each, to advance your customers through different tiers as they place more orders. Optionally, only keep the customer tag with the highest matching order minimum.

## Default options

```json
{
  "order_count_minimums_and_tags__keyval_required": {
    "1": "new_customer",
    "5": "returning_customer",
    "10": "committed_customer",
    "20": "hero_customer"
  },
  "only_keep_the_tag_for_the_highest_minimum_count__boolean": false,
  "only_tag_customers_with_an_active_account__boolean": false
}
```

## Subscriptions

```liquid
shopify/customers/create
shopify/customers/update
mechanic/user/trigger
```

## Documentation

Run this task manually to apply your tag rules to all of your customers at once.