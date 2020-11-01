# Notify a team when a tagged product is ordered

* [task.json](../../tasks/notify-a-team-when-a-tagged-product-is-ordered.json) (for import/export)
* [Task script](./script.liquid)

Quickly route order notifications to whichever teams need be alerted for a given order. Use product tags to mark products according to which team needs the alert, and add multiple copies of this task to alert different teams for different tags.

## Default options

```json
{
  "required_product_tag__required": "requires-art",
  "team_email__required": "art-department@example.com",
  "email_subject__required": "Order {{ order.order_number }} requires custom artwork",
  "email_body__multiline_required": "Hello,\n\nPlease see details for order {{ order.order_number }}:\n\nhttps://{{ shop.myshopify_domain }}/admin/orders/{{ order.id }}\n\nThanks,\n- Mechanic, for {{ shop.name }}"
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

Quickly route order notifications to whichever teams need be alerted for a given order. Use product tags to mark products according to which team needs the alert, and add multiple copies of this task to alert different teams for different tags.
