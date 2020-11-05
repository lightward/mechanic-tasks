# Send an email alert if a new collection has no orders after x days

This task watches for newly-created collections, waits a configurable number of days, and then sends a staff email if no orders have been placed for products that are in the new collection.

* View in the task library: [usemechanic.com/task/send-an-email-alert-if-a-new-collection-has-no-orders-after-x-days](https://usemechanic.com/task/send-an-email-alert-if-a-new-collection-has-no-orders-after-x-days)
* Task JSON, for direct import: [task.json](../../tasks/send-an-email-alert-if-a-new-collection-has-no-orders-after-x-days.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_recipient__required_email": "",
  "email_subject__required": "The new collection \"{{ collection.title }}\" has no orders yet",
  "email_body__required_multiline": "Hello,\n\nThe collection \"<a href=\"https://{{ shop.domain }}/collections/{{ collection.handle }}\">{{ collection.title }}</a>\" was created on {{ collection.created_at | date: \"%Y-%m-%d\" }}, and no orders have yet been made for products in this collection.\n\nThanks,\nMechanic, for {{ shop.name }}",
  "days_to_wait_before_checking__number_required": "2"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/collections/create+{{ options.days_to_wait_before_checking__number_required | default: 2 }}.days
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task watches for newly-created collections, waits a configurable number of days, and then sends a staff email if no orders have been placed for products that are in the new collection.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/send-an-email-alert-if-a-new-collection-has-no-orders-after-x-days), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-an-email-alert-if-a-new-collection-has-no-orders-after-x-days.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
