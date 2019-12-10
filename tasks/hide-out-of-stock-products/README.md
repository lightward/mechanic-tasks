# Hide out-of-stock products

* [Task script](./script.liquid)

This task monitors inventory updates, and pulls the product from the selected sales channels whenever a product's total inventory meets your "out of stock" threshold. Optionally, it'll send you an email when it does so. This task can also be run manually, to scan all products at once.

## Default options

```json
{
  "sales_channel_names__required_array": [
    "Online Store"
  ],
  "email_notification_recipient__email": "",
  "out_of_stock_inventory_quantity__number_required": "0"
}
```

## Subscriptions

```liquid
mechanic/user/trigger
shopify/inventory_levels/update
```

## Documentation

This task monitors inventory updates, and pulls the product from the selected sales channels whenever a product's total inventory meets your "out of stock" threshold.

To scan your entire catalog for out of stock products, use the "Run task" button. Otherwise, this task will run whenever an inventory level is updated.

If you'd like to wait until the product has been out of stock for several days, use this task instead: [Unpublish products that have been out of stock for x days](https://usemechanic.com/task/unpublish-products-that-have-been-out-of-stock-for-x-days).