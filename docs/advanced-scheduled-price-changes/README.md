# Advanced: Scheduled Price Changes

**🚨 This is an advanced task, intended for technical users. For tasks like these, the Mechanic team only offers support with platform-level issues. For help with task-level issues (e.g. debugging, configuration, customization, monitoring, etc), see [Hire a Mechanic developer](https://learn.mechanic.dev/hire-a-developer).**

Tags: Advanced, Discounts, Price, Products, Sale, Schedule

This advanced task allows you to schedule price change events for your store, useful for seasonal and flash sales. To use this task, configure a price change event using the task options, save the task and run it manually, and then enter a keyword of **schedule** in the dialog that appears. An email summary with the price change event ID will be sent upon successful scheduling.

* View in the task library: [tasks.mechanic.dev/advanced-scheduled-price-changes](https://tasks.mechanic.dev/advanced-scheduled-price-changes)
* Task JSON, for direct import: [task.json](../../tasks/advanced-scheduled-price-changes.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "notification_email_recipients__array_required": null,
  "event_start_datetime__required": null,
  "event_end_datetime__required": null,
  "set_compare_at_prices_to_original_price_during_event__boolean": false,
  "collection_handles_and_discounts__keyval": null,
  "skus_to_include__array": null,
  "sku_discount": null,
  "exclude_products_tagged_with__array": null,
  "skus_to_exclude__array": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/text
user/price_changes/start
user/price_changes/end
user/price_changes/reset
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This advanced task allows you to schedule price change events for your store, useful for seasonal and flash sales. To use this task, configure a price change event using the task options, save the task and run it manually, and then enter a keyword of **schedule** in the dialog that appears. An email summary with the price change event ID will be sent upon successful scheduling.

#### This task supports these keyword actions:

- **schedule** - Validates and schedules a new price change event using the current task configuration.
- **list** - Logs out (in Mechanic) all configured price change events (of any status).
- **email** - Emails a summary of all configured price change events (of any status).
- **cancel** - Cancels a specific scheduled or ongoing price change event. The cancel keyword must be followed by a space and the _price change event ID_.
- **reset** - Clears all price change events (of any status) from the shop metafield, and reverts the prices on any variants that have a price change event applied.

#### Key features of this task:

- Ability to schedule overlapping price change events
- Ability to cancel an ongoing event
- Ability to add collections that contain more than 1000 products
- Ability to discount more than 20k products
- Supports percentage, fixed price, and fixed discount options for products AND collections
- Option to include specific SKUs in a list with a specific discount for the whole list
- Option to exclude SKUs from any discount qualification
- Option to exclude products by tag from any discount qualification
- Option to have (or not have) compare at prices set to original prices for the duration of an event

#### Price change event configuration notes

- The event start and end datetimes must be valid dates in the form of _YYYY-MM-DD_ or _YYYY-MM-DD HH:MM_ (24 hour clock).
- Collection handles and discounts are entered as key value pairs, with the collection handle on the left and the discount for it on the right.
- If any SKUs are specifically included, then a SKU discount must be set to apply to them.
- Discount formats:
  - Percentage - This must be an integer between 1 and 99, followed immediately by % (e.g. 20%)
  - Fixed price - Any positive integer or float will be considered the fixed price that all applicable items will be discounted to (e.g. 123.45)
  - Fixed discount - Any negative integer or float will be considered the discount to be substracted from the price of all applicable items (e.g. -25)
- Priority of discount assignment when a variant qualifies for multiple discounts within a price change event:
  - Exclusions (by SKU or product tag) will always override inclusion
  - SKU inclusion list
  - Collection membership in order of configuration

#### Important Notes:

- An email notification will be sent for every price change event scheduled, started, completed, and cancelled. If an email is not received as expected, then the task run logs should be reviewed.
- Price change events that affect a very large number of variants will take some time to process all of the price updates. The notification emails are sent after all variant prices have been updated.
- Just saving the task configuration will not schedule (or validate) a price change event. This must be done with the "schedule" keyword when run manually.
- This task only manages variant prices. Product and theme publishing are not handled by this task.
- Variants that are already part of an ongoing price change event will not be modified if targeted by a new price change event.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/advanced-scheduled-price-changes), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/advanced-scheduled-price-changes.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
