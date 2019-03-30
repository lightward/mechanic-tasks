# Send account invites to all customers in bulk

* [Task script](./script.liquid)

Use this task to send out account invitations to all the customers you already have on file, with the push of a button. Optionally, filter by customer tag.

## Default options

```json
{
  "invitation_email_subject__required": "Activate your account at {{ shop.name }}",
  "invitation_email_body__multiline_required": "Hi CUSTOMER_FIRST_NAME,\n\nJust one step left:\n\n<b><a href=\"ACCOUNT_ACTIVATION_URL\">Activate your account</a></b>\n\nThanks,\n{{ shop.name }}",
  "only_invite_customers_with_this_tag": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
```

## Documentation

(none)