# Schedule product tags by date

Tags: Auto-Tag, Products, Schedule

Use this task to schedule adding and/or removing tags for specific products, with support for scheduling by date, or by date and hour.

* View in the task library: [tasks.mechanic.dev/schedule-product-tags-by-date](https://tasks.mechanic.dev/schedule-product-tags-by-date)
* Task JSON, for direct import: [task.json](../../tasks/schedule-product-tags-by-date.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "dates_and_tags_to_add__keyval": {
    "2019-08-24": "saturday",
    "2019-08-23": "friday"
  },
  "dates_and_tags_to_remove__keyval": {
    "2019-08-24": "friday",
    "2019-08-23": "thursday"
  },
  "product_ids__array_number_required": [
    "1234567890"
  ],
  "use_hour_specificity__boolean": false,
  "test_mode__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{% unless options.test_mode__boolean %}
  {% if options.use_hour_specificity__boolean %}
    mechanic/scheduler/hourly
  {% else %}
    mechanic/scheduler/daily
  {% endif %}
{% endunless %}

mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to schedule adding and/or removing tags for specific products, with support for scheduling by date, or by date and hour.

Use the "Product IDs" option to choose which products this task will tag. [Learn how to find product IDs here.](https://learn.mechanic.dev/techniques/finding-a-resource-id)

Fill in the "Dates and tags to add" and/or "Dates and tags to remove" options with dates (including year, month, and day) on the left, and product tags on the right.

Enable "Use hour specificity" to have Mechanic schedule tags by date _and_ hour, instead of only by date. When this option is enabled, fill in tag dates using an hour at the end, e.g. "2019-01-01 2PM". A date without an hour will be interpreted as midnight at the beginning of that date - for example, "2019-01-01" will be interpreted as "2019-01-01 12AM".

When "Test mode" is enabled, use the "Run task" button to see a summary of Mechanic's understanding of your configuration. Mechanic will not perform any tagging or untagging when this mode is enabled.

This task will run nightly, at midnight in your store's local timezone. If "Use hour specificity" is enabled, the task will run hourly instead. You can also run this task manually, using the "Run task" button, and the task will perform the operations appropriate for the current day (or hour, if "Use hour specificity" is enabled).

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/schedule-product-tags-by-date), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/schedule-product-tags-by-date.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
