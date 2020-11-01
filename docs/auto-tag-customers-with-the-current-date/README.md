# Auto-tag new customers with the current date

* [task.json](../../tasks/auto-tag-customers-with-the-current-date.json) (for import/export)
* [Task script](./script.liquid)

null

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

null
