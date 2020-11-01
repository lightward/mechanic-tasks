# Catalog update email

* [task.json](../../tasks/catalog-update-email.json) (for import/export)
* [Task script](./script.liquid)

Get an email alert whenever a product is created, updated, or deleted. This makes it easy to keep tabs on updates to your catalog – useful if you need a precise audit trail.

## Default options

```json
{
  "recipient_email__required_email": null
}
```

## Subscriptions

```liquid
shopify/products/create
shopify/products/delete
shopify/products/update
```

## Documentation

Get an email alert whenever a product is created, updated, or deleted. This makes it easy to keep tabs on updates to your catalog – useful if you need a precise audit trail.
