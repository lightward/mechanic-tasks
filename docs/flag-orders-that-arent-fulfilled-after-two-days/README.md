# Flag orders that aren't fulfilled after several days

* [task.json](../../tasks/flag-orders-that-arent-fulfilled-after-two-days.json) (for import/export)
* [Task script](./script.liquid)

It's critical to stay on top of any orders that aren't properly fulfilled – and your customers care, too! Use this task to auto-tag orders, to email yourself a reminder, and optionally to send customers a little reassurance message, if an order hasn't been fulfilled a configurable number of days after payment.

## Default options

```json
{
  "include_partially_fulfilled_orders__boolean": null,
  "tag_to_add": "unfulfilled-needs-attention",
  "staff_notification_recipient__email": null,
  "send_the_customer_an_email__boolean": false,
  "customer_email_subject": "Order {{ order.name }} is (still) on its way!",
  "customer_email_body__multiline": "Hi {{ order.customer.first_name | default: \"there\" }},\n\nThanks for your order! We're still working on getting everything to you.\n\nIf you have any questions, just reply to this message.\n\nThanks,\nThe team at {{ shop.name }}",
  "days_to_wait_before_followup__number_required": 2
}
```

## Subscriptions

```liquid
shopify/orders/paid+{{ options.days_to_wait_before_followup__number_required }}.days
```

## Documentation

It's critical to stay on top of any orders that aren't properly fulfilled – and your customers care, too! Use this task to auto-tag orders, to email yourself a reminder, and optionally to send customers a little reassurance message, if an order hasn't been fulfilled a configurable number of days after payment.

This task watches for paid orders, and schedules a follow-up check for some number of days later (you choose!).

Configure this task with a tag to automatically apply that tag on schedule, if the order remains unfulfilled. (Or if the order is partially fulfilled, if you've configured the task for this option.) Add a staff email address to receive a notification message. And, optionally, send a reassuring email to the customer, letting them know that the order is on its way, and with specifics about what's not in stock.

This task won't tag or send emails if the order is partially fulfilled, if the order has been restocked, or if the order has been cancelled.
