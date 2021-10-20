# Send a PDF invoice when an order is created

Tags: Email, Invoice, Orders, PDF

Automatically generate an invoice PDF, to be emailed to the address on file for the order, if the order has not yet been paid. Useful for working with billing departments, or with anyone else who needs an order summary auto-emailed. :)

* View in the task library: [usemechanic.com/task/send-a-pdf-invoice-when-an-order-is-created](https://usemechanic.com/task/send-a-pdf-invoice-when-an-order-is-created)
* Task JSON, for direct import: [task.json](../../tasks/send-a-pdf-invoice-when-an-order-is-created.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "days_to_wait_before_emailing__number": null,
  "email_subject__required": "Attached: Invoice for order {{ order.name }}",
  "email_body__multiline_required": "Hello,\n\nThank you for your order! Please see the attached invoice for details and payment options.\n\nThanks,\n{{ shop.name }}",
  "pdf_attachment_filename__required": "invoice-{{ order.order_number }}.pdf",
  "pdf_html_template__code_multiline_required": "<h1>Order {{ order.name }} for {{ shop.name }}</h1>\n\n<h2>Items</h2>\n\n<ul>\n  {% for line_item in order.line_items %}\n    <li>\n      {{ line_item.quantity }} x {{ line_item.title }}: {{ line_item.price | money_with_currency }}\n    </li>\n  {% endfor %}\n</ul>\n\n<h2>Totals</h2>\n\n<ul>\n  <li>Items: {{ order.total_line_items_price | money_with_currency }}</li>\n  <li>Discounts: {{ order.total_discounts | money_with_currency }}</li>\n  <li>Subtotal: {{ order.subtotal_price | money_with_currency }}</li>\n  <li>Total (including taxes, shipping, tips): {{ order.total_price | money_with_currency }}</li>\n</ul>\n\n<p>To arrange payment, contact {{ shop.customer_email }}.</p>"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create{% if options.days_to_wait_before_emailing__number %}+{{ options.days_to_wait_before_emailing__number }}.days{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Automatically generate an invoice PDF, to be emailed to the address on file for the order, if the order has not yet been paid. Useful for working with billing departments, or with anyone else who needs an order summary auto-emailed. :)

This task automatically generates a PDF, based on the supplied HTML template. Configure to taste! To use a template from Order Printer, [see this guide](https://help.usemechanic.com/en/articles/3168408-migrating-templates-from-shopify-to-mechanic).

No email will be sent if the order does not have an email on file, or if the order's financial status is not "pending".

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/send-a-pdf-invoice-when-an-order-is-created), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-a-pdf-invoice-when-an-order-is-created.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
