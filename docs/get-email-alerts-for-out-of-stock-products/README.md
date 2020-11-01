# Get email alerts for out of stock products

* [task.json](../../tasks/get-email-alerts-for-out-of-stock-products.json) (for import/export)
* [Task script](./script.liquid)

Use this task to keep you and your team updated when products go out of stock - and, optionally, when they go back in stock. Filter with a simple product search to only track products you care about. Choose a custom stock threshold to get a heads up before the stock level reaches zero.

## Default options

```json
{
  "out_of_stock_inventory_quantity__number_required": "10",
  "only_monitor_products_matching_this_search_query": "shirt",
  "send_email_for_out_of_stock_products__boolean": true,
  "send_email_for_back_in_stock_products__boolean": true,
  "stock_update_email_recipients__email_array_required": []
}
```

## Subscriptions

```liquid
shopify/inventory_levels/update
mechanic/user/trigger
```

## Documentation

Use this task to keep you and your team updated when products go out of stock - and, optionally, when they go back in stock. Filter with a simple product search to only track products you care about. Choose a custom stock threshold to get a heads up before the stock level reaches zero.

Configure this task to receive email alerts when products go out of stock, for the threshold of your choice, optionally applying a specific product search.

Run this task manually to scan all products up front. While this task normally remembers which products were out (or in) stock, running this task manually will always result in an email summary of out of stock products.
