# Send a customer signup email

* [Task script](./script.liquid)

Super basic, super useful. :) Get an email alert whenever a customer account is created.

## Default options

```json
{
  "to__email_required": "",
  "subject__required": "New customer: {% if customer.email %}{{ customer.email }}{% else %}#{{ customer.id }}{% endif %}",
  "body__multiline_required": "Hey there! A new customer has signed up. Here are their details:\n\nName: {% capture full_name %}{{ customer.first_name }} {{ customer.last_name }}{% endcapture %}{% if full_name != blank %}{{ full_name | strip }}{% else %}(none){% endif %}\nEmail: {{ customer.email | default: \"(none)\" }}\nPhone: {{ customer.phone | default: \"(none)\" }}\n{{ customer.note | strip }}\n\n<a href=\"https://{{ shop.myshopify_domain }}/admin/customers/{{ customer.id }}\" target=\"_blank\">Manage in Shopify</a>\n\nThanks,\n- Mechanic, for {{ shop.name }}"
}
```

## Subscriptions

```liquid
shopify/customers/create
```

## Documentation

(none)