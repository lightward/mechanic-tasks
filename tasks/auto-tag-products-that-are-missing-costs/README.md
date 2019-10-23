# Auto-tag products that are missing costs

* [Task script](./script.liquid)

Use this task to help you close in on the last few products that are missing cost values. Trigger this task manually to process your entire catalog, or let this task update tags as needed for products you create or update.

## Default options

```json
{
  "tag_for_cost_missing__required": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
shopify/products/create
shopify/products/update
```

## Documentation

Use the "Run task" button to scan all products in your catalog. Or, create/update products as usual, and this task will maintain tagging accordingly.