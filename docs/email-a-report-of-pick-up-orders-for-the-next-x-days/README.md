# Email a report of pick-up orders for the next x days

Tags: Email, Orders, Pick-up

Using Zapiet to track store pickups? This task filters for orders that are tagged by Zapiet for pickup, and emails you a report of how many orders are scheduled for each of the next few days. Useful for scanning the week ahead, and blacking out dates that are at capacity.

* View in the task library: [usemechanic.com/task/email-a-report-of-pick-up-orders-for-the-next-x-days](https://usemechanic.com/task/email-a-report-of-pick-up-orders-for-the-next-x-days)
* Task JSON, for direct import: [task.json](../../tasks/email-a-report-of-pick-up-orders-for-the-next-x-days.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tagged_with__required": "Pickup Order",
  "date_tag_format__required": "%d-%m-%Y",
  "days_ahead__number_required": 7,
  "email_recipient__email_required": null,
  "email_subject__required": "Pickup orders by date"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/daily
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Using Zapiet to track store pickups? This task filters for orders that are tagged by Zapiet for pickup, and emails you a report of how many orders are scheduled for each of the next few days. Useful for scanning the week ahead, and blacking out dates that are at capacity.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/email-a-report-of-pick-up-orders-for-the-next-x-days), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-a-report-of-pick-up-orders-for-the-next-x-days.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
