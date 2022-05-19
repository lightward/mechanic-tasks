# Add fulfillment tracking when an order is tagged

Tags: Fulfillment, Tag, Tracking, Watch

Configure this tag with a mapping of country codes to tracking companies and URL templates, and/or default companies and URL templates. When an order is tagged, this task will apply the appropriate values to each fulfillment that has a tracking number.

* View in the task library: [tasks.mechanic.dev/add-fulfillment-tracking-when-an-order-is-tagged](https://tasks.mechanic.dev/add-fulfillment-tracking-when-an-order-is-tagged)
* Task JSON, for direct import: [task.json](../../tasks/add-fulfillment-tracking-when-an-order-is-tagged.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "order_tag_to_watch_for__required": "update-tracking",
  "country_codes_and_tracking_url_templates__keyval": {
    "US": "https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=TRACKING_NUMBER",
    "CA": "https://www.canadapost.ca/trackweb/en#/search?searchFor=TRACKING_NUMBER",
    "AU": "https://auspost.com.au/mypost/track/#/details/TRACKING_NUMBER",
    "NZ": "https://www.nzpost.co.nz/tools/tracking/item/TRACKING_NUMBER",
    "GB": "http://www.royalmail.com/portal/rm/track?trackNumber=TRACKING_NUMBER"
  },
  "default_tracking_url_template": "http://parcelsapp.com/en/tracking/TRACKING_NUMBER",
  "overwrite_existing_tracking_urls__boolean": true,
  "country_codes_and_tracking_companies__keyval": {
    "US": "USPS",
    "CA": "Canada Post",
    "AU": "Australia Post",
    "NZ": "New Zealand Post",
    "GB": "Royal Mail"
  },
  "default_tracking_company": "Parcels",
  "notify_customers__boolean": true
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/updated
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Configure this tag with a mapping of country codes to tracking companies and URL templates, and/or default companies and URL templates. When an order is tagged, this task will apply the appropriate values to each fulfillment that has a tracking number.

Configure this tag with mappings of two-character country codes to tracking companies, and tracking URL templates. Both companies and URL templates support a default value as well, which will be used for orders that don't have a mapped country in the task's configuration. When an order is tagged, this task will apply the appropriate values to each fulfillment that has a tracking number.

If "Notify customers" is enabled, this task will request that Shopify send a notification email when the fulfillment update is processed.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/add-fulfillment-tracking-when-an-order-is-tagged), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/add-fulfillment-tracking-when-an-order-is-tagged.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
