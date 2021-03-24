# Send a customer signup email

Tags: Customers, Email, Signup

Super basic, super useful. :) Get an email alert whenever a customer account is created.

* View in the task library: [usemechanic.com/task/customer-signup-email](https://usemechanic.com/task/customer-signup-email)
* Task JSON, for direct import: [task.json](../../tasks/customer-signup-email.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "to__email_required": "",
  "subject__required": "New customer: {% if customer.email %}{{ customer.email }}{% else %}#{{ customer.id }}{% endif %}",
  "body__multiline_required": "Hey there! A new customer has signed up. Here are their details:\n\nName: {% capture full_name %}{{ customer.first_name }} {{ customer.last_name }}{% endcapture %}{% if full_name != blank %}{{ full_name | strip }}{% else %}(none){% endif %}\nEmail: {{ customer.email | default: \"(none)\" }}\nPhone: {{ customer.phone | default: \"(none)\" }}\n{{ customer.note | strip }}\n\n<a href=\"https://{{ shop.myshopify_domain }}/admin/customers/{{ customer.id }}\" target=\"_blank\">Manage in Shopify</a>\n\nThanks,\n- Mechanic, for {{ shop.name }}"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/customers/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Super basic, super useful. :) Get an email alert whenever a customer account is created.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/customer-signup-email), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/customer-signup-email.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
