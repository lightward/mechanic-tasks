# Auto-tag customers that accept marketing

* [task.json](../../tasks/auto-tag-customers-that-accept-marketing.json) (for import/export)
* [Task script](./script.liquid)

Use this task to easily keep track of customers who accept marketing, adding a tag for those that do and removing it from customers who do not. Run this task manually to sync that tag for all customers.

## Default options

```json
{
  "customer_tag_to_add__required": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
shopify/customers/create
shopify/customers/update
```

## Documentation

Use this task to easily keep track of customers who accept marketing, adding a tag for those that do and removing it from customers who do not. Run this task manually to sync that tag for all customers.

Note: If you have many customers, running this task manually could take a long time!
