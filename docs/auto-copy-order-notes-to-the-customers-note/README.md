# Auto-copy order notes to the customer's note

* [task.json](../../tasks/auto-copy-order-notes-to-the-customers-note.json) (for import/export)
* [Task script](./script.liquid)

This task appends order notes to the related customer's note, whenever the order note changes.

## Default options

```json
{
  "note_prefix": "Order {{ order.name }}: "
}
```

## Subscriptions

```liquid
shopify/orders/create
shopify/orders/updated
```

## Documentation

This task appends order notes to the related customer's note, whenever the order note changes.
