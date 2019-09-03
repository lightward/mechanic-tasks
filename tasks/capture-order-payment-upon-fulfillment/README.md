# Capture order payment upon fulfillment

* [Task script](./script.liquid)

Short and simple. :) Upon the fulfillment of an authorized order, this task attempts to capture payment for that order.

## Subscriptions

```liquid
shopify/orders/fulfilled
```

## Documentation

For expected results, be sure to enable "Manually capture payment for orders" in Shopify, [using this guide](https://help.shopify.com/en/manual/payments/payment-authorization#set-up-manual-capture-of-credit-card-payments).

Please note: This task will *only* capture payment for orders that have the financial status "authorized". You are responsible for ensuring that fulfillment occurs within the order payment's authorization period.