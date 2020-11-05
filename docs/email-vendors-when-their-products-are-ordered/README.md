# Email vendors when their products are ordered

Use this task to notify vendors when items of theirs have been purchased, by providing this task with a list of vendor names, and the related email addresses.

* View in the task library: [usemechanic.com/task/email-vendors-when-their-products-are-ordered](https://usemechanic.com/task/email-vendors-when-their-products-are-ordered)
* Task JSON, for direct import: [task.json](../../tasks/email-vendors-when-their-products-are-ordered.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "vendors_and_email_addresses__keyval_required": {
    "Vendor X": "vendor-x@example.com"
  },
  "email_subject__required": "New order: {{ event.data.order.name }} from {{ shop.name }}",
  "email_body__required_multiline": "{% assign order = event.data.order %}\n\n<p>Hello,</p>\n\n<p>A new order has arrived ({{ order.name }}) for the following items:</p>\n\n<ul>\n{% for line_item in order.line_items %}\n<li>{{ line_item.quantity }}x {% if line_item.sku %}{{ line_item.sku }} -{% endif %} {{ line_item.title }} {% if line_item.variant_title != blank %}({{ line_item.variant_title }}){% endif %}\n</li>\n{% endfor %}\n</ul>\n\n<p>The order is to be shipped to the following address:</p>\n\n<p>\n{% if order.shipping_address %}\n{{ order.shipping_address.name }}\n{% if order.shipping_address.company != blank %}<br>{{ order.shipping_address.company }}{% endif %}\n<br>{{ order.shipping_address.address1 }}\n{% if order.shipping_address.address2 != blank %}<br>{{ order.shipping_address.address2 }}{% endif %}\n<br>{{ order.shipping_address.city }}, {{ order.shipping_address.province }}\n<br>{{ order.shipping_address.zip }} {{ order.shipping_address.country_code }}\n{% else %}\n(missing shipping address)\n{% endif %}\n</p>\n\n<p>\nThanks,\n<br>{{ shop.name }}\n</p>\n"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
user/orders/send_vendor_email
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to notify vendors when items of theirs have been purchased, by providing this task with a list of vendor names, and the related email addresses.

Configure the "Vendors and email addresses" option using vendor names on the left, and their email addresses on the right. Vendor names are case-sensitive!

Customize the email subject and body to taste. Use the default email body as a reference for making sure that you only show relevant line items in each vendor's email message.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/email-vendors-when-their-products-are-ordered), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-vendors-when-their-products-are-ordered.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
