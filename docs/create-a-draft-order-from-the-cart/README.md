# Create a draft order from the cart

Tags: Draft Orders, Cart

Use this task as a starting point, for allowing visitors to submit their carts to be transformed into draft orders, associated with their customer account. Installing and customizing this task requires some level of comfort with Liquid, HTML, and JavaScript.

* View in the task library: [usemechanic.com/task/create-a-draft-order-from-the-cart](https://usemechanic.com/task/create-a-draft-order-from-the-cart)
* Task JSON, for direct import: [task.json](../../tasks/create-a-draft-order-from-the-cart.json)
* Preview task code:
  * [script.liquid](./script.liquid)
  * [online_store_javascript.js.liquid](./online_store_javascript.js.liquid)

## Default options

```json
{
  "shared_secret__required": null,
  "mechanic_webhook_event_topic__required": null,
  "mechanic_webhook_url__required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
{{ options.mechanic_webhook_event_topic__required }}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task as a starting point, for allowing visitors to submit their carts to be transformed into draft orders, associated with their customer account. Installing and customizing this task requires some level of comfort with Liquid, HTML, and JavaScript.

### Installation

1.  Create a Mechanic webhook ([learn how](https://help.usemechanic.com/en/articles/2637727-getting-started-with-webhooks)), and update this task's options to reflect the webhook's configuration. Use whatever event topic you like - "user/carts/draft_order", for example. :)
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

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/create-a-draft-order-from-the-cart), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/create-a-draft-order-from-the-cart.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
