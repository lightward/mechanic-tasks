# Auto-tag orders with a post office box

Tags: Address, Auto-Tag, Orders, Shipping

This task monitors for newly-created orders, and auto-tags any that have a detected post office box in the shipping address. This is useful for shipping services that do not service postal boxes. The task can also optionally send an email notification when a P.O. Box is detected.

* View in the task library: [tasks.mechanic.dev/auto-tag-orders-with-a-post-office-box](https://tasks.mechanic.dev/auto-tag-orders-with-a-post-office-box)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-with-a-post-office-box.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_to_add__required": "PO-Box",
  "send_email_notification__boolean": false,
  "email_recipient__email": "",
  "email_subject": "P.O. Box Detected - Order {{ order.name }}",
  "email_body__multiline": "Order {{ order.name }} was flagged as having a P.O. Box in the shipping address:\n\nName: {{ order.shipping_address.first_name }} {{ order.shipping_address.last_name }}\nCompany: {{ order.shipping_address.company }}\nPhone: {{ order.shipping_address.phone }}\n\nShipping Address:\n{{ order.shipping_address.address1 }}\n{{ order.shipping_address.address2 }}\n{{ order.shipping_address.city }}, {{ order.shipping_address.province_code }} {{ order.shipping_address.zip }}\n{{ order.shipping_address.country }}\n\n\nThanks,\n{{ shop.name }}"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task monitors for newly-created orders, and auto-tags any that have a detected post office box in the shipping address. This is useful for shipping services that do not service postal boxes. The task can also optionally send an email notification when a P.O. Box is detected.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-orders-with-a-post-office-box), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-with-a-post-office-box.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
