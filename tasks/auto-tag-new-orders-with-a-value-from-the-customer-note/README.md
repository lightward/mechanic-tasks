# Auto-tag new orders with a value from the customer note

* [Task script](./script.liquid)

This task watches incoming orders, and tags each order with a certain value from the customer's note, as identified by a configurable prefix. For example, if your customers have notes resembling "Username: xyz", configure this task with the prefix "Username: " to have it tag incoming orders as "xyz". Useful with apps like inkFrog, which add eBay usernames to customer notes, using a prefix.

## Default options

```json
{
  "tag_prefix_in_customer_note__required": "eBay User:"
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

This task watches incoming orders, and tags each order with a certain value from the customer's note, as identified by a configurable prefix. For example, if your customers have notes resembling "Username: xyz", configure this task with the prefix "Username: " to have it tag incoming orders as "xyz".