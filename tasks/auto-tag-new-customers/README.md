# Auto-tag new customers

* [Task script](./script.liquid)

This task tags every new customer, with the same configurable tag. :)

## Default options

```json
{
  "tag__required": ""
}
```

## Subscriptions

```liquid
shopify/customers/create
```

## Documentation

This task tags new customers, as their accounts are created.

To tag all of your existing customers at once, open the "Customers" section of your store, then click the checkbox in the upper-right corner of the list. You'll then see an option to "Select all 50+ customers in your store". Click it, then use the "Actions" -> "Add tags" menu item to tag all customers.