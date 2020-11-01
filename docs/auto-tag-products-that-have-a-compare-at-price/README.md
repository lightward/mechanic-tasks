# Auto-tag products that have a "compare at" price

* [task.json](../../tasks/auto-tag-products-that-have-a-compare-at-price.json) (for import/export)
* [Task script](./script.liquid)

This task will keep your sale tags in sync, without any manual work. Configure the task with a tag to apply (and optionally a tag for products that aren't on sale), and Mechanic will take care of applying and removing tags as appropriate. If you're using Shopify discounts, this can allow you to use automatic sale collections – based on these tags – to control eligibility for your discounts.

## Default options

```json
{
  "tag_for_sale_products": "on-sale",
  "tag_for_all_other_products": "not-on-sale",
  "sale_products_must_have_a_price_lower_than_the_compare_at_price__boolean": true
}
```

## Subscriptions

```liquid
shopify/products/create
shopify/products/update
mechanic/user/trigger
```

## Documentation

This task will keep your sale tags in sync, without any manual work. Configure the task with a tag to apply (and optionally a tag for products that aren't on sale), and Mechanic will take care of applying and removing tags as appropriate. If you're using Shopify discounts, this can allow you to use automatic sale collections – based on these tags – to control eligibility for your discounts.

This task will keep your sale tags in sync, without any manual work. Configure the task with a tag to apply (and optionally a tag for products that _aren't_ on sale), and Mechanic will take care of applying and removing tags as appropriate.

Run this task manually to update your entire product catalog at once.
