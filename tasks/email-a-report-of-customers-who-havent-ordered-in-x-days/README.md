# Email a report of customers who haven't ordered in X days

* [Task script](./script.liquid)

Use this task to request or schedule an email digest of customers, having a certain tag, who haven't placed an order in a certain number of days.

## Default options

```json
{
  "required_customer_tag__required": null,
  "include_customers_who_have_not_placed_an_order_in_this_many_days__number_required": null,
  "email_subject_prefix__required": null,
  "email_recipient__required_email": null,
  "send_email_anyway_if_no_customers_are_found__boolean": null,
  "send_email_daily__boolean": null,
  "send_email_every_monday__boolean": null
}
```

## Subscriptions

```liquid
mechanic/shopify/bulk_operation

mechanic/user/trigger

{% if options.send_email_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}

{% if options.send_email_every_monday__boolean %}
  mechanic/scheduler/monday
{% endif %}
```

## Documentation

Run this task manually to request a report immediately, or configure the task to run automatically on a schedule.

[YouTube: Watch the development video!](https://youtu.be/y1fV3aQrS1g)