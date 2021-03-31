# Temporarily enable tax-exempt status when a customer is tagged

Tags: Customers, Tag, Tax

This task monitors customer tags, applying tax-exempt status when a certain tag is detected, and removing it (and the tag) after a certain amount of time. Useful when you need to regularly re-approve customers for tax exemption.

* View in the task library: [usemechanic.com/task/temporarily-enable-tax-exempt-status-when-a-customer-is-tagged](https://usemechanic.com/task/temporarily-enable-tax-exempt-status-when-a-customer-is-tagged)
* Task JSON, for direct import: [task.json](../../tasks/temporarily-enable-tax-exempt-status-when-a-customer-is-tagged.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tax_exempt_tag__required": "tax-exempt-for-30-days",
  "days_before_removing_tax_exempt_status__number_required": 30
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/customers/update
user/customers/expire_tax_exempt
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task monitors customer tags, applying tax-exempt status when a certain tag is detected, and removing it (and the tag) after a certain amount of time. Useful when you need to regularly re-approve customers for tax exemption.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/temporarily-enable-tax-exempt-status-when-a-customer-is-tagged), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/temporarily-enable-tax-exempt-status-when-a-customer-is-tagged.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
