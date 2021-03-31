# Auto-update inventory policy based on a "preorder" tag

Tags: Auto-Update, Products, Tag, Watch

This task manages your published product catalog, checking for the presence of a "preorder" tag, or a tag that starts with "preorder_" (like "preorder_summer"). If this tag is found, the task updates the product to allow customers to purchase the product after it's out of stock. If no preorder tag is found, the task makes sure customers *cannot* purchase the product if it's out of stock.

* View in the task library: [usemechanic.com/task/auto-update-inventory-policy-based-on-a-preorder-tag](https://usemechanic.com/task/auto-update-inventory-policy-based-on-a-preorder-tag)
* Task JSON, for direct import: [task.json](../../tasks/auto-update-inventory-policy-based-on-a-preorder-tag.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
mechanic/scheduler/daily
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task manages your published product catalog, checking for the presence of a "preorder" tag, or a tag that starts with "preorder_" (like "preorder_summer"). If this tag is found, the task updates the product to allow customers to purchase the product after it's out of stock. If no preorder tag is found, the task makes sure customers *cannot* purchase the product if it's out of stock.

This task scans your product catalog nightly or when you hit the "Run task" button, checking for the presence of a "preorder" tag, or a tag that starts with "preorder_" (like "preorder_summer"). If this tag is found, the task updates the product to allow customers to purchase the product after it's out of stock. If no preorder tag is found, the task makes sure customers *cannot* purchase the product if it's out of stock.

Notes:

* For efficiency, this task only scans _published_ products in your catalog.
* This task supports four event topics:

    * Use `mechanic/scheduler/daily` for a daily scan, at midnight.
    * Use `mechanic/user/trigger` to run the task on-demand, with the push of a button.
    * Use `shopify/products/create` to run the task for each product as it's created.
    * Use `shopify/products/update` to run the task for each product as it's updated.

    Out of the box, the task comes configured with `mechanic/scheduler/daily` and `mechanic/user/trigger`. Use the "Subscriptions" setting (under "Show Advanced", in the task editor) to swap out subscriptions as needed.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-update-inventory-policy-based-on-a-preorder-tag), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-update-inventory-policy-based-on-a-preorder-tag.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
