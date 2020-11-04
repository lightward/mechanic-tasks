# Auto-tag orders that contain an out of stock item

* [task.json](../../tasks/auto-tag-orders-that-contain-an-out-of-stock-item.json) (for import/export)
* [Task script](./script.liquid)

This task watches for newly-created orders, and checks each line item for that variant's total inventory quantity. If any are found with an inventory level of 0 or less, the task will add the tag of your choice to the order – and, optionally, will add a tag to the customer and to each product related to an out-of-stock line item.

## Default options

```json
{
  "apply_this_order_tag__required": "",
  "apply_this_customer_tag": null,
  "apply_this_product_tag_for_each_out_of_stock_line_item": null
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

This task watches for newly-created orders, and checks each line item for that variant's total inventory quantity. If any are found with an inventory level of 0 or less, the task will add the tag of your choice to the order – and, optionally, will add a tag to the customer and to each product related to an out-of-stock line item.
