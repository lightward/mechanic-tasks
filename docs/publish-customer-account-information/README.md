# Publish customer account information

Tags: Customers

Publish a personal message, useful details, and a next-step link in a customer’s account, or hide the card when it is no longer needed.

* View in the task library: [tasks.mechanic.dev/publish-customer-account-information](https://tasks.mechanic.dev/publish-customer-account-information)
* Task JSON, for direct import: [task.json](../../tasks/publish-customer-account-information.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "card__customeraccountcard_required": null,
  "status__userform": null,
  "message__multiline_userform": null,
  "details__keyval_userform": {},
  "link_label__userform": null,
  "link_url__userform": null,
  "hide_card__boolean_userform": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/customer
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Publish a personal message, useful details, and a next-step link in a customer’s account, or hide the card when it is no longer needed.

Create the **Account information** card template in Mechanic’s Extensions area, publish it, and select it in this task’s **Card** picker. Save and enable the task, approve its requested permissions, then run it once from Mechanic to create the private JSON metafield definition. Place the card in a Profile/Orders block or add it to your dedicated customer page. It stays hidden for each customer until a task saves information for them.

Open a customer in Shopify and run this task through Mechanic’s customer action. Enter a **Status**, optional **Message**, and up to eight **Details** as label/value pairs. Add both **Link label** and **Link URL** for an optional HTTPS link, such as service instructions or membership benefits. To retire a prompt, select **Hide card**; the other fields are ignored. Run it again with Hide card off and new content to show it again. Each run replaces this card’s customer-facing content for that customer only.

Use one publishing task per card to avoid competing updates. This is a starting point for your own automation. A task can compute the same saved output from tags, customer metafields, order activity, or an integration; customize its event subscriptions and Liquid to apply your business rules. Viewing or refreshing the account never runs a task. For automatic tag-based membership information, use **Publish customer membership information** instead.

All supplied text, details, and the link are intended for this customer. Text is plain text, not HTML. Use status up to 200 characters, message up to 2000, detail labels up to 100, detail values up to 500, and link labels up to 100. Link URLs must be complete HTTPS URLs, up to 2048 characters, without embedded credentials, spaces, or backslashes. A link does not grant access to its destination: private files and services need their own authorization. Do not put secrets or staff notes in these display fields.

Saved JSON lives in the customer’s `mechanic_customer_accounts.extension_<card ID without hyphens>` metafield. Its definition must keep Storefront and Customer Account API access disabled. Mechanic verifies the signed-in customer and projects only supported display fields. This task refuses to overwrite a request record or information for a different customer/card. Compare-and-set rejects competing writes; review conflicts and rerun. Identical content produces no write. No email, customer-profile edit, membership grant, or storewide backfill is performed.


## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/publish-customer-account-information), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/publish-customer-account-information.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
