# Send tax receipts for donations

Tags: Orders, PDF, Receipts, Tax

Use this task to send donation receipts to customers (i.e. donors) as PDF attachments on new, paid orders (i.e. donations). If desired, orders may be filtered by tag to support non-donation orders in the same shop. Optionally, the task can cc the donation receipt to the configured shop email.

* View in the task library: [tasks.mechanic.dev/send-tax-receipts-for-donations](https://tasks.mechanic.dev/send-tax-receipts-for-donations)
* Task JSON, for direct import: [task.json](../../tasks/send-tax-receipts-for-donations.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tax_id__required": null,
  "only_include_orders_with_any_of_these_tags__array": null,
  "send_cc_email_to_shop__boolean": false,
  "email_subject__required": "Receipt {{ order.name }} for donation to {{ shop.name }}",
  "email_body__multiline_required": "Thank you for your recent donation!\n\nAttached you will find your official donation receipt.",
  "donation_receipt_filename__required": "{{ shop.name | handleize }}-donation-receipt-{{ order.name  }}.pdf",
  "donation_reciept_html_template__code_multiline_required": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <style>\n    .container {\n      width: 960px;\n      margin: 0 auto;\n      font-size: 16px;\n    }\n    .header {\n      display: flex;\n      flex-direction: row;\n      border-top: 1px solid #000; \n      border-bottom: 1px dashed #000; \n      font-size: 18px;\n    }\n    .main {\n      margin-top: 10px;\n      display: flex;\n      flex-direction: row;\n      font-size: 16px;\n    }\n    .left {\n      width: 50%;\n    }\n    .right {\n      width: 50%;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"container\">\n    <div class=\"header\">\n      <p class=\"left\">\n        {{ shop.name }}<br/>\n        {{ shop.address1 }}<br/>{% if shop.address2 != blank -%}{{ shop.address2 }}<br/>{%- endif %}\n        {{ shop.city }}, {{ shop.province }} {{ shop.zip }}<br/>\n        {{ order.billing_address.country }}\n      </p>\n      <p class=\"right\">\n        OFFICIAL DONATION RECEIPT<br/>\n        TAX ID #[TAX_ID]<br/>\n      </p>\n    </div>\n    <div class=\"main\">\n      <p class=\"left\">\n        <strong>Donor:</strong><br/>\n        {{ order.billing_address.first_name }} {{ billing_address.last_name }}<br/>\n        {{ order.billing_address.address1 }}<br/>{% if order.billing_address.address2 != blank -%}{{ order.billing_address.address2 }}<br/>{%- endif %}\n        {{ order.billing_address.city }}, {{ order.billing_address.province }} {{ order.billing_address.zip }}<br/>\n        {{ order.billing_address.country }}\n      </p>\n      <p class=\"right\">\n        <strong>Donation Details:</strong><br/>\n        Order Number: {{ order.name }}<br/>\n        Donation Received: {{ order.created_at | date: \"%F\" }}<br/>\n        Amount: {{ order.total_price | currency }}<br/>\n        Date Issued: {{ \"now\" | date: \"%F\" }}<br/>\n        Place Issued: {{ shop.province }}, {{ shop.country_name }}<br/>\n        <br/>\n        Donations are tax deductible to the extent permitted by law.<br/>\n        <br/>\n        Thank you\n      </p>\n    </div>\n  </div>\n</body>\n</html>"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/paid
mechanic/user/order
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to send donation receipts to customers (i.e. donors) as PDF attachments on new, paid orders (i.e. donations). If desired, orders may be filtered by tag to support non-donation orders in the same shop. Optionally, the task can cc the donation receipt to the configured shop email.

This task can also receive orders sent directly via [admin action links](https://learn.mechanic.dev/core/shopify/admin-action-links#link-usage). When doing so, the task will **not** check that the order is paid or has any of the inclusion tags. This is to allow flexibility when sending donation receipts manually.

The task comes with a sample email subject, email body, donation receipt filename, and donation receipt HTML template. The HTML template is used by the PDF file generator, so care must be taken to provide valid HTML if this field is customized.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/send-tax-receipts-for-donations), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-tax-receipts-for-donations.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
