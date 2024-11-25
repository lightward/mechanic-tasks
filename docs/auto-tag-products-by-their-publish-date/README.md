# Auto-tag products by their publish date

Tags: Auto-Tag, Products, Publish

This task formats the publish date of a product (according to the format you choose), adds a prefix (also of your choosing), and applies it as a tag to the product. Run this task manually to scan your entire catalog of active products, or wait for the task to run automatically when products are created or updated.

* View in the task library: [tasks.mechanic.dev/auto-tag-products-by-their-publish-date](https://tasks.mechanic.dev/auto-tag-products-by-their-publish-date)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-products-by-their-publish-date.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "date_format__required": "%B %Y",
  "tag_prefix__required": "Published: "
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
shopify/products/create
shopify/products/update
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task formats the publish date of a product (according to the format you choose), adds a prefix (also of your choosing), and applies it as a tag to the product. Run this task manually to scan your entire catalog of active products, or wait for the task to run automatically when products are created or updated.

Use [strfti.me](http://www.strfti.me) to build a date format that suits you. Use the previews to the right of the task options form to verify that your date format does what you expect. If you've got any questions, use the chat button in the corner. :)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-products-by-their-publish-date), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-products-by-their-publish-date.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
