# Auto-capture order payment after 30 days

* [task.json](../../tasks/auto-capture-order-payment-after-30-days.json) (for import/export)
* [Task script](./script.liquid)

Short and simple. Captures order payment for un-cancelled orders that have a financial status of "authorized", after waiting 30 days (or another timespan of your choice).

## Default options

```json
{
  "days_to_wait_before_capturing__number_required": 30
}
```

## Subscriptions

```liquid
shopify/orders/create+{{ options.days_to_wait_before_capturing__number_required | default: 30 }}.days
```

## Documentation

Short and simple. Captures order payment for un-cancelled orders that have a financial status of "authorized", after waiting 30 days (or another timespan of your choice).

This task captures order payment for un-cancelled orders that have a financial status of "authorized", after waiting 30 days (or another timespan of your choice).
