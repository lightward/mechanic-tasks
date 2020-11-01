# Email customers after purchasing a certain product

* [task.json](../../tasks/product-order-email.json) (for import/export)
* [Task script](./script.liquid)

Send an email to the customer with specific information regarding a product they just purchased. Useful for digital products, or anytime you'd like to communicate something extra about a product you offer. (Note: this does not replace the Shopify order confirmation email!)

## Default options

```json
{
  "email_subject__required": null,
  "email_body__multiline_required": null,
  "product_sku__required": null,
  "days_to_wait_before_emailing__number": null
}
```

## Subscriptions

```liquid
shopify/orders/create{% if options.days_to_wait_before_emailing__number != blank %}+{{ options.days_to_wait_before_emailing__number }}.days{% endif %}
```

## Documentation

Send an email to the customer with specific information regarding a product they just purchased. Useful for digital products, or anytime you'd like to communicate something extra about a product you offer. (Note: this does not replace the Shopify order confirmation email!)
