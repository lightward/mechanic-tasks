# Auto-tag orders with a cart attribute

* [Task script](./script.liquid)

This task checks for incoming orders, watching for orders that have a specific cart attribute filled in. When present, the task then copies that attribute over to the order's tags.

## Default options

```json
{
  "cart_attribute_to_monitor__required": null
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

This task checks for incoming orders, watching for orders that have a specific cart attribute filled in. When present, the task then copies that attribute over to the order's tags.