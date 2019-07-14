# Receive email alerts when inventory levels change

* [Task script](./script.liquid)

Use this task to receive immediate email notifications whenever inventory/stock levels are adjusted, whether manually or as a result of a transfer or customer order.

## Default options

```json
{
  "email_recipient__email_required": "",
  "email_subject__required": "DIFFERENCE inventory for {{ inventory_level.variant.sku }} {{ inventory_level.variant.product.title | default: \"(Product title)\" }} {% if inventory_level.variant.title != blank and inventory_level.variant.title != \"Default Title\" %}({{ inventory_level.variant.title }}) {% endif %}",
  "email_body__required_multiline": "Currently available inventory: AVAILABLE\nChanged by: DIFFERENCE\nLocation: {{ inventory_level.location.name | default: \"(location)\" }}\n\n<a href=\"https://{{ shop.domain }}/admin/products/{{ inventory_level.variant.product_id }}/variants/{{ inventory_level.variant.id }}/inventory_history?location_id={{ inventory_level.location_id }}\">View inventory history</a>\n<a href=\"https://{{ shop.domain }}/admin/products/{{ inventory_level.variant.product_id }}/variants/{{ inventory_level.variant.id }}\">Manage this variant</a>\n\nThanks,\n{{ shop.name }}"
}
```

## Subscriptions

```liquid
shopify/inventory_levels/update
shopify/inventory_levels/connect
```

## Documentation

Use this task to receive immediate email notifications whenever inventory/stock levels are adjusted, whether manually or as a result of a transfer or customer order.

Please note: Mechanic will start sending emails the _second_ time inventory is adjusted for a particular item.