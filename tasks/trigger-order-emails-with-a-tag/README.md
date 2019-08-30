# Trigger order emails with a tag

* [Task script](./script.liquid)

This task monitors order tags, and sends out an email that you configure whenever a certain tag is added. Supports email templates, and sending to custom recipients.

## Default options

```json
{
  "email_trigger_tag__required": "email",
  "email_sent_tag__required": "sent",
  "email_subject__required": "About your order: {{ order.name }}",
  "email_body_html__required_multiline_code": null
}
```

## Subscriptions

```liquid
shopify/orders/updated
```

## Documentation

This task monitors order tags, and sends out an email that you configure whenever a certain tag is added.

By default, this email will be sent to the address on file for the order. However, you can specify a custom recipient by tagging the order with "email:custom@example.com". (This example assumes you use "email" as your email trigger tag.)

When this task sends out an email, it removes the tag that triggered the message, replacing it with the email used for delivery, prefixed with the "email sent" tag.

Feel free to tag the order with multiple trigger tags at once, e.g. "email", "email:customer@example.com", "email:sales@example.com". After processing, Mechanic will leave the task tagged "sent", "sent:customer@example.com:sent", "sent:sales@example", leaving any and all other tags untouched.

Please note: Shopify restricts order tags to 40 characters in length.

To re-use your store's confirmation email template, or to use any other email template, [configure your email template with Mechanic](https://help.usemechanic.com/en/articles/2722264-add-an-email-template), and add the Mechanic email template name to your task.