# Auto-tag new customers with the current date

Tags: Auto-Tag, Customers

Use this task to tag incoming customers with the current date/time, using the format of your choice, and optionally a prefix and suffix. If you like, enable "Wait until the customer is enabled" to apply the tag when the customer's online account is activated, rather than when the customer is first created.

* View in the task library: [usemechanic.com/task/auto-tag-customers-with-the-current-date](https://usemechanic.com/task/auto-tag-customers-with-the-current-date)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-customers-with-the-current-date.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_date_format__required": "%Y%m%d",
  "tag_prefix": "signup-",
  "tag_suffix": null,
  "wait_until_the_customer_is_enabled__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
{% if options.wait_until_the_customer_is_enabled__boolean %}
  shopify/customers/enable
{% else %}
  shopify/customers/create
{% endif %}
shopify/customers/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to tag incoming customers with the current date/time, using the format of your choice, and optionally a prefix and suffix. If you like, enable "Wait until the customer is enabled" to apply the tag when the customer's online account is activated, rather than when the customer is first created.

To customize the date/time format, use an "strftime" reference, like [www.strfti.me](http://www.strfti.me/).

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-customers-with-the-current-date), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-with-the-current-date.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
