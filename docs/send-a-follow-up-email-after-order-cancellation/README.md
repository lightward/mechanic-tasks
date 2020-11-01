# Send a follow-up email after order cancellation

* [task.json](../../tasks/send-a-follow-up-email-after-order-cancellation.json) (for import/export)
* [Task script](./script.liquid)

null

## Default options

```json
{
  "only_send_for_first_time_customers__boolean": false,
  "hours_to_wait_after_cancellation__number": null,
  "email_subject__required": "Following up on order {{ order.name }}",
  "email_body__multiline_required": "Hello,\n\nWe received your cancellation. Is there anything else we can do for you?\n\nThanks,\n{{ shop.name  }}"
}
```

## Subscriptions

```liquid
shopify/orders/cancelled{% if options.hours_to_wait_after_cancellation__number != blank %}+{{ options.hours_to_wait_after_cancellation__number }}.hours{% endif %}
```

## Documentation

null
