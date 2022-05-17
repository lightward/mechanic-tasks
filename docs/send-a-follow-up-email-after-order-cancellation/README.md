# Send a follow-up email after order cancellation

Tags: Cancel, Email, Orders

Use this task to easily check in on customers, after an order of theirs is cancelled. Optionally, queue up the email for a certain number of hours from the time of cancellation.

* View in the task library: [tasks.mechanic.dev/send-a-follow-up-email-after-order-cancellation](https://tasks.mechanic.dev/send-a-follow-up-email-after-order-cancellation)
* Task JSON, for direct import: [task.json](../../tasks/send-a-follow-up-email-after-order-cancellation.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "only_send_for_first_time_customers__boolean": false,
  "hours_to_wait_after_cancellation__number": null,
  "email_subject__required": "Following up on order {{ order.name }}",
  "email_body__multiline_required": "Hello,\n\nWe received your cancellation. Is there anything else we can do for you?\n\nThanks,\n{{ shop.name  }}"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/cancelled{% if options.hours_to_wait_after_cancellation__number != blank %}+{{ options.hours_to_wait_after_cancellation__number }}.hours{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to easily check in on customers, after an order of theirs is cancelled. Optionally, queue up the email for a certain number of hours from the time of cancellation.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/send-a-follow-up-email-after-order-cancellation), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-a-follow-up-email-after-order-cancellation.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
