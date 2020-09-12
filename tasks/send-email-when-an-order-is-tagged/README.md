# Send email when an order is tagged

* [Task script](./script.liquid)

Use this task to monitor order tags, and notify staff, vendors, or any other interested parties when an order receives a certain tag. Useful for keeping teams across your business up to date as an order progresses.

## Default options

```json
{
  "tag_to_watch_for__required": "in-production",
  "ignore_orders_that_are_older_than_this_task__boolean": true,
  "email_recipients__array_required": [
    "production+team@example.com",
    "support+team@example.com"
  ],
  "email_subject__required": "[{{shop.name}}] Order {{ order.name }}{% if order.customer.name %} placed by {{ order.customer.name }}{% endif %}",
  "email_body__required_multiline": "Hello,\n\n{{ order.customer.name | default: 'Someone' }} placed a new order with your store, on {{ order.created_at | date: \"%b %d at %I:%M%P\" }}:\n<ul>  {% for line in order.line_items %} <li> {{ line.quantity }}x {{ line.title }} {% if line.sku != \"\" %}(SKU: {{line.sku}}){% endif %} for {{ line.price | times: 100 | money }} each </li> {% endfor %} </ul>\nSubtotal: {{ order.subtotal_price | times: 100 | money }}\nTotal: {{ order.total_price | times: 100 | money }}\n{% if order.note != blank %}\nNote:\n{{ order.note }}\n{% endif %}\n\n<a href=\"https://{{ shop.domain }}/admin/orders/{{ order.id }}\">View order {{ order.name }}</a>\n{% if order.shipping_address %}\n<b>Shipping address:</b>\n{{ order.shipping_address.first_name }} {{ order.shipping_address.last_name }}\n{{ order.shipping_address.address1 }}\n{{ order.shipping_address.city }}, {{ shipping_address.province }}  {{ shipping_address.zip }}\n{{ order.shipping_address.country }}\n{{ order.shipping_address.phone }}\n{% endif %}\nThanks,\n- Mechanic, for {{ shop.name }}"
}
```

## Subscriptions

```liquid
shopify/orders/create
shopify/orders/updated
```

## Documentation

This task monitors incoming orders, and updates to existing orders, looking for the tag of your choice. When the tag is detected, this task will send an email to the address(es) of your choice.

**Important notes**

* This task also adds a _second_ tag to the order when the email is sent, as a flag to mark the order as having had that email sent. This helps Mechanic remember what orders should _not_ have an email sent.
* To help out merchants who have lots of existing orders, by default this task doesn't watch orders that were created _before_ you add this task to your Mechanic account.