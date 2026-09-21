# Update a Mechanic Order status request

Tags: Orders

Let staff update the status and message a customer sees for their saved order request.

* View in the task library: [tasks.mechanic.dev/update-a-mechanic-order-status-request](https://tasks.mechanic.dev/update-a-mechanic-order-status-request)
* Task JSON, for direct import: [task.json](../../tasks/update-a-mechanic-order-status-request.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "form__orderstatusform_required": null,
  "status__userform_required": null,
  "customer_message__multiline_userform": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/order
mechanic/actions/perform
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Let staff update the status and message a customer sees for their saved order request.

This task is for Mechanic's **Order status forms** pilot. Customers sign in to Shopify, Mechanic verifies that the order belongs to them, and the submission then travels through the ordinary webhook/AWS/event queue. A submission confirmation means queued, not completed. This task does not edit, cancel, refund, or fulfill an order.

## Setup

1. Install **Save a Mechanic Order status request** and complete its setup.
2. Choose the same published form in this task's **Form** picker, then save and enable the task.
3. Open an order in Shopify, use Mechanic's order action, and run this task. Enter **Status** and **Customer message** in the run form. These are shown to the customer; do not put private staff notes in them.
4. After the task and Shopify action complete, the customer can refresh the request status on Order status.

This updates the latest saved request for the selected form and order. It preserves its answers and request ID. It does not send email or change the actual order. If another task changes the metafield at the same time, the write fails instead of overwriting that change; review the latest request before rerunning. A form without a saved request produces a clear error.

New edits to a form can remain unpublished without changing this saved status. Unpublishing the form removes its customer entry from the Order status block.


## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/update-a-mechanic-order-status-request), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/update-a-mechanic-order-status-request.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
