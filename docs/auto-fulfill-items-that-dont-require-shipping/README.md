# Auto-fulfill items that don't require shipping

* [task.json](../../tasks/auto-fulfill-items-that-dont-require-shipping.json) (for import/export)
* [Task script](./script.liquid)

Useful for digital products, memberships, or anything else that needs to be fulfilled instantly. This task watches for paid orders, and auto-fulfills all line items that don't require shipping. Optionally, choose to wait until other shippable items are fulfilled, if any.

## Default options

```json
{
  "wait_until_any_other_shippable_items_are_fulfilled__boolean": null,
  "ignore_products_with_this_tag": null
}
```

## Subscriptions

```liquid
shopify/orders/paid
{% if options.wait_until_any_other_shippable_items_are_fulfilled__boolean %}
  shopify/orders/partially_fulfilled
  shopify/orders/fulfilled
{% endif %}
```

## Documentation

Useful for digital products, memberships, or anything else that needs to be fulfilled instantly. This task watches for paid orders, and auto-fulfills all line items that don't require shipping. Optionally, choose to wait until other shippable items are fulfilled, if any.

This task watches for paid orders, and auto-fulfills all line items that don't require shipping. Optionally, choose to wait until other shippable items are fulfilled, if any.
