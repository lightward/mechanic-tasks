# Email customer when their order is paid

* [Task script](./script.liquid)

Quickly send a thank-you email (or any other sort of follow-up email) to your customers, as soon as their order is paid. (Optionally, require one or more order tags to be present, in order for the email to be sent.) And it's super easy to add a delay – set the task to subscribe "shopify/orders/paid+2.days" or "shopify/orders/paid+1.week" instead to create a thoughtful just-checking-back-in-with-you message. :)

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

Quickly send a thank-you email (or any other sort of follow-up email) to your customers, as soon as their order is paid. (Optionally, require one or more order tags to be present, in order for the email to be sent.) And it's super easy to add a delay – set the task to subscribe "shopify/orders/paid+2.days" or "shopify/orders/paid+1.week" instead to create a thoughtful just-checking-back-in-with-you message. :)