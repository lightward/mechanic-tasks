# Auto-tag orders created from drafts

* [Task script](./script.liquid)

This task monitors for newly-created orders, and auto-tags any that were originally based on a Shopify draft order, using the tag of your choice.

## Default options

```json
{
  "tag_to_add__required": "from-draft"
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

This task monitors for newly-created orders, and auto-tags any that were originally based on a Shopify draft order, using the tag of your choice.