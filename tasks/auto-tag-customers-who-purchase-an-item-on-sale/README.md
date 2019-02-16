# Auto-tag customers who purchase an item on sale

* [Task script](./script.liquid)

When a customer orders an item on sale (technically, when the order contains a product variant that includes a "compare at" price), this task automatically adds a tag to their account. Useful for keeping track of customers who take advantage of sale pricing!

## Default options

```json
{
  "tag_to_add__required": "discount-shopper"
}
```

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
```

## Documentation

This task will run for each new order that's created, tagging customers who purchase a product that has a "compare at" price.

Run this task manually to have Mechanic scan your entire customer base, and each customer's order history. **This may take some time!** To ensure that Mechanic can access your complete history, [make sure "Read all orders" is enabled](https://help.usemechanic.com/tutorials/enabling-read_all_orders).

**Please note**: This task will only tag customers who've purchased a product that _currently_ has a "compare at" price. Historical information about "compare at" pricing is not available, and so this task cannot make tagging decisions based on historical pricing.