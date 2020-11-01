# Track incoming donations in a store metafield

* [task.json](../../tasks/track-incoming-donations-in-a-store-metafield.json) (for import/export)
* [Task script](./script.liquid)

This task watches for orders for a certain donation product, and tallies up the total donation amount in a store metafield, allowing you to display this value in your online storefront.

## Default options

```json
{
  "metafield_namespace__required": null,
  "metafield_key__required": null,
  "donation_product_handle__required": null,
  "recalculate_nightly__boolean": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.recalculate_nightly__boolean %}
  mechanic/scheduler/daily
{% endif %}
shopify/orders/create
shopify/orders/paid
```

## Documentation

This task watches for orders for a certain donation product, and tallies up the total donation amount in a store metafield, allowing you to display this value in your online storefront.

This task runs automatically, whenever an order is paid. To fully recalculate the total donation amount stored, click the "Run task" button. Optionally, choose to have this task run the recalculation nightly - useful for making sure that refunds are regularly accounted for.
