# Auto-tag new customers with the current date

* [task.json](../../tasks/auto-tag-customers-with-the-current-date.json) (for import/export)
* [Task script](./script.liquid)

Use this task to tag incoming customers with the current date/time, using the format of your choice, and optionally a prefix and suffix. If you like, enable "Wait until the customer is enabled" to apply the tag when the customer's online account is activated, rather than when the customer is first created.

## Default options

```json
{
  "tag_date_format__required": "%Y%m%d",
  "tag_prefix": "signup-",
  "tag_suffix": null,
  "wait_until_the_customer_is_enabled__boolean": null
}
```

## Subscriptions

```liquid
{% if options.wait_until_the_customer_is_enabled__boolean %}
  shopify/customers/enable
{% else %}
  shopify/customers/create
{% endif %}
shopify/customers/create
```

## Documentation

Use this task to tag incoming customers with the current date/time, using the format of your choice, and optionally a prefix and suffix. If you like, enable "Wait until the customer is enabled" to apply the tag when the customer's online account is activated, rather than when the customer is first created.

To customize the date/time format, use an "strftime" reference, like [www.strfti.me](http://www.strfti.me/).
