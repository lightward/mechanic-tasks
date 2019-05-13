# Schedule customer auto-tagging after a purchase

* [Task script](./script.liquid)

Selling scheduled events? Using this task, you can automatically tag customers after the event has been completed. Simply tag a product with "autotag Authorized May 15", for example, and Mechanic will tag purchasers of that product with "Authorized", on May 15th.

## Default options

```json
{
  "autotag_prefix__required": "autotag"
}
```

## Subscriptions

```liquid
shopify/orders/paid
user/autotag/customer
```

## Documentation

This task comes with a single option: "Autotag prefix". Mechanic will watch your incoming orders for any products that have a tag beginning with that prefix. It will then consider the next word in the product tag to be the _customer_ tag you wish to apply. The rest of the tag will be treated as a date, for the purposes of scheduling the customer tagging.

For example, purchases of a product tagged with "autotag Authorized May 15" will result in customers being auto-tagged with "Authorized", on May 15th.

Products may have multiple tags containing autotag information, and Mechanic will check every product in a customer's order, resulting in as many auto-taggings as are appropriate. autotag events as appropriate.

Note: The customer tag to apply _must not_ contain any spaces!