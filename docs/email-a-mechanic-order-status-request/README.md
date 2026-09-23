# Email a Mechanic Order status request

Tags: Custom Webhook, Email, Orders

Notify your team when a verified customer sends a request from Order status.

* View in the task library: [tasks.mechanic.dev/email-a-mechanic-order-status-request](https://tasks.mechanic.dev/email-a-mechanic-order-status-request)
* Task JSON, for direct import: [task.json](../../tasks/email-a-mechanic-order-status-request.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "webhook_event_topic__required": "user/order_requests/submitted",
  "form__orderstatusform_required": null,
  "email_recipients__email_array_required": null,
  "email_subject__required": "New order request"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{{ options.webhook_event_topic__required }}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Notify your team when a verified customer sends a request from Order status.

This task is for Mechanic's **Order status forms** pilot. Customers sign in to Shopify, Mechanic verifies that the order belongs to them, and the submission then travels through the ordinary webhook/AWS/event queue. A submission confirmation means queued, not completed. This task does not edit, cancel, refund, or fulfill an order.

## Setup

1. Publish an Order status form and choose a webhook in its **Submission settings**.
2. Choose that published form in this task's **Form** picker and copy the webhook's exact topic into **Webhook event topic**.
3. Configure **Email recipients** and **Email subject**. Recipients are controlled by your task settings, never by customer answers.
4. Save and enable the task. Mechanic must be approved to send email. Submit a test request and check the email action.

This task reads only `event.order_status_request`, which verifies the signed order context and answers. It does not assume another task has already saved the request, and does not change the customer-visible status. Add the save and update tasks separately if you want status tracking.

Emails can repeat if a webhook is delivered again or the task is rerun. Check the request ID when handling duplicates. No email is sent from task previews. Files are not supported in this pilot.

If the form includes an order item picker, the email includes verified purchased-item names, variants, and quantities as well as the selected IDs.


## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/email-a-mechanic-order-status-request), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-a-mechanic-order-status-request.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
