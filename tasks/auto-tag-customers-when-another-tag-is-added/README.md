# Auto-tag customers when another tag is added

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
shopify/customers/create
shopify/customers/update
```

## Documentation

Configure this task with customer tags to watch for on the left, and associated tags to add on the right. (Feel free to use a comma-delimited list on the right side, too.) This task will run whenever a customer is created or updated, tagging as configured.