# Auto-tag orders when another tag is added

* [task.json](../../tasks/auto-tag-orders-when-another-tag-is-added.json) (for import/export)
* [Task script](./script.liquid)

Does exactly as it says. :)

## Default options

```json
{
  "tags_to_watch_for_and_tags_to_add__keyval_required": null,
  "remove_tag_to_add_when_the_corresponding_tag_to_watch_for_is_removed__boolean": null
}
```

## Subscriptions

```liquid
shopify/orders/create
shopify/orders/updated
```

## Documentation

Does exactly as it says. :)

Configure this task with order tags to watch for on the left, and associated tags to add on the right. (Feel free to use a comma-delimited list on the right side, too.) This task will run whenever an order is created or updated, tagging as configured.
