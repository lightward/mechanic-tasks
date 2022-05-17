# Email someone specific based on a new order's customer tags

Tags: Alert, Customers, Email

Use customer tags to assign staff email addresses to specific customers. When a new order arrives from a customer who has an assignment tag, this task will email the related staff member.

* View in the task library: [tasks.mechanic.dev/email-someone-specific-based-on-a-new-orders-customer-tags](https://tasks.mechanic.dev/email-someone-specific-based-on-a-new-orders-customer-tags)
* Task JSON, for direct import: [task.json](../../tasks/email-someone-specific-based-on-a-new-orders-customer-tags.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "customer_tags_and_assigned_email_recipients__keyval_required": {},
  "email_subject__required": "Order {{ order.name }} from your customer, {{ order.email }}",
  "email_body__required_multiline": "Hello,\n\nOrder {{ order.name }} has arrived from {{ order.customer.first_name | default: \"(first name)\" }} {{ order.customer.last_name | default: \"(last name)\" }} ({{ order.email }}).\n\n<a href=\"https://{{ shop.domain }}/admin/orders/{{ order.id }}\">View this order in Shopify</a>\n\nThanks,\nMechanic, for {{ shop.name }}"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use customer tags to assign staff email addresses to specific customers. When a new order arrives from a customer who has an assignment tag, this task will email the related staff member.

Fill in the "Customer tags and assigned email recipients" option with customer tags on the left (case-insensitive), and staff email addresses on the right. When this task registers a newly-created order with a customer tag that's found in the list, it will send an email to the appropriate email address. If multiple assignment tags are found for the customer, the email will be sent to _all_ related staff members.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/email-someone-specific-based-on-a-new-orders-customer-tags), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-someone-specific-based-on-a-new-orders-customer-tags.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
