# Auto-cancel fulfillments when an order is tagged

* [task.json](../../tasks/auto-cancel-fulfillments-when-an-order-is-tagged.json) (for import/export)
* [Task script](./script.liquid)

Useful when you discover that an order shouldn't have been fulfilled at all. :) After choosing an order tag in this task's configuration, add that tag to any order to have its fulfillments all cancelled, and the tag removed.

## Default options

```json
{
  "required_order_tag__required": null
}
```

## Subscriptions

```liquid
shopify/orders/updated
user/orders/cancel_fulfillment
```

## Documentation

Useful when you discover that an order shouldn't have been fulfilled at all. :) After choosing an order tag in this task's configuration, add that tag to any order to have its fulfillments all cancelled, and the tag removed.

This task runs when an order is updated. When the tag of your choice is found in the order's tag list, all of its fulfillments (if any) will be cancelled, and the aforementioned tag will be removed.

Notes:

* Shopify requires a delay between fulfillment cancellations. For this reason, for orders with more than one fulfillment, this task waits one minute between successive fulfillment cancellations.
* If the configured tag is added to an order with no fulfillments, the tag _will_ be auto-removed, regardless.
* If an older order happens to be updated, and it already has the configured tag, this task will process the order as if the tag was just added.
