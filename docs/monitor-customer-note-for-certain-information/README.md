# Monitor customer note for certain information

Tags: Customer Notes, Customers, Watch

Use this task to keep an eye on the contents of a customer's note. When the text you want to watch for is added (e.g. "Authorization number:", or "VAT Registration Number:", or anything else!), Mechanic will add the tag of your choice to the customer, and optionally send you a notification email.

* View in the task library: [usemechanic.com/task/monitor-customer-note-for-certain-information](https://usemechanic.com/task/monitor-customer-note-for-certain-information)
* Task JSON, for direct import: [task.json](../../tasks/monitor-customer-note-for-certain-information.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "text_to_watch_for_in_the_customer_note__required": null,
  "require_a_case_sensitive_match__boolean": null,
  "customer_tag_to_apply__required": null,
  "staff_notification_email_recipient__email": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/customers/create
shopify/customers/update
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to keep an eye on the contents of a customer's note. When the text you want to watch for is added (e.g. "Authorization number:", or "VAT Registration Number:", or anything else!), Mechanic will add the tag of your choice to the customer, and optionally send you a notification email.

Please note: Mechanic uses the absence of this task's tag to determine if any work should be done. This means that if the tag Mechanic adds is later removed, and if the customer note still has the matching text, Mechanic will re-tag the customer (and re-send a notification email, if configured) the next time the customer is updated.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/monitor-customer-note-for-certain-information), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/monitor-customer-note-for-certain-information.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
