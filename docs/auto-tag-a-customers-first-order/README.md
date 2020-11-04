# Auto-tag a customer's first order

* [task.json](../../tasks/auto-tag-a-customers-first-order.json) (for import/export)
* [Task script](./script.liquid)

Watches for incoming orders that are the very first order on file for the related customer, and adds the tag of your choice.

## Default options

```json
{
  "order_tag_to_add__required": null
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

Watches for incoming orders that are the very first order on file for the related customer, and adds the tag of your choice.
