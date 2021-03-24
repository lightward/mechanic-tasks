# Auto-tag orders with chargeback or inquiry activity

Tags: Auto-Tag, Orders, Risk

Stay on top of chargebacks and inquiries! Nightly or on-demand, this task will scan the last 60 days of your order records, and apply the tags of your choice to orders with chargeback or inquiry activity, based on what that activity looks like.

* View in the task library: [usemechanic.com/task/auto-tag-orders-with-chargeback-or-inquiry-activity](https://usemechanic.com/task/auto-tag-orders-with-chargeback-or-inquiry-activity)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-with-chargeback-or-inquiry-activity.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_for_any": "chargeback-any",
  "tag_for_open": "chargeback-open",
  "tag_for_submitted": "chargeback-submitted",
  "tag_for_won": "chargeback-won",
  "tag_for_lost": "chargeback-lost"
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

Stay on top of chargebacks and inquiries! Nightly or on-demand, this task will scan the last 60 days of your order records, and apply the tags of your choice to orders with chargeback or inquiry activity, based on what that activity looks like.

Nightly or on-demand, this task scans the last 60 days of your order records, and apply the tags of your choice to orders with chargeback or inquiry activity, based on where that process is for each order.

Learn more about chargebacks in the Shopify documentation:

* [Chargebacks and inquiries](https://help.shopify.com/en/manual/payments/chargebacks)
* [Managing chargebacks and inquiries](https://help.shopify.com/en/manual/payments/shopify-payments/managing-chargebacks)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-with-chargeback-or-inquiry-activity), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-with-chargeback-or-inquiry-activity.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
