# Auto-tag orders based on customer account tags

* [task.json](../../tasks/auto-tag-orders-based-on-customer-account-tags.json) (for import/export)
* [Task script](./script.liquid)

Use this task to apply certain tags to newly-created orders, based on what tags are on the associated customer. Configure this task with one-to-one mappings of customer tags to look for, connected to order tags to add.

## Default options

```json
{
  "customer_tags_to_look_for_and_order_tags_to_add__keyval": {
    "wholesale-customer": "wholesale-order"
  }
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

Use this task to apply certain tags to newly-created orders, based on what tags are on the associated customer. Configure this task with one-to-one mappings of customer tags to look for, connected to order tags to add.
