# Scheduled Price Changes

Tags: Price, Products, Schedule

Run task manually, and enter a keyword of __schedule__, __list__, __email__, or __cancel__. The cancel keyword must be followed by the *price change event ID*, which will be generated when an event is successfully scheduled.

* View in the task library: [usemechanic.com/task/advanced-scheduled-price-changes](https://usemechanic.com/task/advanced-scheduled-price-changes)
* Task JSON, for direct import: [task.json](../../tasks/advanced-scheduled-price-changes.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "event_start_datetime__required": null,
  "event_end_datetime__required": null,
  "set_compare_at_prices_to_original_price_during_event__boolean": null,
  "collection_handles_and_discounts__keyval": null,
  "skus_to_include__array": null,
  "sku_discount": null,
  "exclude_products_tagged_with__array": null,
  "skus_to_exclude__array": null,
  "send_task_notiication_emails_to__array_required": null,
  "test_mode__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/text
user/price_changes/start
user/price_changes/end
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Run task manually, and enter a keyword of __schedule__, __list__, __email__, or __cancel__. The cancel keyword must be followed by the *price change event ID*, which will be generated when an event is successfully scheduled.

## TODO: Docs

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/advanced-scheduled-price-changes), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/advanced-scheduled-price-changes.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
