# Delete non-purchased Neon Sign Customiser app generated products older then X days

Tags: Delete, Products

Use this task to automatically delete non-purchased products created by [Neon Sign Customiser](https://apps.shopify.com/neon-product-customiser). Set the number of days old products should be before Mechanic deletes a product.

* View in the task library: [tasks.mechanic.dev/delete-non-purchased-neon-sign-customiser-generated-products-older-than-x-days](https://tasks.mechanic.dev/delete-non-purchased-neon-sign-customiser-generated-products-older-than-x-days)
* Task JSON, for direct import: [task.json](../../tasks/delete-non-purchased-neon-sign-customiser-generated-products-older-than-x-days.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "products_must_be_x_number_of_days_old__number__required": "7",
  "test_mode__boolean": true,
  "live_mode__boolean": false,
  "run_daily__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_daily__boolean %}
 mechanic/scheduler/daily
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to automatically delete non-purchased products created by [Neon Sign Customiser](https://apps.shopify.com/neon-product-customiser). Set the number of days old products should be before Mechanic deletes a product.

Tick the "Test mode" checkbox to verify which products will be deleted: after saving, use the "Run task" button to run the product scan, and you'll receive a list of products that Mechanic would have deleted in live mode. 

Once you're ready, uncheck the "Test mode" box and check the "Live mode" box, save the task, then use "Run task" to permanently delete all matching products.

Check the run daily option to have the task run at 12AM daily.


## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/delete-non-purchased-neon-sign-customiser-generated-products-older-than-x-days), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/delete-non-purchased-neon-sign-customiser-generated-products-older-than-x-days.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
