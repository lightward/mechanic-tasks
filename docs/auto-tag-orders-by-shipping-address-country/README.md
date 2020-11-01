# Auto-tag orders by shipping address country

* [task.json](../../tasks/auto-tag-orders-by-shipping-address-country.json) (for import/export)
* [Task script](./script.liquid)

This task automatically adds the tag of your choice to incoming orders, based on the country in the order's shipping address.

## Default options

```json
{
  "country_code__required": null,
  "tag_to_apply__required": null
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

This task automatically adds the tag of your choice to incoming orders, based on the country in the order's shipping address.

This task automatically tags orders based on the country in the shipping address. The "Country code" option expects the two-character country code in all caps. [Find country codes here.](https://help.shopify.com/en/api/storefront-api/reference/enum/countrycode)
