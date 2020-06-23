# Auto-invite customers after an order

* [Task script](./script.liquid)

Automatically prompt customers to activate their customer accounts, after placing an order in your store – useful if your online store unlocks special offers, functionality, or content after making a purchase. Optionally, only send invitations if the customer has ordered a product with a specific tag.

## Default options

```json
{
  "only_invite_if_the_customer_has_not_yet_been_invited__boolean": false,
  "only_invite_if_the_customer_has_this_tag": null,
  "only_invite_if_the_order_contains_a_product_with_this_tag": null,
  "invitation_email_subject__required": "Activate your account",
  "invitation_email_body__multiline_required": "Hi there,\n\nThanks for purchasing access! Use this link to activate your new account at {{ shop.name }}.\n\nThanks,\n{{ shop.name }}"
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

This task works by asking Shopify to send along an invitation email, using the subject and body that you configure here. There's no need to add in an invitation link yourself - Shopify takes care of that themselves.