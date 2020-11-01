# Download and email a file to a customer, when purchased

* [task.json](../../tasks/download-and-email-a-file-to-a-customer-when-purchased.json) (for import/export)
* [Task script](./script.liquid)

null

## Default options

```json
{
  "required_line_item_title__required": "Course",
  "email_subject__required": "Here's your purchased course! (Order {{ order.name }})",
  "email_body__required_multiline": "Hey there! Thanks for purchasing this course. You'll find the PDF attached to this email. :)\n\nThanks,\n{{ shop.name }}",
  "attachment_filename__required": "Course for order {{ order.name }}.pdf",
  "attachment_url__required": "https://example.com/course.pdf"
}
```

## Subscriptions

```liquid
shopify/orders/paid
```

## Documentation

null
