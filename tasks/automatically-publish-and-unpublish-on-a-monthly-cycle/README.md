# Automatically publish and unpublish on a monthly cycle

* [Task script](./script.liquid)

* [Online store javascript](./online_store_javascript.js.liquid)

Use this task to make a single product or page available for a limited window of time, on a monthly basis. Redirect your visitors to a specific page when that resource is unavailable.

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

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/daily
```

## Documentation

Configure this task using the resource type (either "product" or "page"), a resource ID ([learn how to find this](https://help.usemechanic.com/faqs/how-do-i-find-an-id-for-a-product-collection-order-or-something-else)), the days of the month for publishing and unpublishing, and the URL you'd like to send visitors to when they land on the resource when it's unpublished.

This task will run automatically, at midnight in your store's local timezone. Run this task manually, using the "Run task" button, if you'd like to test your settings immediately. :)