# Auto-tag orders by shipping address city

* [Task script](./script.liquid)

This task automatically tags orders based on the city in the shipping address. Within this key you define the city and the tag on the order.

## Default options

```json
{
  "city__required": null,
  "tag_to_apply__required": null
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

(none)