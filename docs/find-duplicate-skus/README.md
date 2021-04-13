# Find all Exact Duplicate SKUs

Tags: Products, SKU

This task scans your entire product library for Exact Match Duplicate SKU's and outputs a list of duplicate SKU's found.
The report only contains one version of each SKU.
The report is limited to 500 iterations of 250 variants (125,000 variants). 
Empty SKUs will appear once.

* View in the task library: [usemechanic.com/task/find-duplicate-skus](https://usemechanic.com/task/find-duplicate-skus)
* Task JSON, for direct import: [task.json](../../tasks/find-duplicate-skus.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "exclude_inventory_not_tracked__boolean": true
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task scans your entire product library for Exact Match Duplicate SKU's and outputs a list of duplicate SKU's found.
The report only contains one version of each SKU.
The report is limited to 500 iterations of 250 variants (125,000 variants). 
Empty SKUs will appear once.

"Exclude inventory not tracked" will exclude any product thats inventory is not tracked in Shopify.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/find-duplicate-skus), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/find-duplicate-skus.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
