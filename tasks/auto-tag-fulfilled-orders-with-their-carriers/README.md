# Auto-tag fulfilled orders with their carriers

* [Task script](./script.liquid)

When an order is fulfilled, this task will scan the tracking information for each fulfillment. The name of each tracking company on file – i.e. the fulfillment carrier – will then be added to the order as a tag.

## Subscriptions

```liquid
shopify/orders/fulfilled
```

## Documentation

When an order is fulfilled, this task will scan the tracking information for each fulfillment. The name of each tracking company on file – i.e. the fulfillment carrier – will then be added to the order as a tag.