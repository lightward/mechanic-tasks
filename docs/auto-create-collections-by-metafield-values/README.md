# Auto create collections by metafield values

Tags: Collections, Metafields, Products, Publish

Running on a schedule or manually, this task will create automated collections based on the validation values of the configured product metafield definitions. Additionally, configuring one or more exact sales channel names will enable publishing of any newly created collections by this task to those sales channels.

* View in the task library: [tasks.mechanic.dev/auto-create-collections-by-metafield-values](https://tasks.mechanic.dev/auto-create-collections-by-metafield-values)
* Task JSON, for direct import: [task.json](../../tasks/auto-create-collections-by-metafield-values.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_metafields_and_collection_title_prefixes__keyval_required": {
    "custom.product_color": "Color: "
  },
  "names_of_sales_channels_to_publish_collections_to__array": [
    "Online Store"
  ],
  "run_daily__boolean": null,
  "run_hourly__boolean": null,
  "test_mode__boolean": true
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{% if options.run_hourly__boolean %}
  mechanic/scheduler/hourly
{% elsif options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
mechanic/user/trigger 
mechanic/actions/perform
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Running on a schedule or manually, this task will create automated collections based on the validation values of the configured product metafield definitions. Additionally, configuring one or more exact sales channel names will enable publishing of any newly created collections by this task to those sales channels.

To configure the 'Product metafields and collection title prefixes' field, use the left-hand side to enter metafield definition identifiers in the format of *namespace.key* (e.g. "custom.product_colors"), and the right-hand side to enter the optional title prefix (e.g. "Color: ") for any collections created for that metafield's validation values.

Upon creation by this task, an automated collection will have a single condition set which auto-includes any products that use the paired metafield definition and value. All other aspects of the collection (e.g. title, handle, sort order, additional conditions, sales channels, etc.) can be manually changed after creation if needed.

To work with this task, product metafields will need to be [activated](https://help.shopify.com/en/manual/custom-data/metafields/automated-collections#activating-automated-collections) as a collection condition.

Notes:
- This task only supports metafields of type "Single line text" or "Single line text (List)".
- Before creating a new collection, this task will verify that there are no existing collections that use that specific metafield value as a product metafield condition.
- This task will log any collections found that use an outdated value from a metafield definition.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-create-collections-by-metafield-values), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-create-collections-by-metafield-values.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
