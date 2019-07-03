# Email someone specific based on a new order's customer tags

* [Task script](./script.liquid)

Use customer tags to assign staff email addresses to specific customers. When a new order arrives from a customer who has an assignment tag, this task will email the related staff member.

## Default options

```json
{
  "customer_tags_and_assigned_email_recipients__keyval_required": {
  },
  "email_subject__required": "Order {{ order.name }} from your customer, {{ order.email }}",
  "email_body__required_multiline": "Hello,\n\nOrder {{ order.name }} has arrived from {{ order.customer.first_name | default: \"(first name)\" }} {{ order.customer.last_name | default: \"(last name)\" }} ({{ order.email }}).\n\n<a href=\"https://{{ shop.domain }}/admin/orders/{{ order.id }}\">View this order in Shopify</a>\n\nThanks,\nMechanic, for {{ shop.name }}"
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

Fill in the "Customer tags and assigned email recipients" option with customer tags on the left (case-insensitive), and staff email addresses on the right. When this task registers a newly-created order with a customer tag that's found in the list, it will send an email to the appropriate email address. If multiple assignment tags are found for the customer, the email will be sent to _all_ related staff members.