# Download and email a file to a customer, when purchased

* [Task script](./script.liquid)

This task watches for newly-paid orders. When an order contains a certain line item, this task retrieves a file from the URL of your choice, and emails that file to the customer. Because URLs are easier to share, this makes for a safer way to distribute downloadable materials.

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

This task watches for newly-paid orders. When an order contains a certain line item, this task retrieves a file from the URL of your choice, and emails that file to the customer. Because URLs are easier to share, this makes for a safer way to distribute downloadable materials.

Shopify allows file uploads via the "Files" page. Once uploaded, you'll receive a URL which can be used for this task. [Learn how to upload files to Shopify.](https://help.shopify.com/en/manual/sell-online/online-store/file-uploads#upload-a-file-on-the-files-page)