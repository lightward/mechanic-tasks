# Tag online orders by their ?ref= referral codes

* [Task script](./script.liquid)

* [Online store javascript](./online_store_javascript.js.liquid)

Have your traffic sources refer customers using ?ref=referral-code-here URLs (using the query parameter of your choice), then use this task to automatically tag each customer's order according to the referral value they arrived with. Optionally, tag the customer as well.

## Default options

```json
{
  "query_parameter_name__required": "ref",
  "cart_attribute_name__required": "Referral code",
  "tag_customer_with_parameter_value__boolean": false,
  "only_tag_the_customer_for_their_first_order__boolean": false
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

This task adds JavaScript to your storefront, which adds referral parameters (using the query parameter of your choice) to the customer's cart (using the cart attribute name of your choice). (Referral values are saved in a browser cookie for one year.) When the corresponding order is created, this task copies the cart attribute over to the order's tags. Optionally, select to have the value applied to the customer as a tag as well.