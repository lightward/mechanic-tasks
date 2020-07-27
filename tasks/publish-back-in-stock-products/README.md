# Publish back-in-stock products

* [Task script](./script.liquid)

Whenever inventory for a product is updated, this task compares its available inventory against your "back in stock" threshold. If the product is to be considered back in stock, this task will make sure it's published to the sales channels of your choice. Optionally, it'll send you an email when it publishes your product.

## Default options

```json
{
  "sales_channel_names__required_array": null,
  "email_notification_recipient__email": ""
}
```

## Subscriptions

```liquid
shopify/inventory_levels/update
```

## Documentation

(none)