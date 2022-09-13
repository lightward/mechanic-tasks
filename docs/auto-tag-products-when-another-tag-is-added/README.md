# Auto-tag products when another tag is added

Tags: Auto-Tag, Bulk, Products, Tag, Watch

This task runs whenever a product is updated (which includes product creation), and it will add the configured "tags to add" to the product when the corresponding "tags to watch for" are present.

* View in the task library: [tasks.mechanic.dev/auto-tag-products-when-another-tag-is-added](https://tasks.mechanic.dev/auto-tag-products-when-another-tag-is-added)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-products-when-another-tag-is-added.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tags_to_watch_for_and_tags_to_add__keyval_required": null,
  "remove_tag_to_add_when_the_corresponding_tag_to_watch_for_is_removed__boolean": false,
  "manual_bulk_mode__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{% if options.manual_bulk_mode__boolean %}
  mechanic/user/trigger
{% else %}
  shopify/products/update
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task runs whenever a product is updated (which includes product creation), and it will add the configured "tags to add" to the product when the corresponding "tags to watch for" are present.

Configure this task with product tags to watch for on the left, and associated tags to add on the right. (Feel free to use a comma-delimited list on the right side, too.) Optionally, you may choose to remove the "tags to add" whenever its paired "tag to watch for" is absent.

This task also supports a manual bulk mode for scanning ALL products in the shop. Select the manual bulk mode option (and save the task) to switch to manual mode and display the "Run task" button.

*Note*: Make sure to switch the manual bulk mode off when the full scan is complete if you want the task to resume responding to product update events.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-products-when-another-tag-is-added), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-products-when-another-tag-is-added.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
