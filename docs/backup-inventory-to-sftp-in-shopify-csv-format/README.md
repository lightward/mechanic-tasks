# Backup inventory to SFTP in Shopify CSV format

Tags: Backups, CSV, Export, FTP

On a configurable schedule, this task generates a Shopify-friendly CSV of your inventory, and uploads it to the SFTP destination of your choice. This is a convenient way to keep regular backups of your entire product inventory: simply import a CSV to restore your inventory to that point in time. ([Learn more about CSV imports and exports of Shopify inventory.](https://help.shopify.com/en/manual/locations/changing-quantities/exporting-or-importing-inventory))

* View in the task library: [usemechanic.com/task/backup-inventory-to-sftp-in-shopify-csv-format](https://usemechanic.com/task/backup-inventory-to-sftp-in-shopify-csv-format)
* Task JSON, for direct import: [task.json](../../tasks/backup-inventory-to-sftp-in-shopify-csv-format.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "only_export_products_matching_this_query": null,
  "run_every_x_hours__number": null,
  "sftp_host__required": null,
  "sftp_port__required_number": null,
  "sftp_user__required": null,
  "sftp_password__required": null,
  "sftp_upload_directory": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_every_x_hours__number == 24 %}
  mechanic/scheduler/daily
{% elsif options.run_every_x_hours__number %}
  mechanic/scheduler/hourly
{% endif %}
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

On a configurable schedule, this task generates a Shopify-friendly CSV of your inventory, and uploads it to the SFTP destination of your choice. This is a convenient way to keep regular backups of your entire product inventory: simply import a CSV to restore your inventory to that point in time. ([Learn more about CSV imports and exports of Shopify inventory.](https://help.shopify.com/en/manual/locations/changing-quantities/exporting-or-importing-inventory))

To only export certain products, set the "Only export products matching this query" option to a search query that works with Shopify's inventory admin area. For example, to only export products tagged "backmeup", use the search query "tag:backmeup".

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/backup-inventory-to-sftp-in-shopify-csv-format), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/backup-inventory-to-sftp-in-shopify-csv-format.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
