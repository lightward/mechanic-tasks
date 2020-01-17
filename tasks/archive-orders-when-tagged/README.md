# Archive orders when tagged

* [Task script](./script.liquid)

Add a tag, have the order automatically archived/closed. Simple. :)

## Default options

```json
{
  "required_tag__required": "archive-me",
  "allow_manual_unarchiving_of_orders__boolean": null
}
```

## Subscriptions

```liquid
shopify/orders/create
shopify/orders/updated
mechanic/user/trigger
```

## Documentation

This task monitors for new and updated orders, watching for the tag of your choice to be added. When the tag is found, this task will make sure the order is archived/closed.

Run this task manually to scan your older orders, archiving any that match your tag.

Enable "Allow manually unarchiving of orders" to have this task add a metafield to each order, as it archives them. The task will use this metafield as a reminder to _not_ archive those orders in the future, regardless of what happens to them.