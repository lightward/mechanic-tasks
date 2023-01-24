# Send a PDF when an order is sent to Mechanic

Tags: Admin Link, Bulk Action Link, Email, PDF

Automatically generate a PDF to be emailed to the address on file for the order(s) when sent to Mechanic. This task listens for orders sent to Mechanic via Admin and Bulk action links in the Shopify admin.

* View in the task library: [tasks.mechanic.dev/send-a-pdf-when-an-order-is-sent-to-mechanic](https://tasks.mechanic.dev/send-a-pdf-when-an-order-is-sent-to-mechanic)
* Task JSON, for direct import: [task.json](../../tasks/send-a-pdf-when-an-order-is-sent-to-mechanic.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_subject__required": "Thanks for your order: {{ order.name }}",
  "email_body__multiline_required": "Hello,\n\nThank you for your order! Please see the attached receipt.\n\nThanks,\n{{ shop.name }}",
  "pdf_attachment_filename__required": "receipt-{{ order.order_number }}.pdf",
  "pdf_html_template__code_multiline_required": "<h1>Order {{ order.name }} for {{ shop.name }}</h1>\n\n<h2>Items</h2>\n\n<ul>\n  {% for line_item in order.line_items %}\n    <li>\n      {{ line_item.quantity }} x {{ line_item.title }}: {{ line_item.price | money_with_currency }}\n    </li>\n  {% endfor %}\n</ul>\n\n<h2>Totals</h2>\n\n<ul>\n  <li>Items: {{ order.total_line_items_price | money_with_currency }}</li>\n  <li>Discounts: {{ order.total_discounts | money_with_currency }}</li>\n  <li>Subtotal: {{ order.subtotal_price | money_with_currency }}</li>\n  <li>Total (including taxes, shipping, tips): {{ order.total_price | money_with_currency }}</li>\n</ul>"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/orders
mechanic/user/order
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Automatically generate a PDF to be emailed to the address on file for the order(s) when sent to Mechanic. This task listens for orders sent to Mechanic via Admin and Bulk action links in the Shopify admin.

No email will be sent if the order does not have an email on file.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/send-a-pdf-when-an-order-is-sent-to-mechanic), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-a-pdf-when-an-order-is-sent-to-mechanic.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
