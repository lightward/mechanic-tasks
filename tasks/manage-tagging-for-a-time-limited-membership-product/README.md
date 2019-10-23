# Manage tagging for a time-limited membership product

* [Task script](./script.liquid)

Use this task to automatically tag customers when they purchase specific a membership product, and then untag them after a certain amount of time has passed! (Optionally, this task can also automatically untag the customer if/when their membership order is cancelled.)

## Default options

```json
{
  "membership_product_title__required": "1 month membership",
  "membership_tag__required": "member",
  "days_to_wait_before_untagging__number_required": 30,
  "remove_tag_immediately_for_cancelled_orders__boolean": null
}
```

## Subscriptions

```liquid
shopify/orders/paid
{% if options.remove_tag_immediately_for_cancelled_orders__boolean %}
  shopify/orders/updated
{% endif %}
user/memberships/expire
```

## Documentation

(none)