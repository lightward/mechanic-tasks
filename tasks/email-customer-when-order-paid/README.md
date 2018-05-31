# Email customer when their order is paid

* [Task script](./script.liquid)

Quickly send a thank-you email (or any other sort of follow-up email) to your customers, as soon as their order is paid. And it's super easy to add a delay - set the task to subscribe "shopify/orders/paid+2.days" or "shopify/orders/paid+1.week" instead to create a thoughtful just-checking-back-in-with-you message. :)

## Default options

```json
{
  "subject__required": "Order #{{ order.order_number }} is paid - thank you!",
  "body__multiline_required": ""
}
```

## Subscriptions

```liquid
shopify/orders/paid
```

## Documentation

(none)