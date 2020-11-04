# Auto-tag new orders using Liquid

* [task.json](../../tasks/auto-tag-new-orders-using-liquid.json) (for import/export)
* [Task script](./script.liquid)

This task offers an introduction to using Liquid to dynamically update your orders. This task comes with example Liquid code, showing you how to tag an order as "even" or "odd", based on whether the order number is even or odd; replace this Liquid with whatever suits your purposes. :)

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

This task offers an introduction to using Liquid to dynamically update your orders. This task comes with example Liquid code, showing you how to tag an order as "even" or "odd", based on whether the order number is even or odd; replace this Liquid with whatever suits your purposes. :)
