# Send a PDF invoice when an order is created

* [Task script](./script.liquid)

Automatically generate an invoice PDF, to be emailed to the address on file for the order. Useful for working with billing departments, or with anyone else who needs an order summary auto-emailed. :)

## Default options

```json
{
  "email_subject__required": "Attached: Invoice for order {{ order.name }}",
  "email_body__multiline_required": "Hello,\n\nThank you for your order! Please see the attached invoice for details and payment options.\n\nThanks,\n{{ shop.name }}",
  "pdf_attachment_filename__required": "invoice-{{ order.order_number }}.pdf",
  "pdf_html_template__code_multiline_required": "<h1>Order {{ order.name }} for {{ shop.name }}</h1>\n\n<h2>Items</h2>\n\n<ul>\n  {% for line_item in order.line_items %}\n    <li>\n      {{ line_item.quantity }} x {{ line_item.title }}: {{ line_item.price | money_with_currency }}\n    </li>\n  {% endfor %}\n</ul>\n\n<h2>Totals</h2>\n\n<ul>\n  <li>Items: {{ order.total_line_items_price | money_with_currency }}</li>\n  <li>Discounts: {{ order.total_discounts | money_with_currency }}</li>\n  <li>Subtotal: {{ order.subtotal_price | money_with_currency }}</li>\n  <li>Total (including taxes, shipping, tips): {{ order.total_price | money_with_currency }}</li>\n</ul>\n\n<p>To arrange payment, contact {{ shop.customer_email }}.</p>"
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

This task automatically generates a PDF, based on the supplied HTML template. Configure to taste. To use a template from Order Printer, [see this guide](https://help.usemechanic.com/en/articles/3168408-migrating-templates-from-shopify-to-mechanic).

No email will be sent if the order does not have an email on file, or if the order's financial status is not "pending".