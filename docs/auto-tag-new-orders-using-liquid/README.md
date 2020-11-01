# Auto-tag new orders using Liquid

* [task.json](../../tasks/auto-tag-new-orders-using-liquid.json) (for import/export)
* [Task script](./script.liquid)

null

## Default options

```json
{
  "order_tag_value__code_multiline_required": "{% comment %}\n  This is an example! It calculates whether or not the order number\n  is even, and tags the order accordingly.\n{% endcomment %}\n\n{% assign mod = order.number | modulo: 2 %}\n\n{% if mod == 0 %}\n  even\n{% else %}\n  odd\n{% endif %}"
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

null
