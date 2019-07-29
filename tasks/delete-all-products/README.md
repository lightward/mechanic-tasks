# Delete all products

* [Task script](./script.liquid)

Use this task to quickly (and permanently) clear out your product list. Optionally, filter by a specific query, so as to only delete specific products from your store. Supports a test mode, allowing you to see exactly what products you can expect Mechanic to delete.

## Default options

```json
{
  "query": "",
  "test_mode__boolean": true,
  "live_mode__boolean": false
}
```

## Subscriptions

```liquid
mechanic/user/trigger
```

## Documentation

Use this task to quickly clear out your product list.

**Caution: if you leave the query option empty, this task will delete every product in your store.**

Use the "query" setting to get specific about what products you want to delete. Tick the "Test mode" checkbox to verify which products will be deleted: after saving, use the "Run task" button to run the product scan, and you'll receive a list of products that Mechanic would have deleted in live mode. Once you're ready, uncheck the "Test mode" box and check the "Live mode" box, save the task, then use "Run task" to permanently delete all matching products.

Example queries:

* `product_type:Shirt`
* `tag:old`

Learn more:

* [Supported query options](https://help.shopify.com/en/api/graphql-admin-api/reference/queryroot#products-2019-07)
* [Query search syntax](https://help.shopify.com/api/getting-started/search-syntax)