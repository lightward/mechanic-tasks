# Manage annual memberships based on order minimums

* [task.json](../../tasks/manage-annual-memberships-based-on-order-minimums.json) (for import/export)
* [Task script](./script.liquid)

Use this task to automatically tag customers as members when they purchase a minimum quantity of products. And, check on those customers on a regular basis to ensure that they maintain their order quantity minimums.

## Default options

```json
{
  "minimum_qualifying_order_quantity__number_required": null,
  "membership_tag__required": null,
  "months_of_order_history_to_consider_for_renewal__number_required": 12,
  "minimum_qualifying_order_quantity_for_renewal__number_required": null,
  "months_between_renewal_checks__number_required": 12
}
```

## Subscriptions

```liquid
shopify/orders/paid
user/membership/renewal+{{ options.months_between_renewal_checks__number_required | default: 12 }}.months
```

## Documentation

Use this task to automatically tag customers as members when they purchase a minimum quantity of products. And, check on those customers on a regular basis to ensure that they maintain their order quantity minimums.
