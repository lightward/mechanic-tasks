# Auto-tag customers having a rolling minimum total spend

* [Task script](./script.liquid)

Use this task to tag customers who reach a certain spending threshold, by scanning a rolling period of order history. Useful for rewarding customers who keep a consistent spend total.

## Default options

```json
{
  "minimum_total_spent__number_required": null,
  "customer_tag__required": null,
  "days_of_order_history_to_consider__number_required": 30
}
```

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/daily
shopify/orders/create
shopify/orders/updated
shopify/orders/delete
```

## Documentation

Run this task manually to scan all of your customers. **This may take some time!**

This task will also scan all customers on a nightly basis, and will run for a single customer every time a customer's order is paid or cancelled.

Note: By default, Mechanic only scans the last 60 days of order history. To change this, [follow this tutorial](https://help.usemechanic.com/tutorials/enabling-read_all_orders).