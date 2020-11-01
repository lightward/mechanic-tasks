# Auto-tag orders that contain bundles

* [task.json](../../tasks/auto-tag-orders-that-contain-bundles.json) (for import/export)
* [Task script](./script.liquid)

Use this task to automatically detect and tag orders that contain a complete bundle of products. Configure this task with as many bundles as you like, specifying a tag to add and a list of required SKUs.

## Default options

```json
{
  "tags_and_required_skus__keyval_required": {
    "Summer bundle": "SUN01,SUN02,SUN03",
    "Winter bundle": "SNOW01,SNOW02,SNOW03"
  }
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

Use this task to automatically detect and tag orders that contain a complete bundle of products. Configure this task with as many bundles as you like, specifying a tag to add and a list of required SKUs.

Fill in "Tags and required SKUs" option with tags on the left, and a comma-delimited lists of SKUs on the right.
