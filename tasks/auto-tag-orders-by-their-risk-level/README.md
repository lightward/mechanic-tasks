# Auto-tag orders by their risk level

* [Task script](./script.liquid)

This task applies the tag of your choice to incoming orders, based on the risk level determined for the order. Run this task manually to tag all orders in your store's records, according to their respective risk levels. Combine this task with an email task, to email customers when their order is flagged.

## Default options

```json
{
  "risk_levels_and_tags__keyval_required": {
    "Low": "low-risk",
    "Medium": "medium-risk",
    "High": "high-risk"
  }
}
```

## Subscriptions

```liquid
shopify/orders/updated
mechanic/user/trigger
```

## Documentation

This task applies the tag of your choice to incoming orders, based on the risk level determined for the order.

Run this task manually to tag all orders in your store's records, according to their respective risk levels.

Combine this task with ["Email customers when their order is tagged"](https://usemechanic.com/task/email-customer-when-order-tagged) to alert customers when their order is flagged.

Feel free to remove a tag from this task's options, if you don't need it. :)