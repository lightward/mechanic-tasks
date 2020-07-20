# Auto-add default custom attributes to new orders

* [Task script](./script.liquid)

Shopify allows orders to have custom attributes associated with them – and these attributes can be edited from within Shopify. Use this task to configure default attributes to be added to all new orders, providing an attribute name and (optionally) a value. Feel free to leave the value blank if you know you'll want to add your own values later, within Shopify.

## Default options

```json
{
  "default_order_attributes_to_add__keyval_required": {
    "Assigned CSM": ""
  }
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

Shopify allows orders to have custom attributes associated with them – and these attributes can be edited from within Shopify. Use this task to configure default attributes to be added to all new orders, providing an attribute name and (optionally) a value. Feel free to leave the value blank if you know you'll want to add your own values later, within Shopify.