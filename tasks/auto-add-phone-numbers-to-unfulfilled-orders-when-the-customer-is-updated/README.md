# Auto-add phone numbers to unfulfilled orders, when the customer is updated

* [Task script](./script.liquid)

When a customer update occurs, if the customer has a phone number on file, this task will look for unshipped or partially shipped orders that don't yet have a phone number on file, and will add the customer's phone number to those orders.

## Subscriptions

```liquid
shopify/customers/update
```

## Documentation

When a customer update occurs, if the customer has a phone number on file, this task will look for unshipped or partially shipped orders that don't yet have a phone number on file, and will add the customer's phone number to those orders.