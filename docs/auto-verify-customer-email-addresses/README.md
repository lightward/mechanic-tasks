# Auto-verify customer email addresses

* [task.json](../../tasks/auto-verify-customer-email-addresses.json) (for import/export)
* [Task script](./script.liquid)

null

## Default options

```json
{
  "tag_to_add_after_verifying__required": "verified",
  "verification_email_subject__required": "[{{ shop.name }}] Please verify your account",
  "verification_email_body__multiline_required": "Hello,\n\nWe've received your registration, but we need you to verify your email address before continuing.\n\nPlease visit https://example.com/pages/verify, and submit the verification code VERIFICATION_CODE.\n\nIf you have any questions, please reply to this email.\n\nThanks,\n{{ shop.name }}",
  "verification_confirmed_email_subject__required": "[{{ shop.name }}] Your account has been confirmed",
  "verification_confirmed_email_body__multiline_required": "Hello,\n\nYour account has been successfully verified. Thank you!\n\nCheers,\n{{ shop.name }}",
  "verification_webhook_event_topic__required": "user/customers/verify_webhook"
}
```

## Subscriptions

```liquid
shopify/customers/create
{{ options.verification_webhook_event_topic__required }}
```

## Documentation

null
