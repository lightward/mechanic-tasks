# Copy order and/or product tags to customers

* [Task script](./script.liquid)

Run this task to scan all of your customers and their order histories in bulk, copying order and/or product tags to the relevant customer. Optionally, configure a specific set of tags to look for, when scanning. Optionally, choose to remove those tags if a qualifying source can't be found - useful for adding customer tags that expire after ordering!

## Default options

```json
{
  "include_order_tags__boolean": true,
  "include_product_tags__boolean": null,
  "only_include_customers_matching_this_query": null,
  "only_include_orders_matching_this_query": null,
  "only_copy_these_tags__array": null,
  "remove_those_tags_if_a_qualifying_source_cannot_be_found__boolean": null,
  "run_daily__boolean": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}

mechanic/shopify/bulk_operation
```

## Documentation

Run this task to scan all of your customers and their order histories in bulk, copying order and/or product tags to the relevant customer. Optionally, configure a specific set of tags to look for, when scanning. Optionally, choose to remove those tags if a qualifying source can't be found.

Both the customer and order query options support Liquid. This means that you can dynamically query for orders, based on things like the current time.

For example, use these options to achieve customer tags that auto-expire a year after the newest qualifying order:

* "Only include orders matching this query": `created_at:>={{ "now" | date: "%s" | minus: 31536000 | date: "%Y-%m-%d" }}`
* "Only copy these tags": (use whatever order or product tag(s) you want to copy)
* "Remove those tags if a qualifying source cannot be found": yes
* "Run daily": yes

Note: the 31536000 value is a quantity of seconds; 31536000 is the number of seconds in a year. To adjust, replace this value with the number of seconds you want to use. For example, 30 days is 2592000 seconds.