# Auto-tag orders that contain an out of stock item

* [Task script](./script.liquid)

This task watches for newly-created orders, and checks each line item for that variant's total inventory quantity. If the inventory quantity is 0 or less, the task will add the tag of your choice to the order (unless the order already has that tag).

## Default options

```json
{
  "apply_this_order_tag__required": ""
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

This task watches for newly-created orders, and checks each line item for that variant's total inventory quantity. If the inventory quantity is 0 or less, the task will add the tag of your choice to the order (unless the order already has that tag).