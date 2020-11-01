# Auto-tag new draft orders

* [task.json](../../tasks/auto-tag-new-draft-orders.json) (for import/export)
* [Task script](./script.liquid)

Immediately upon the creation of a draft order, add one or more tags. Simple as that. :)

## Default options

```json
{
  "draft_order_tags_to_add__array_required": null
}
```

## Subscriptions

```liquid
shopify/draft_orders/create
```

## Documentation

Immediately upon the creation of a draft order, add one or more tags. Simple as that. :)
