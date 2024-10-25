# Auto-update inventory policy based on a "preorder" tag

Tags: Auto-Update, Products, Tag, Watch

This task scans your product catalog nightly or when you hit the "Run task" button, checking for the presence of a "preorder" tag, or a tag that starts with "preorder_" (like "preorder_summer"). If this tag is found, the task updates the product to allow customers to purchase the product after it's out of stock. If no preorder tag is found, the task makes sure customers *cannot* purchase the product if it's out of stock.

* View in the task library: [tasks.mechanic.dev/auto-update-inventory-policy-based-on-a-preorder-tag](https://tasks.mechanic.dev/auto-update-inventory-policy-based-on-a-preorder-tag)
* Task JSON, for direct import: [task.json](../../tasks/auto-update-inventory-policy-based-on-a-preorder-tag.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "run_on_product_create_and_update_instead_of_daily__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{% if options.run_on_product_create_and_update_instead_of_daily__boolean %}
  shopify/products/create
  shopify/products/update
{% else %}
  mechanic/scheduler/daily
{% endif %}
mechanic/shopify/bulk_operation
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task scans your product catalog nightly or when you hit the "Run task" button, checking for the presence of a "preorder" tag, or a tag that starts with "preorder_" (like "preorder_summer"). If this tag is found, the task updates the product to allow customers to purchase the product after it's out of stock. If no preorder tag is found, the task makes sure customers *cannot* purchase the product if it's out of stock.

Optionally, choose whether to "Run on product create and update instead of daily", which includes events such as product tagging, inventory level adjustments, and inventory policy changes.

Notes:

* For efficiency, this task only scans _published_ products in your catalog.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-update-inventory-policy-based-on-a-preorder-tag), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-update-inventory-policy-based-on-a-preorder-tag.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
