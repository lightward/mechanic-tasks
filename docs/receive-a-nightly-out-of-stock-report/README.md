# Receive a nightly out-of-stock report

Based on an out-of-stock threshold you define, this task sends you an email summary (with CSV attachment) of all variants that are out of stock in any location. Run this task manually to receive the report on demand.

* View in the task library: [usemechanic.com/task/receive-a-nightly-out-of-stock-report](https://usemechanic.com/task/receive-a-nightly-out-of-stock-report)
* Task JSON, for direct import: [task.json](../../tasks/receive-a-nightly-out-of-stock-report.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "out_of_stock_quantity__number_required": 0,
  "report_recipient_email__email_required": null,
  "report_subject__required": "Out of stock report ({{ \"now\" | date: \"%Y-%m-%d\" }})"
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

Based on an out-of-stock threshold you define, this task sends you an email summary (with CSV attachment) of all variants that are out of stock in any location. Run this task manually to receive the report on demand.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/receive-a-nightly-out-of-stock-report), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/receive-a-nightly-out-of-stock-report.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
