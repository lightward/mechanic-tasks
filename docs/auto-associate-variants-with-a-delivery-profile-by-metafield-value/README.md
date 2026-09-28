# Auto-associate variants with a delivery profile, by metafield value

Tags: Auto-Update, Delivery, Metafields, Variants

Use this task to automatically add variants to the configured delivery profile on product update, if any of the variants have a metafield value matching the configured value. Conversely, variants with a non-existant or mismatched metafield value that are in the configured delivery profile will be removed.

* View in the task library: [tasks.mechanic.dev/auto-associate-variants-with-a-delivery-profile-by-metafield-value](https://tasks.mechanic.dev/auto-associate-variants-with-a-delivery-profile-by-metafield-value)
* Task JSON, for direct import: [task.json](../../tasks/auto-associate-variants-with-a-delivery-profile-by-metafield-value.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "metafield_namespace_and_key__required": null,
  "metafield_value_to_match__required": null,
  "delivery_profile_id__required_number": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/products/update
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to automatically add variants to the configured delivery profile on product update, if any of the variants have a metafield value matching the configured value. Conversely, variants with a non-existant or mismatched metafield value that are in the configured delivery profile will be removed.

Configure this task with a variant metafield namespace and key separated by a period (e.g. "custom.my_metafield"), the metafield value to match, and the delivery profile ID. Find the delivery profile ID by navigating to the "Shipping and delivery" section of your Shopify settings, and clicking on the "Manage " link of the delivery profile you want to use. The delivery profile ID is the series of numbers at the very end of the URL – if the URL is admin.shopify.com/store/{your_shop}/settings/shipping/profiles/12345, then the delivery profile ID is 123545.

As an initial setup, you can run the task manually to have it review all of the variants in your shop.

**IMPORTANT**:

If Shopify has migrated this shop to market-based shipping, this task will no longer be able to update the old shipping profiles. Shopify should have [created new shipping collections during the migration](https://help.shopify.com/en/manual/fulfillment/setup/shipping-options/whats-changing-with-shipping#collections-created-during-the-upgrade). Whether you choose to use the auto-created shipping collections or configure your own is up to you. One suggestion would be to use a [variant metafield condition](https://help.shopify.com/en/manual/custom-data/metafields/collections) using the metafield and value configured in this task as the collection source instead of the individually added variants.

Migration of all shops is expected to complete by July 2027. You can safely delete this task after your shop has been migrated by Shopify.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-associate-variants-with-a-delivery-profile-by-metafield-value), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-associate-variants-with-a-delivery-profile-by-metafield-value.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
