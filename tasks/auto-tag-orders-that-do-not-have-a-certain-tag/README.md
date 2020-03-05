# Auto-tag orders that do not have a certain tag

* [Task script](./script.liquid)

This task monitors for new and updated orders, adding a tag if a certain other tag is found missing. If and when the order does receive that certain other tag, the task's tag will be removed.

## Default options

```json
{
  "order_tag_to_watch_for__required": null,
  "order_tag_to_add__required": null
}
```

## Subscriptions

```liquid
shopify/orders/create
shopify/orders/updated
```

## Documentation

This task monitors for new and updated orders, adding a tag if a certain other tag is found missing. If and when the order does receive that certain other tag, the task's tag will be removed.