# Auto-add the draft order ID to an order's attributes

* [Task script](./script.liquid)

When a new order is created from a draft order, this task will automatically add the draft order ID to the custom attributes of the new order.

## Default options

```json
{
  "order_attribute_name_for_storing_the_draft_order_id__required": "Draft order ID"
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

When a new order is created from a draft order, this task will automatically add the draft order ID to the custom attributes of the new order.