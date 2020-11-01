# Auto-tag new orders by staff member

* [task.json](../../tasks/auto-tag-new-orders-by-staff-member.json) (for import/export)
* [Task script](./script.liquid)

Use this task to easily keep track of who's responsible for which orders. Works for draft orders, too!

## Default options

```json
{
  "tag_orders__boolean": true,
  "tag_draft_orders__boolean": true,
  "staff_names_and_tags__keyval_required": {
    "Jane Doe": "created-by-jane",
    "Zhang Wei": "created-by-zhang"
  }
}
```

## Subscriptions

```liquid
{% if options.tag_orders__boolean %}shopify/orders/create{% endif %}
{% if options.tag_draft_orders__boolean %}shopify/draft_orders/create{% endif %}
```

## Documentation

Use this task to easily keep track of who's responsible for which orders. Works for draft orders, too!

To use this task, fill in the "Staff names and tags" option with staff names on the left, and the tags you'd like to apply on the right. Make sure to use each staff member's exact full name – it's case-sensitive! Tags will be applied as soon as the order or draft order is created.
