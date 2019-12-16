# Auto-tag products by their publish date

* [Task script](./script.liquid)

This task formats the publish date of each product (according to the format you choose), adds a prefix (also of your choosing), and applies it to each product.

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

This task formats the publish date of each product (according to the format you choose), adds a prefix (also of your choosing), and applies it to each product. Run this task manually to scan your entire product catalog at once, or wait for the task to run automatically when products are created or updated.

Use [strfti.me](http://www.strfti.me) to build a date format that suits you. Use the previews to the right of the task options form to verify that your date format does what you expect. If you've got any questions, use the chat button in the corner. :)