# Publish customer membership information

Tags: Customers

Show customers their membership status and benefits using a Customer accounts information card.

* View in the task library: [tasks.mechanic.dev/publish-customer-membership-information](https://tasks.mechanic.dev/publish-customer-membership-information)
* Task JSON, for direct import: [task.json](../../tasks/publish-customer-membership-information.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "card__customeraccountcard_required": null,
  "membership_tag__required": "member",
  "active_status__required": "Active member",
  "active_message__multiline": "Your membership is active. Contact us if you have questions about your benefits.",
  "inactive_status__required": "No active membership",
  "inactive_message__multiline": "Contact us to learn more about membership."
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/customers/create
shopify/customers/update
mechanic/user/customer
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Show customers their membership status and benefits using a Customer accounts information card.

Create the **Membership information** template in Mechanic’s Extensions area. Publish the card and select it in this task’s **Card** picker. Set the membership tag and the customer-facing text for members and nonmembers. Save this task, approve its requested permissions, and enable it. Then run it manually once from Mechanic to create its private JSON customer metafield definition. Add the card to your customer page or Profile/Orders account block.

This task uses your existing membership tag as the source of truth. It does not sell, renew, expire, or grant membership. An existing task such as **Manage tagging for a time-limited membership product** can manage that tag. This task reads the current tags from Shopify when a customer is created or updated, then saves only the status and message intended for that customer. Edit it to incorporate your own membership rules or a task-maintained renewal date.

For an existing customer, open that customer in Shopify and run this task through Mechanic’s customer action. Updates to task options apply the next time the task runs for a customer; changing a message does not backfill every customer automatically. The card does not promise an active membership before this task saves one.

Saved data lives in the customer’s `mechanic_customer_accounts.extension_<card ID without hyphens>` JSON metafield. Only the authenticated customer’s public-facing fields are displayed by Mechanic. Keep its Storefront and Customer Account API access disabled. An unchanged result generates no write, preventing a loop from the task’s own update. Compare-and-set rejects competing writes so a conflict can be reviewed and rerun.

Viewing or refreshing the card only reads saved information. All membership business logic stays in your tasks.


## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/publish-customer-membership-information), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/publish-customer-membership-information.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
