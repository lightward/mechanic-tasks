# Auto-capture order payment based on shipping method

* [task.json](../../tasks/auto-capture-order-payment-based-on-shipping-method.json) (for import/export)
* [Task script](./script.liquid)

This task auto-captures payment if the customer has selected a certain shipping method. Useful for expedited order fulfillments.

## Default options

```json
{
  "allowed_shipping_methods__required_array": []
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

This task auto-captures payment if the customer has selected a certain shipping method. Useful for expedited order fulfillments.

For expected results, be sure to enable "Manually capture payment for orders" in Shopify, [using this guide](https://help.shopify.com/en/manual/payments/payment-authorization#set-up-manual-capture-of-credit-card-payments).

Please note: This task will *only* capture payment for orders that have the financial status "authorized". You are responsible for ensuring that fulfillment occurs within the order payment's authorization period.
