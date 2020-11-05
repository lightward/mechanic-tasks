# Auto-tag products by their publish date

This task formats the publish date of each product (according to the format you choose), adds a prefix (also of your choosing), and applies it to each product. Run this task manually to scan your entire product catalog at once, or wait for the task to run automatically when products are created or updated.

* View in the task library: [usemechanic.com/task/auto-tag-products-by-their-publish-date](https://usemechanic.com/task/auto-tag-products-by-their-publish-date)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-products-by-their-publish-date.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "date_format__required": "%B %Y",
  "tag_prefix__required": "Published: "
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
shopify/products/create
shopify/products/update
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task formats the publish date of each product (according to the format you choose), adds a prefix (also of your choosing), and applies it to each product. Run this task manually to scan your entire product catalog at once, or wait for the task to run automatically when products are created or updated.

Use [strfti.me](http://www.strfti.me) to build a date format that suits you. Use the previews to the right of the task options form to verify that your date format does what you expect. If you've got any questions, use the chat button in the corner. :)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-products-by-their-publish-date), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-products-by-their-publish-date.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
