# Automatically send account invite to new customers

* [Task script](./script.liquid)

This task keeps an eye on customers as you create or import them in Shopify, and automatically sends account invitations to any customers that have an email address.

## Default options

```json
{
  "invitation_email_subject__required": null,
  "invitation_email_body__multiline_required": null
}
```

## Subscriptions

```liquid
shopify/customers/create+1.minute
```

## Documentation

This task sends account invitations to newly-created customers, whether created/imported through the Shopify admin or through another app. It does not send invitation emails for customers without an email address, or to customers who've signed up via your online store. (Wondering about the 1-minute delay? It's because customers who sign themselves up aren't marked as such until a few seconds after their account is created. So, Mechanic waits a minute, just to be sure.)