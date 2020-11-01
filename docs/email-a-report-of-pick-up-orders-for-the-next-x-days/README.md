# Email a report of pick-up orders for the next x days

* [task.json](../../tasks/email-a-report-of-pick-up-orders-for-the-next-x-days.json) (for import/export)
* [Task script](./script.liquid)

Using Zapiet to track store pickups? This task filters for orders that are tagged by Zapiet for pickup, and emails you a report of how many orders are scheduled for each of the next few days. Useful for scanning the week ahead, and blacking out dates that are at capacity.

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

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/daily
```

## Documentation

Using Zapiet to track store pickups? This task filters for orders that are tagged by Zapiet for pickup, and emails you a report of how many orders are scheduled for each of the next few days. Useful for scanning the week ahead, and blacking out dates that are at capacity.
