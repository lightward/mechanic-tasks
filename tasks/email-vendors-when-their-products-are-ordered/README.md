# Email vendors when their products are ordered

* [Task script](./script.liquid)

Use this task to notify vendors when items of theirs have been purchased, by providing this task with a list of vendor names, and the related email addresses.

## Default options

```json
{
  "vendors_and_email_addresses__keyval_required": {
  },
  "email_subject__required": "New order: {{ event.data.order.name }} from {{ shop.name }}",
  "email_body__required_multiline": "{% assign o = event.data.order %}\n\n<p>Hello,</p>\n\n<p>A new order has arrived ({{ o.name }}) for the following items:</p>\n\n{% assign line_items = o.line_items | where: \"vendor\", event.data.vendor %}\n<ul>\n{% for line_item in line_items %}\n<li>{{ line_item.quantity }}x {% if line_item.sku %}{{ line_item.sku }} -{% endif %} {{ line_item.title }} {% if line_item.variant_title != blank %}({{ line_item.variant_title }}){% endif %}\n</li>\n{% endfor %}\n</ul>\n\n<p>The order is to be shipped to the following address:</p>\n\n<p>\n{% if o.shipping_address %}\n{{ o.shipping_address.name }}\n{% if o.shipping_address.company != blank %}<br>{{ o.shipping_address.company }}{% endif %}\n<br>{{ o.shipping_address.address1 }}\n{% if o.shipping_address.address2 != blank %}<br>{{ o.shipping_address.address2 }}{% endif %}\n<br>{{ o.shipping_address.city }}, {{ o.shipping_address.province }}\n<br>{{ o.shipping_address.zip }} {{ o.shipping_address.country_code }}\n{% else %}\n(missing shipping address)\n{% endif %}\n</p>\n\n<p>\nThanks,\n<br>{{ shop.name }}\n</p>"
}
```

## Subscriptions

```liquid
shopify/orders/create
user/orders/send_vendor_email
```

## Documentation

Configure the "Vendors and email addresses" option using vendor names on the left, and their email addresses on the right. Vendor names are case-sensitive!

Customize the email subject and body to taste. Use the default email body as a reference for making sure that you only show relevant line items in each vendor's email message.