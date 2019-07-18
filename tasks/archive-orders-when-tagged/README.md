# Archive orders when tagged

* [Task script](./script.liquid)

Add a tag, have the order automatically archived/closed. Simple. :)

## Default options

```json
{
  "required_tag__required": "archive-me"
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