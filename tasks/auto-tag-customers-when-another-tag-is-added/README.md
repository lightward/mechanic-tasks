# Auto-tag customers when another tag is added

* [Task script](./script.liquid)

Does exactly as it says. :) Optionally, use combinations of tags to require, and/or combinations of tags to add.

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

Configure this task with customer tags to watch for on the left, and associated tags to add on the right. (Feel free to use comma-delimited lists on either side of that mapping!) This task will run whenever a customer is created or updated, tagging as configured.