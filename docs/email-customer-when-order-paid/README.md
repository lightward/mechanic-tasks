# Email customer when their order is paid

* [task.json](../../tasks/email-customer-when-order-paid.json) (for import/export)
* [Task script](./script.liquid)

null

## Default options

```json
{
  "required_order_tags_at_the_time_of_payment__array": null,
  "email_subject__required": "Order #{{ order.order_number }} is paid - thank you!",
  "email_body__multiline_required": null
}
```

## Subscriptions

```liquid
shopify/orders/paid
```

## Documentation

null
