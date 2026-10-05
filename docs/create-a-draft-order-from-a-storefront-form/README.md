# Create a draft order from a storefront form

Tags: Cart, Draft Orders, Storefront Forms

Create a Shopify draft order from the cart submitted with a Mechanic storefront form. Signed-in customers are linked to their verified Shopify customer account. Shopify supplies current variant prices; review the draft before sending an invoice.

* View in the task library: [tasks.mechanic.dev/create-a-draft-order-from-a-storefront-form](https://tasks.mechanic.dev/create-a-draft-order-from-a-storefront-form)
* Task JSON, for direct import: [task.json](../../tasks/create-a-draft-order-from-a-storefront-form.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "mechanic_webhook_event_topic__required": null,
  "form__storefrontform_required": "",
  "email_field_key": "email"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{{ options.mechanic_webhook_event_topic__required }}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Create a Shopify draft order from the cart submitted with a Mechanic storefront form. Signed-in customers are linked to their verified Shopify customer account. Shopify supplies current variant prices; review the draft before sending an invoice.

### Guided setup

In **Forms**, use **Request a quote from your cart**. Review the questions and draft-order outcome, then choose **Continue to placement**. Choose **Publish form** to connect the required webhook and this task, enable it, and publish when access is approved. If Shopify access is requested, approve it, return, and click Publish again. Add a Mechanic form block to your cart page in the theme editor, select the form, and save the theme.

Guided setup reuses the form you started with and configures the webhook topic, form filter, and email field for you. Do not install another task or create a second webhook. Reopening **Setup** keeps the same connection; **Task settings** edits its configuration. The manual path below remains available for custom setups.

### Manual setup

1. In **Forms**, use **Request a quote from your cart**. The template includes the current cart when submitted and opens from a button. Keep the email field, or set this task’s **Email field key** to your field’s key.
2. Create a custom webhook and select it in the form’s **Submission settings**, then save and publish the form.
3. Enter that webhook’s event topic in this task and choose the published form in **Form**. Save and enable the task, completing Mechanic’s normal permission update if requested.
4. Use **Add to cart page** on the form’s Theme tab. In the theme editor, choose the form in the Mechanic form block. The cart page must support app blocks or an Apps section; cart drawers require separate customization.

Shopify signs the customer context when rendering the form, and this task verifies it before linking the customer. Form submissions use the ordinary webhook. Guests supply their contact email; entering an email is not verification of a customer account.

The form acknowledges that the request was received. Draft order creation happens asynchronously; the task does not send an invoice or change/clear the cart. Notes include the form answers and uploaded file names, not the file contents. Use the email or Google Sheets/Drive task on the same webhook if you also want those files.

Supports 1–100 ordinary variant lines, quantities, and line item properties. Subscription and bundle items are rejected for separate review. Cart discounts, shipping rates, and displayed prices are not copied. Submitted cart data is visitor input, not proof of a previous purchase. An explicit retry after an uncertain response can create another draft order.

Form signing is configured automatically when you publish. A stale page refreshes its signed customer context through Shopify. If the task cannot verify that context, it stops without creating a draft order; it does not silently switch a signed-in customer to a guest.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/create-a-draft-order-from-a-storefront-form), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/create-a-draft-order-from-a-storefront-form.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
