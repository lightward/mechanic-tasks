# Auto-tag orders with chargeback or inquiry activity

* [task.json](../../tasks/auto-tag-orders-with-chargeback-or-inquiry-activity.json) (for import/export)
* [Task script](./script.liquid)

Stay on top of chargebacks and inquiries! Nightly or on-demand, this task will scan the last 60 days of your order records, and apply the tags of your choice to orders with chargeback or inquiry activity, based on what that activity looks like.

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

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/daily
```

## Documentation

Stay on top of chargebacks and inquiries! Nightly or on-demand, this task will scan the last 60 days of your order records, and apply the tags of your choice to orders with chargeback or inquiry activity, based on what that activity looks like.

Nightly or on-demand, this task scans the last 60 days of your order records, and apply the tags of your choice to orders with chargeback or inquiry activity, based on where that process is for each order.

Learn more about chargebacks in the Shopify documentation:

* [Chargebacks and inquiries](https://help.shopify.com/en/manual/payments/chargebacks)
* [Managing chargebacks and inquiries](https://help.shopify.com/en/manual/payments/shopify-payments/managing-chargebacks)
