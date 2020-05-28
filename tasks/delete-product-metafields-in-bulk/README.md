# Delete product metafields in bulk

* [Task script](./script.liquid)

Use this task to delete all of your product metafields, optionally filtering by namespace or by namespace and key. This task will then delete all metafields found. Comes with a test mode – use this first to make sure you're deleting the right things.

## Default options

```json
{
  "metafield_namespace": null,
  "metafield_key": null,
  "test_mode__boolean": true
}
```

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

## Documentation

With no configuration, this task will delete all product metafields. Configure it with a metafield namespace to only delete metafields with that namespace, or add both a namespace and key to get even more specific. Run this task with the test mode option enabled, the first time, to make sure you're deleting the right material.