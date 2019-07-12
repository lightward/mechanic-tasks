# Receive a nightly out-of-stock report

* [Task script](./script.liquid)

Based on an out-of-stock threshold you define, this task sends you an email summary (with CSV attachment) of all variants that are out of stock in any location.

## Default options

```json
{
  "out_of_stock_quantity__number_required": 0,
  "report_recipient_email__email_required": null,
  "report_subject__required": "Out of stock report ({{ \"now\" | date: \"%Y-%m-%d\" }})"
}
```

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/daily
```

## Documentation

Based on an out-of-stock threshold you define, this task sends you an email summary (with CSV attachment) of all variants that are out of stock in any location. Run this task manually to receive the report on demand.