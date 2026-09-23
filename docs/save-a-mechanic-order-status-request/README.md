# Save a Mechanic Order status request

Tags: Custom Webhook, Orders

Save a verified order request and its initial customer-visible status on the order.

* View in the task library: [tasks.mechanic.dev/save-a-mechanic-order-status-request](https://tasks.mechanic.dev/save-a-mechanic-order-status-request)
* Task JSON, for direct import: [task.json](../../tasks/save-a-mechanic-order-status-request.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "webhook_event_topic__required": "user/order_requests/submitted",
  "form__orderstatusform_required": null,
  "initial_status__required": "Received",
  "initial_message__multiline": "We have received your request. Our team will review it."
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{{ options.webhook_event_topic__required }}
mechanic/user/trigger
mechanic/actions/perform
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Save a verified order request and its initial customer-visible status on the order.

This task is for Mechanic's **Order status forms** pilot. Customers sign in to Shopify, Mechanic verifies that the order belongs to them, and the submission then travels through the ordinary webhook/AWS/event queue. A submission confirmation means queued, not completed. This task does not edit, cancel, refund, or fulfill an order.

## Setup

1. Publish an Order status form and choose a webhook in its **Submission settings**.
2. Choose that published form in this task's **Form** picker and copy the webhook's exact topic into **Webhook event topic**.
3. Set **Initial status** and **Initial message**. These will be visible to the customer.
4. Run the task manually once to create its order metafield definition. Approve the Shopify permissions Mechanic requests, then enable the task.
5. Install **Update a Mechanic Order status request** for staff updates, selecting the same form. Test with a customer account that owns the order.

## Storage and privacy

The task stores the latest accepted request for this form on each order in a JSON metafield, `mechanic_order_requests.form_<form ID without hyphens>`. It is not a submission archive. Use the existing Sheets or metaobject task on the same webhook if you also want a history. Those generic tasks receive ordinary customer-supplied answers, not proof of identity.

Only `status`, `message`, and `updated_at` are displayed to the verified customer by the extension. **Keep the status and message suitable for the customer to read.** Answers stay in the admin-side metafield and the Mechanic event; this task does not publish them to the storefront or Customer Account API.

Repeated delivery of the same signed request does not reset its saved status. Older requests (or another request authorized in the same second) do not overwrite a newer one. Compare-and-set protects against concurrent updates: a conflict is reported as an action error instead of overwriting someone else's change. Review that event before rerunning. This does not guarantee one email or one side effect across other tasks.

Orders must be accessible to Mechanic. Older orders can require all-orders access. Files are not supported by Order status forms in this pilot.

## Repeat requests and purchased items

The form’s **Availability** setting controls another request for the same form and order: after resolution (the default), anytime, or once per order. With the default, use **Resolved** or **Declined** as the status in the update task to reopen requests. The API checks the saved status before authorization and this task checks it again before saving. Concurrent writes use compare-and-set. These controls rely on this save task; they do not deduplicate independent email tasks or guarantee exactly-once processing.

An **Items from the order** question includes selected line-item IDs in the answers and verified item details in `event.order_status_request.line_items`. These details are stored alongside the answers. Item selection requests review; it does not change quantities, return items, or issue refunds.


## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/save-a-mechanic-order-status-request), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/save-a-mechanic-order-status-request.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
