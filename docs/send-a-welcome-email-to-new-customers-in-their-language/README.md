# Send a welcome email to new customers, in their language

* [task.json](../../tasks/send-a-welcome-email-to-new-customers-in-their-language.json) (for import/export)
* [Task script](./script.liquid)

This task demonstrates how to send emails that respect the customer's language preference, by matching their locale to a pre-written email translation.

## Default options

```json
{
  "default_locale__required": "es",
  "email_subject_translations__keyval_required": {
    "es": "¡Bienvenidos, {{ customer.first_name }}!",
    "en": "Welcome, {{ customer.first_name }}!"
  },
  "email_body_translations__keyval_multiline_required": {
    "es": "Hola {{ customer.first_name }},\n\nEstamos contentos de que estés aquí. :) ¡Salud!\n\n{{ shop.name }}",
    "en": "Hello {{ customer.first_name }},\n\nWe're glad you're here. :) Cheers!\n\n{{ shop.name }}"
  }
}
```

## Subscriptions

```liquid
shopify/customers/create
```

## Documentation

This task demonstrates how to send emails that respect the customer's language preference, by matching their locale to a pre-written email translation.

For more on the techniques in this task, see [Sending multilingual emails](https://docs.usemechanic.com/article/465-sending-multilingual-emails).
