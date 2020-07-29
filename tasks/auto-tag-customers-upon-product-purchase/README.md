# Auto-tag customers when they purchase a matching product

* [Task script](./script.liquid)

Configure this task with search terms that describe certain products, and this task will apply the tags of your choice to every customer who purchases a matching product or product variant. Run this task manually to tag all customers who have a qualifying order already on file.

## Default options

```json
{
  "search_query__required": "sku:ABC123",
  "search_for_products__boolean": false,
  "search_for_product_variants__boolean": true,
  "customer_tags_to_apply__required_array": [

  ],
  "test_mode__boolean": true
}
```

## Subscriptions

```liquid
shopify/orders/paid
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

## Documentation

This task auto-tags customers who have paid orders on file for products or product variants that match the search query you add.

Sample searches:

* A specific SKU: search product variants for `sku:ABC123`
* All products with a certain tag: search products for `tag:holiday`
* All products with a certain type: search products for `product_type:"Gift Card"`
* A product with a certain title: search products for `title:"Short sleeve t-shirt"`

To ensure expected results, use this task with test mode enabled, before disabling test mode.