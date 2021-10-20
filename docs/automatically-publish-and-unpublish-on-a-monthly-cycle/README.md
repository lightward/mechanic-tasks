# Automatically publish and unpublish on a monthly cycle

Tags: Products, Publish, Unpublish

Use this task to make a single product or page available for a limited window of time, on a monthly basis. Redirect your visitors to a specific page when that resource is unavailable.

* View in the task library: [usemechanic.com/task/automatically-publish-and-unpublish-on-a-monthly-cycle](https://usemechanic.com/task/automatically-publish-and-unpublish-on-a-monthly-cycle)
* Task JSON, for direct import: [task.json](../../tasks/automatically-publish-and-unpublish-on-a-monthly-cycle.json)
* Preview task code:
  * [script.liquid](./script.liquid)
  * [online_store_javascript.js.liquid](./online_store_javascript.js.liquid)

## Default options

```json
{
  "resource_type__required": "product",
  "resource_id__number_required": null,
  "day_of_the_month_to_publish_resource__number_required": null,
  "day_of_the_month_to_unpublish_resource__number_required": null,
  "redirect_url_when_resource_is_not_published": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/daily
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to make a single product or page available for a limited window of time, on a monthly basis. Redirect your visitors to a specific page when that resource is unavailable.

Configure this task using the resource type (either "product" or "page"), a resource ID ([learn how to find this](https://help.usemechanic.com/faqs/how-do-i-find-an-id-for-a-product-collection-order-or-something-else)), the days of the month for publishing and unpublishing, and the URL you'd like to send visitors to when they land on the resource when it's unpublished.

This task will run automatically, at midnight in your store's local timezone. Run this task manually, using the "Run task" button, if you'd like to test your settings immediately. :)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/automatically-publish-and-unpublish-on-a-monthly-cycle), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/automatically-publish-and-unpublish-on-a-monthly-cycle.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
