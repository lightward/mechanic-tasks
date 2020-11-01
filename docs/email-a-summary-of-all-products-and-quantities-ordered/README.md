# Email a summary of all products and quantities ordered

* [task.json](../../tasks/email-a-summary-of-all-products-and-quantities-ordered.json) (for import/export)
* [Task script](./script.liquid)

Use this task to send yourself a quick tally of everything currently waiting in your order list. Super simple: just a list of products, and how many of each were ordered.

## Default options

```json
{
  "only_include_open_orders__boolean": true,
  "only_include_fully_paid_orders__boolean": false,
  "only_include_fully_unfulfilled_orders__boolean": false,
  "count_quantities_by_variant_instead_of_by_product__boolean": false,
  "email_recipient__email_required": "",
  "email_subject__required": "Orders as of {{ \"now\" | date: \"%Y-%m-%d\" }}",
  "day_of_week_to_send_email__required": "Monday",
  "allow_sending_manually__boolean": true
}
```

## Subscriptions

```liquid
mechanic/scheduler/{{ options.day_of_week_to_send_email__required | default: "monday" | downcase }}
{% if options.allow_sending_manually__boolean %}mechanic/user/trigger{% endif %}
```

## Documentation

Use this task to send yourself a quick tally of everything currently waiting in your order list. Super simple: just a list of products, and how many of each were ordered.

This task will scan all of your orders, by default. Configure the task to only look at open, and/or fully paid, and/or fully unshipped orders. This task does not filter orders by when they were placed - only by their status.
