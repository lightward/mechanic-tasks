# Auto-tag orders that are ready to ship

* [Task script](./script.liquid)

Use this task to tag orders, as they are created, if every single line item is related to a variant that's in stock. Optionally, choose to tag qualifying unfulfilled orders whenever an inventory level is updated.

## Default options

```json
{
  "ignore_line_items_not_fulfilled_manually__boolean": null,
  "order_tag_to_add__required": "ready-to-ship",
  "scan_unfulfilled_orders_when_inventory_is_updated__boolean": null,
  "test_mode__boolean": null,
  "run_every_10_minutes__boolean": null,
  "run_hourly__boolean": null
}
```

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger

{% if options.scan_unfulfilled_orders_when_inventory_is_updated__boolean %}
  shopify/inventory_levels/update
{% endif %}

{% if options.run_every_10_minutes__boolean %}
  mechanic/scheduler/10min
{% elsif options.run_hourly__boolean %}
  mechanic/scheduler/hourly
{% endif %}
```

## Documentation

This task tags orders, as they are created, if every single line item is related to a variant that has a total inventory level of 0 or more.

Enable "Ignore line items not fulfilled manually" to skip line items that you do not fulfill yourself from within Shopify. (This means that orders that consist _entirely_ of these line items will never be tagged by this task.)

Enable "Scan unfulfilled orders when inventory is updated" to tag qualifying orders whenever an inventory level is updated. Use caution with this option: if your inventory updates are high-frequency, this may not be a good idea. :) Use "Run hourly" instead.