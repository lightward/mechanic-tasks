# Send an email when a product's price goes below its cost

* [task.json](../../tasks/send-an-email-when-a-products-price-goes-below-its-cost.json) (for import/export)
* [Task script](./script.liquid)

This task watches for product updates, and sends an email for each variant that's found to have a unit cost that's greater than the variant's for-sale price.

## Default options

```json
{
  "recipient_email__email_required": null
}
```

## Subscriptions

```liquid
shopify/products/update
```

## Documentation

This task watches for product updates, and sends an email for each variant that's found to have a unit cost that's greater than the variant's for-sale price.

This task watches for product updates, and sends an email (to the recipient of your choice) for each variant that's found to have a unit cost that's greater than the variant's for-sale price. It will only send one email per variant, per observed change to variant cost. If a product is updated that the task hasn't had a chance to previously observe, emails will be sent immediately for any variants that have a unit cost greater than their price.

[YouTube: Watch the development video!](https://youtu.be/LrFu6bV1f1o)
