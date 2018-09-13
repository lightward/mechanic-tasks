# Backfill customer names from order addresses

* [Task script](./script.liquid)

The merchant who requested this task removed the first- and last-name fields from their storefront's registration form, to speed up the customer signup process. This task fills in those blanks by copying the customer's name from the billing or shipping address (whichever is available), upon their first purchase.

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

(none)