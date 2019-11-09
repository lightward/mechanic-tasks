# Create a draft order from the cart

* [Task script](./script.liquid)

* [Online store javascript](./online_store_javascript.js.liquid)

Use this task as a starting point, for allowing visitors to submit their carts to be transformed into draft orders, associated with their customer account. Installing and customizing this task requires some level of comfort with Liquid, HTML, and JavaScript.

## Default options

```json
{
  "shared_secret__required": null,
  "mechanic_webhook_event_topic__required": null,
  "mechanic_webhook_url__required": null
}
```

## Subscriptions

```liquid
{{ options.mechanic_webhook_event_topic__required }}
```

## Documentation

### Installation

1.  Create a Mechanic webhook ([learn how](https://help.usemechanic.com/en/articles/2637727-getting-started-with-webhooks)), and update this task's options to reflect the webhook's configuration.
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

    Note the `"secret!"` - this must match the "Shared secret" option you choose in the task's configuration.
3.  Adjust to taste. :) The code in the task script and in the online storefront JavaScript are meant to be a beginning point, as you build out the experience you're looking for. If you have any questions about the Mechanic side of this, get in touch!