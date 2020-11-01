# Auto-tag customers by purchased SKUs

* [task.json](../../tasks/auto-tag-customers-by-purchased-skus.json) (for import/export)
* [Task script](./script.liquid)

Use this task to keep customers tagged with the SKUs of the products they've purchased, optionally ignoring product purchases that have been refunded. Add a tag prefix to make SKU tags easy to distinguish from your other customer tags. This task also stores all purchased SKUs in a customer metafield, dodging the 250 tag limit that exists for customers.

## Default options

```json
{
  "tag_prefix": "",
  "ignore_refunded_purchases__boolean": true,
  "enable_running_manually__boolean": null,
  "customer_query_when_running_manually": null,
  "test_mode__boolean": true
}
```

## Subscriptions

```liquid
shopify/orders/paid

{% if options.ignore_refunded_purchases__boolean %}
  shopify/refunds/create
{% endif %}

{% if options.enable_running_manually__boolean %}
  mechanic/user/trigger
  mechanic/shopify/bulk_operation
{% endif %}
```

## Documentation

Use this task to keep customers tagged with the SKUs of the products they've purchased, optionally ignoring product purchases that have been refunded. Add a tag prefix to make SKU tags easy to distinguish from your other customer tags. This task also stores all purchased SKUs in a customer metafield, dodging the 250 tag limit that exists for customers.

This task keeps customers tagged with the SKUs of the products they've purchased, optionally ignoring product purchases that have been refunded. Add a tag prefix to make SKU tags easy to distinguish from your other customer tags.

This task also records all purchased SKUs in a JSON metafield called "mechanic.purchased_skus", associated with the customer. For customers who have purchased more products than would fit inside Shopify's maximum tag limit of 250, this metafield provides a way for you to access _all_ purchased SKUs.
