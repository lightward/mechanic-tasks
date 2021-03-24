# Auto-fulfill orders on a weekly schedule

Tags: Fulfillment, Orders, Schedule

This task automatically fulfills orders on a weekly schedule, fulfilling orders with certain tags on certain days, at certain times, from certain locations.

* View in the task library: [usemechanic.com/task/auto-fulfill-orders-on-a-weekly-schedule](https://usemechanic.com/task/auto-fulfill-orders-on-a-weekly-schedule)
* Task JSON, for direct import: [task.json](../../tasks/auto-fulfill-orders-on-a-weekly-schedule.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "notify_customer_on_fulfillment__boolean": null,
  "order_tags_and_weekly_fulfillment_schedule__keyval_required": {
    "Monday Denver": "monday+11.hours",
    "Monday Chicago": "monday+11.hours",
    "Tuesday Denver": "tuesday+9.hours",
    "Wednesday home office": "Wednesday+12.hours"
  },
  "order_tags_and_location_names__keyval": {
    "Monday Denver": "Denver office",
    "Monday Chicago": "Chicago office"
  }
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
{% assign subscriptions = array %}

{% for keyval in options.order_tags_and_weekly_fulfillment_schedule__keyval_required %}
  {% assign subscriptions[subscriptions.size] = keyval[1] | downcase | prepend: "mechanic/scheduler/" %}
{% endfor %}

{{ subscriptions | uniq | join: newline }}

mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task automatically fulfills orders on a weekly schedule, fulfilling orders with certain tags on certain days, at certain times, from certain locations.

This task automatically fulfills orders on a weekly schedule, fulfilling orders with certain tags on certain days. One fulfillment time is allowed per day. Refunded orders are skipped. Run the task manually to process fulfillments for the current day of the week.

Fill in "Order tags and weekly fulfillment schedule" with order tags on the left, and a schedule specifier on the right. Schedule specifiers look like "monday+11.hours", for Monday at 11am, or "friday+18.hours", for Friday at 6pm. (All times are local for your Shopify store account.)

If you want to use more than one order tag per day, just add another entry for each additional order tag, and re-use the same schedule specifier on the right.

To be specific about which Shopify location is used for fulfillment, fill in "Order tags and location names", with order tags on the left and location names on the right. By default, the store's primary location will be used.

For all task options, values are case-sensitive.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-fulfill-orders-on-a-weekly-schedule), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-fulfill-orders-on-a-weekly-schedule.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
