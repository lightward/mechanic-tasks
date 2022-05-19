# Notify a team when a tagged product is ordered

Tags: Email, Orders, Products, Watch

Quickly route order notifications to whichever teams need be alerted for a given order. Use product tags to mark products according to which team needs the alert, and add multiple copies of this task to alert different teams for different tags.

* View in the task library: [tasks.mechanic.dev/notify-a-team-when-a-tagged-product-is-ordered](https://tasks.mechanic.dev/notify-a-team-when-a-tagged-product-is-ordered)
* Task JSON, for direct import: [task.json](../../tasks/notify-a-team-when-a-tagged-product-is-ordered.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "required_product_tag__required": "requires-art",
  "team_email__required": "art-department@example.com",
  "email_subject__required": "Order {{ order.order_number }} requires custom artwork",
  "email_body__multiline_required": "Hello,\n\nPlease see details for order {{ order.order_number }}:\n\nhttps://{{ shop.myshopify_domain }}/admin/orders/{{ order.id }}\n\nThanks,\n- Mechanic, for {{ shop.name }}"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Quickly route order notifications to whichever teams need be alerted for a given order. Use product tags to mark products according to which team needs the alert, and add multiple copies of this task to alert different teams for different tags.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/notify-a-team-when-a-tagged-product-is-ordered), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/notify-a-team-when-a-tagged-product-is-ordered.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
