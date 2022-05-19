# Temporarily enable tax-exempt status when a customer is tagged

Tags: Customers, Tag, Tax

This task monitors customer tags, applying tax-exempt status when a certain tag is detected, and removing it (and the tag) after a certain amount of time. Useful when you need to regularly re-approve customers for tax exemption.

* View in the task library: [tasks.mechanic.dev/temporarily-enable-tax-exempt-status-when-a-customer-is-tagged](https://tasks.mechanic.dev/temporarily-enable-tax-exempt-status-when-a-customer-is-tagged)
* Task JSON, for direct import: [task.json](../../tasks/temporarily-enable-tax-exempt-status-when-a-customer-is-tagged.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tax_exempt_tag__required": "tax-exempt-for-30-days",
  "days_before_removing_tax_exempt_status__number_required": 30
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/customers/update
user/customers/expire_tax_exempt
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task monitors customer tags, applying tax-exempt status when a certain tag is detected, and removing it (and the tag) after a certain amount of time. Useful when you need to regularly re-approve customers for tax exemption.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/temporarily-enable-tax-exempt-status-when-a-customer-is-tagged), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/temporarily-enable-tax-exempt-status-when-a-customer-is-tagged.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
