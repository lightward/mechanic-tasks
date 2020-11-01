# Email someone when a certain product is purchased

* [task.json](../../tasks/email-someone-when-certain-product-purchased.json) (for import/export)
* [Task script](./script.liquid)

null

## Default options

```json
{
  "product_title__required": null,
  "email_address__required": null,
  "email_subject__required": null,
  "email_body__multiline_required": null,
  "reply_to_email_address": null,
  "number_of_days_to_wait_before_emailing__number": null
}
```

## Subscriptions

```liquid
{% assign delay_days = options.number_of_days_to_wait_before_emailing__number %}
shopify/orders/paid{% if delay_days != blank %}+{{ delay_days }}.days{% endif %}
```

## Documentation

null
