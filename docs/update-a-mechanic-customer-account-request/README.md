# Update a Mechanic customer account request

Tags: Customers

Update the status and message a customer sees for their latest account request.

* View in the task library: [tasks.mechanic.dev/update-a-mechanic-customer-account-request](https://tasks.mechanic.dev/update-a-mechanic-customer-account-request)
* Task JSON, for direct import: [task.json](../../tasks/update-a-mechanic-customer-account-request.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "form__customeraccountform_required": null,
  "status__userform_required": null,
  "customer_message__multiline_userform": null,
  "send_customer_email__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/customer
mechanic/actions/perform
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Update the status and message a customer sees for their latest account request.

Install **Save a Mechanic customer account request**, select the same request in this task’s **Form** picker, and enable this task. Open a customer in Shopify, use Mechanic’s customer action, and enter a status and customer message. For an application, you might use “Approved” or “Declined”; for a service request, use “In progress” and then “Resolved”. An approval label alone does not grant discounts, B2B access, or membership: configure those business changes in a task.

The task updates the latest saved request for this customer and form while preserving its answers and request ID. A competing write fails instead of overwriting another update. With the default repeat policy, only “Resolved” or “Declined” allows another request; once-per-customer applications stay closed. Unpublishing the component removes its response from the customer page and blocks.

The customer sees the saved result after the action succeeds and they refresh. Status and message are customer-facing. Do not put private staff notes here.

**Send customer email** is optional and off by default. If enabled, the task reads this customer’s current email from Shopify, never an address typed into a form. The email runs only after Shopify confirms the saved update. A failed or conflicting write does not send success. Replaying a successful callback can resend the email.


## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/update-a-mechanic-customer-account-request), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/update-a-mechanic-customer-account-request.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
