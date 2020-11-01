# Auto-invite customers after an order

* [task.json](../../tasks/auto-invite-customers-after-an-order.json) (for import/export)
* [Task script](./script.liquid)

Automatically prompt customers to activate their customer accounts, after placing an order in your store, by triggering a customizable Shopify-powered email. Useful if your online store unlocks special offers, functionality, or content after making a purchase. Optionally, only send invitations if the customer has ordered a product with a specific tag.

## Default options

```json
{
  "only_invite_if_the_customer_has_not_yet_been_invited__boolean": false,
  "only_invite_if_the_customer_has_this_tag": null,
  "only_invite_if_the_order_contains_a_product_with_this_tag": null,
  "invitation_email_subject__required": "Activate your account",
  "invitation_email_custom_message__multiline": "Hi there,\n\nThanks for purchasing access! Activate your new account at {{ shop.name }}.\n\nThanks,\n{{ shop.name }}"
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

Automatically prompt customers to activate their customer accounts, after placing an order in your store, by triggering a customizable Shopify-powered email. Useful if your online store unlocks special offers, functionality, or content after making a purchase. Optionally, only send invitations if the customer has ordered a product with a specific tag.

This task works by asking Shopify to send along an invitation email, using the subject and body that you configure here. The email will use your Shopify account's "Customer account invite" email template, available in the "Notifications" area of your Shopify settings. Note: Because this task triggers a Shopify-powered email, and because this email already uses a Shopify template, the actual message body is optional. (If provided, HTML and CSS are not supported.) And, there's no need to add in an invitation link yourself – this will be taken care of by the Shopify email template as well.
