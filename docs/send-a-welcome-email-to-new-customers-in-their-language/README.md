# Send a welcome email to new customers, in their language

Tags: Email, Customers, Localization, Retention

This task demonstrates how to send emails that respect the customer's language preference, by matching their locale to a pre-written email translation.

* View in the task library: [usemechanic.com/task/send-a-welcome-email-to-new-customers-in-their-language](https://usemechanic.com/task/send-a-welcome-email-to-new-customers-in-their-language)
* Task JSON, for direct import: [task.json](../../tasks/send-a-welcome-email-to-new-customers-in-their-language.json)
* Preview task code: [script.liquid](./script.liquid)

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

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/customers/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task demonstrates how to send emails that respect the customer's language preference, by matching their locale to a pre-written email translation.

For more on the techniques in this task, see [Sending multilingual emails](https://docs.usemechanic.com/article/465-sending-multilingual-emails).

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/send-a-welcome-email-to-new-customers-in-their-language), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-a-welcome-email-to-new-customers-in-their-language.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
