# Auto-tag orders with chargeback or inquiry activity

Tags: Auto-Tag, Orders, Risk

Stay on top of chargebacks and inquiries! Nightly or on-demand, this task will scan the last 60 days of your order records, and apply the tags of your choice to orders with chargeback or inquiry activity, based on what that activity looks like.

* View in the task library: [tasks.mechanic.dev/auto-tag-orders-with-chargeback-or-inquiry-activity](https://tasks.mechanic.dev/auto-tag-orders-with-chargeback-or-inquiry-activity)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-with-chargeback-or-inquiry-activity.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_for_any__required": "chargeback-any",
  "tag_for_accepted__required": "chargeback-accepted",
  "tag_for_charge_refunded__required": "chargeback-refunded",
  "tag_for_lost__required": "chargeback-lost",
  "tag_for_needs_response__required": "chargeback-needs-response",
  "tag_for_under_review__required": "chargeback-under-review",
  "tag_for_won__required": "chargeback-won"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/daily
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Stay on top of chargebacks and inquiries! Nightly or on-demand, this task will scan the last 60 days of your order records, and apply the tags of your choice to orders with chargeback or inquiry activity, based on what that activity looks like.

If you would like for the task to scan orders beyond 60 days, you can enable [read all orders](https://learn.mechanic.dev/platform/shopify/read-all-orders) in your Mechanic settings.

Learn more about chargebacks in the Shopify documentation:

* [Chargebacks and inquiries](https://help.shopify.com/en/manual/payments/chargebacks)
* [Managing chargebacks and inquiries](https://help.shopify.com/en/manual/payments/shopify-payments/managing-chargebacks)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-orders-with-chargeback-or-inquiry-activity), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-with-chargeback-or-inquiry-activity.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
