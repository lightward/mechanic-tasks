# Auto-associate variants with a shipping collection, by metafield value

Tags: Auto-Update, Collections, Delivery, Metafields, Variants

Automatically add shippable variants to a shipping collection when their metafield matches the configured value, and remove them when it no longer matches.

* View in the task library: [tasks.mechanic.dev/auto-associate-variants-with-a-shipping-collection-by-metafield-value](https://tasks.mechanic.dev/auto-associate-variants-with-a-shipping-collection-by-metafield-value)
* Task JSON, for direct import: [task.json](../../tasks/auto-associate-variants-with-a-shipping-collection-by-metafield-value.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "metafield_namespace_and_key__required": null,
  "metafield_value_to_match__required": null,
  "shipping_collection__picker_collection_required": null
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

Automatically add shippable variants to a shipping collection when their metafield matches the configured value, and remove them when it no longer matches.

Use this task with Shopify market-driven shipping. Select the collection used by the product conditions on your shipping option in Shopify Markets. Shopify may have created this collection when migrating your delivery profile. Select the actual collection; an old delivery profile ID cannot identify it. This task manages collection membership only. It does not create collections, configure rates, attach collections to shipping options, or change other collections.

The selected collection must have exactly one manual source, with no automated conditions, exclusions, sub-collections, or app owner. Use a collection dedicated to this shipping rule: its membership may also affect storefronts, discounts, or other features that use the same collection. The source must target variants, so a matching variant does not also include its nonmatching siblings. Enter the metafield namespace and key separated by a period (for example, custom.shipping_group), and the value to match. Run the task manually to review existing variants; later product updates are handled automatically. As with the delivery-profile task, a metafield change must result in a product-update event or be followed by a manual run. Runs that cannot finish reading all variants stop before making changes.

To replace [Auto-associate variants with a delivery profile, by metafield value](https://tasks.mechanic.dev/auto-associate-variants-with-a-delivery-profile-by-metafield-value), copy its tag or metafield settings into this task, choose the corresponding shipping collection, and review the task preview and permissions before enabling it. Disable the delivery-profile task once you switch. Test matching and nonmatching products in checkout to confirm the expected rates.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-associate-variants-with-a-shipping-collection-by-metafield-value), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-associate-variants-with-a-shipping-collection-by-metafield-value.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
