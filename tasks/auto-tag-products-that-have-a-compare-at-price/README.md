# Auto-tag products that have a "compare at" price

* [Task script](./script.liquid)

This task will keep your sale tags in sync, without any manual work. Configure the task with a tag to apply (and optionally a tag for products that aren't on sale), and Mechanic will take care of applying and removing tags as appropriate.

## Default options

```json
{
  "tag_for_sale_products": "on-sale",
  "tag_for_all_other_products": "not-on-sale"
}
```

## Subscriptions

```liquid
shopify/products/create
shopify/products/update
mechanic/user/trigger
```

## Documentation

This task will keep your sale tags in sync, without any manual work. Configure the task with a tag to apply (and optionally a tag for products that _aren't_ on sale), and Mechanic will take care of applying and removing tags as appropriate.

Run this task manually to update your entire product catalog at once.