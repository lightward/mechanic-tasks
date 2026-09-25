# Save a Mechanic customer account request

Tags: Custom Webhook, Customers

Save a verified customer account request, show its initial status, and optionally email your team after the save succeeds.

* View in the task library: [tasks.mechanic.dev/save-a-mechanic-customer-account-request](https://tasks.mechanic.dev/save-a-mechanic-customer-account-request)
* Task JSON, for direct import: [task.json](../../tasks/save-a-mechanic-customer-account-request.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "webhook_event_topic__required": "user/account_requests/submitted",
  "form__customeraccountform_required": null,
  "initial_status__required": "Received",
  "initial_message__multiline": "We have received your request. Our team will review it.",
  "notify_team__boolean": false,
  "team_email_recipients__email_array": null
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

Save a verified customer account request, show its initial status, and optionally email your team after the save succeeds.

Publish a Customer accounts request in Mechanic, choose its webhook, and select the same request in this task’s **Form** picker. Copy the webhook topic into **Webhook event topic**. Save the task, approve its requested permissions, and enable it. Then run it manually once from Mechanic to create its private JSON customer metafield definition. Install **Update a Mechanic customer account request** for staff responses.

Use the trade application or service and warranty template, or build your own form. A form with no questions is a request button. The verified signed-in customer comes from `event.customer_account_request`; do not trust a customer ID supplied in `event.data` or an answer. An order number entered in a service form is a reference to check, not verified ownership.

The task stores the latest request per customer and extension in `mechanic_customer_accounts.extension_<ID without hyphens>`. Only its status, message, update time, and request ID are returned to that customer. Answers stay in the admin-side record and event. Do not enable public or Customer Account API access on this definition. Opening the extension never runs a task.

Repeated delivery preserves saved responses. Older requests cannot overwrite newer ones, and compare-and-set rejects competing writes. Resolve or decline a request with the update task before accepting another, unless the form allows repeats anytime. Once-per-customer applications remain closed after a response. These controls do not guarantee exactly-once side effects across tasks.

Team notification is optional and off by default. It runs only after a confirmed save; a failed or conflicting write does not email success. Replaying a successful action callback can resend a notification. Status and message text is customer-facing; never put staff notes in it. Business rules, approval, tagging, and other effects belong in tasks and should recheck current conditions before acting.


## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/save-a-mechanic-customer-account-request), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/save-a-mechanic-customer-account-request.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
