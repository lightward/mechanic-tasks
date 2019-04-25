# Auto-add an order note for returning customers

* [Task script](./script.liquid)

Use this task to identify orders that are for customers who have previously ordered from your store. Optionally, ignore more frequent purchasers, by ignoring customers who've made an order recently. Useful for making sure to include a welcome-back gift in order shipments. :)

## Default options

```json
{
  "ignore_customers_who_previously_ordered_after_this_date": null,
  "ignore_customers_who_previously_ordered_less_than_x_days_ago__number": 60,
  "order_note_to_add__required_multiline": "Add the prodigal customer insert"
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

(none)