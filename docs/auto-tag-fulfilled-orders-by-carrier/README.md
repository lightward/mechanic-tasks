# Auto-tag fulfilled orders by carrier

* [task.json](../../tasks/auto-tag-fulfilled-orders-by-carrier.json) (for import/export)
* [Task script](./script.liquid)

When an order is fulfilled, this task will scan the tracking information for each fulfillment. The name of each tracking company on file – i.e. the fulfillment carrier – will be used to look up a new order tag to apply, per the task's configuration.

## Default options

```json
{
  "fulfillment_carriers_and_order_tags__keyval_required": {
    "DHL Global": "international"
  }
}
```

## Subscriptions

```liquid
shopify/orders/fulfilled
```

## Documentation

When an order is fulfilled, this task will scan the tracking information for each fulfillment. The name of each tracking company on file – i.e. the fulfillment carrier – will be used to look up a new order tag to apply, per the task's configuration.
