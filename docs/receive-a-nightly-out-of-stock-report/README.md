# Receive a nightly out-of-stock report

* [task.json](../../tasks/receive-a-nightly-out-of-stock-report.json) (for import/export)
* [Task script](./script.liquid)

null

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

null
