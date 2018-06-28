# Save Locksmith passcodes to the customer's notes

* [Task script](./script.liquid)

Keeps a cached list of all the passcodes associated with a visitor, and upon sign-in or checkout, saves that list to the customer's "note" field in Shopify. (Requires activation of Locksmith webhooks - hit up team@uselocksmith.com to get started with those.)

## Subscriptions

```liquid
locksmith/sessions/ping
shopify/orders/create
```

## Documentation

(none)