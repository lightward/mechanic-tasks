# Email a CSV export of orders

* [Task script](./script.liquid)

Use this task to generate and email a CSV of orders, including one row per line item. Filter with a search query or by tags, and auto-tag orders as they're exported. Run the export on demand, and/or nightly. This task is also useful as a template for further development.

## Default options

```json
{
  "search_query_for_orders": "fulfillment_status:unshipped",
  "ignore_orders_with_this_tag": "exported",
  "add_this_tag_after_export": "exported",
  "export_email_recipient__email_required": "isaac@lightward.com",
  "export_email_subject__required": "Unfulfilled orders for {{ \"now\" | date: \"%Y-%m-%d\" }}",
  "export_email_body__required_multiline": "Hello,\n\nPlease see the attachment for currently unfulfilled orders.\n\nThanks,\nMechanic, for {{ shop.name }}",
  "export_csv_filename__required": "unfulfilled-orders-{{ \"now\" | date: \"%Y-%m-%d\" }}",
  "run_export_nightly__boolean": false
}
```

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_export_nightly__boolean %}mechanic/scheduler/daily{% endif %}
```

## Documentation

(none)