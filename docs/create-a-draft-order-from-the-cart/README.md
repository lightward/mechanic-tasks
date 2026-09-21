# Create a draft order from the cart

Tags: Cart, Draft Orders

Turn a storefront cart into a Shopify draft order, using a Mechanic storefront form or your existing custom cart button. Signed-in customers are linked to their verified Shopify customer account. Shopify supplies current variant prices; review the draft before sending an invoice.

* View in the task library: [tasks.mechanic.dev/create-a-draft-order-from-the-cart](https://tasks.mechanic.dev/create-a-draft-order-from-the-cart)
* Task JSON, for direct import: [task.json](../../tasks/create-a-draft-order-from-the-cart.json)
* Preview task code:
  * [script.liquid](./script.liquid)
  * [online_store_javascript.js.liquid](./online_store_javascript.js.liquid)

## Default options

```json
{
  "mechanic_webhook_event_topic__required": null,
  "form__storefrontform": "",
  "email_field_key": "email",
  "shared_secret": null,
  "mechanic_webhook_url": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{{ options.mechanic_webhook_event_topic__required }}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Turn a storefront cart into a Shopify draft order, using a Mechanic storefront form or your existing custom cart button. Signed-in customers are linked to their verified Shopify customer account. Shopify supplies current variant prices; review the draft before sending an invoice.

### Set up a storefront form

1. In **Storefront forms**, use **Request a quote from your cart**. The template includes the current cart when submitted and opens from a button. Keep the email field, or set this task’s **Email field key** to your field’s key.
2. Create a custom webhook and select it in the form’s **Submission settings**. Enter its event topic in this task, and choose your published form in **Form**.
3. Enable the task, publish the form, and use **Add to cart page** on the Theme tab. In the theme editor, choose the form in the Mechanic form block. The cart page must support app blocks or an Apps section; cart drawers require separate customization.
4. Leave **Shared secret** and **Mechanic webhook URL** empty for the form setup. Mechanic verifies the signed-in customer through Shopify, while the form submission uses the ordinary webhook. Guests supply their contact email; entering an email is not verification of a customer account.

The form acknowledges that the request was received. Draft order creation happens asynchronously; the task does not send an invoice or change/clear the cart. Notes include the form answers and uploaded file names, not the file contents. Use the email or Google Sheets/Drive task on the same webhook if you also want those files.

Supports 1–100 ordinary variant lines, quantities, and line item properties. Subscription and bundle items are rejected for separate review. Cart discounts, shipping rates, and displayed prices are not copied. This is a request for a quote, not a promise to preserve checkout pricing. Submitted cart data is visitor input, not proof of a previous purchase. An explicit retry after an uncertain response can create another draft order.

If you customized Mechanic’s app proxy URL in Shopify’s app settings, set the block’s advanced **Customer verification path** to that path. Verification failure prevents submission; it does not silently switch a signed-in customer to a guest.

### Existing custom cart button

Leave **Form** empty and fill in **Shared secret** and **Mechanic webhook URL**. The existing `cart`, `customerId`, and `customerIdSignature` payload remains supported. Customer IDs are linked only when the shared-secret signature matches.

**When updating an older installed task:** preserve your shared secret and webhook URL, then put them into the same-named fields after updating. Those two option keys no longer have the `__required` suffix because the form setup does not need them. The webhook event topic key is unchanged. Keep your existing theme button and its matching secret.

### Custom button installation

1.  Create a Mechanic webhook ([learn how](https://learn.mechanic.dev/platform/webhooks)), and update this task's options to reflect the webhook's configuration. Use whatever event topic you like - "user/carts/draft_order", for example. :)
2.  In an appropriate place in your cart template, add a button to send the cart data to Mechanic. Use the following code to get started:

    ```
    <input
      type="button"
      id="mechanic_cart_submit"
      value="Send to Mechanic"
      data-cart="{{ cart | json | escape }}"
      data-customer-id="{{ customer.id | json | escape }}"
      data-customer-id-signature="{{ customer.id | hmac_sha256: "secret!" | json | escape }}"
    >
    ```

    Note the `"secret!"` - this must match the "Shared secret" option you choose in the task's configuration. It can be any value you like, as long as it's exactly equal between your task configuration and your theme code.
3.  Adjust to taste. :) The code in the task script and in the online storefront JavaScript are meant to be a beginning point, as you build out the experience you're looking for. If you have any questions about the Mechanic side of this, get in touch!

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/create-a-draft-order-from-the-cart), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/create-a-draft-order-from-the-cart.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
