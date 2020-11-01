# Auto-tag products by their publish date

* [task.json](../../tasks/auto-tag-products-by-their-publish-date.json) (for import/export)
* [Task script](./script.liquid)

null

## Default options

```json
{
  "date_format__required": "%B %Y",
  "tag_prefix__required": "Published: "
}
```

## Subscriptions

```liquid
mechanic/user/trigger
shopify/products/create
shopify/products/update
```

## Documentation

null
