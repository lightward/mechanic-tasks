# Auto-tag orders based on cart attributes

* [task.json](../../tasks/auto-tag-orders-based-on-cart-attributes.json) (for import/export)
* [Task script](./script.liquid)

Use this task to automatically categorize orders based on the cart attributes configured before checkout. Useful if you allow customers to supply extra information about their order, or if your cart has some hidden coding that adds cart attributes programatically.

## Default options

```json
{
  "cart_attribute_to_monitor__required": null,
  "cart_attribute_values_and_order_tags_to_add__keyval_required": null
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

Use this task to automatically categorize orders based on the cart attributes configured before checkout. Useful if you allow customers to supply extra information about their order, or if your cart has some hidden coding that adds cart attributes programatically.

Configure the "Cart attribute to monitor" option with the exact name of the cart attribute in use. This value is case-sensitive, and must include any punctuation used in the actual cart attribute.

Configure the "Cart attribute values and order tags to add" option with an attribute value on the left, and a tag on the right, to be applied when the left-hand value is found on an order. Add as many value/tag pairs as you like. :)
