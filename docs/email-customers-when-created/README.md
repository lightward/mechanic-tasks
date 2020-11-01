# Email customers when created

* [task.json](../../tasks/email-customers-when-created.json) (for import/export)
* [Task script](./script.liquid)

Use this task to send a quick welcome email to customers, when they sign up or are otherwise created in your shop. Optionally, filter by customer tag to only send welcome emails to certain customers.

## Default options

```json
{
  "required_customer_tag": null,
  "email_subject__required": null,
  "email_body__multiline_required": null
}
```

## Subscriptions

```liquid
shopify/customers/create
```

## Documentation

Use this task to send a quick welcome email to customers, when they sign up or are otherwise created in your shop. Optionally, filter by customer tag to only send welcome emails to certain customers.

This task will send out your email to any customer when their account is created. This can happen when a customer signs themselves up, when you create their customer record within the store, when a new customer places an order, or for any other reason that a customer record is created.
