# Monitor smart collections for product membership changes

Tags: Collections, Products, Watch

The collection update webhook does not fire when product memberships change based on the smart collection's rules. This task bridges that gap by monitoring smart collections at regular intervals to see if the list of their product IDs has changed, and if so it will trigger the custom event topic you configure.

* View in the task library: [tasks.mechanic.dev/monitor-smart-collections-for-product-membership-changes](https://tasks.mechanic.dev/monitor-smart-collections-for-product-membership-changes)
* Task JSON, for direct import: [task.json](../../tasks/monitor-smart-collections-for-product-membership-changes.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "run_frequency__select_o1_10min_o2_15min_o3_20min_o4_30min_o5_hourly_o6_daily_required": "hourly",
  "custom_event_topic__required": "user/smart_collection/product_membership_changed",
  "collections_to_monitor__picker_collection_array": null,
  "extra_logging__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/scheduler/{{ options.run_frequency__select_o1_10min_o2_15min_o3_20min_o4_30min_o5_hourly_o6_daily_required }}
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

The collection update webhook does not fire when product memberships change based on the smart collection's rules. This task bridges that gap by monitoring smart collections at regular intervals to see if the list of their product IDs has changed, and if so it will trigger the custom event topic you configure.

Choose to have the task run in intervals of 10min, 15min, 20min, 30min, hourly, or daily. Optionally, pick specific collections to monitor. If no collections are configured, then this task will monitor all smart collections in the shop.

*Example use case:*

A 3rd party app/integration/service has a feature to sync a collection's products to their platform. However, it depends on the collection update webhook to know when products should be re-synced. Since this will not happen for a smart collection solely when product memberships change, a task could be developed to listen for the configured custom event, and then either interface with that service's API directly to trigger a sync, or perhaps simply add a new tag to the collection to trigger the update webhook.

**Notes:**
- The custom event topic must follow the Mechanic naming convention for [user-defined topics](https://learn.mechanic.dev/core/events/topics#user-defined-topics)
- The task will only send along the collection's [global ID](https://shopify.dev/docs/api/usage/gids) in a `collection_id` variable to the custom event
- A custom event will be triggered for each qualifying collection
- This task will not send a custom event for newly seen smart collections, since it has to first save a hashed list of product IDs in a collection metafield
- The "Extra logging" option is there if you would like to see log messages for empty collections and collections that have not changed. Leave it unchecked unless debugging to keep the frequent task run logs nice and tidy.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/monitor-smart-collections-for-product-membership-changes), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/monitor-smart-collections-for-product-membership-changes.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
