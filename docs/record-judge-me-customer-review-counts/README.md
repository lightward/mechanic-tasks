# Record Judge.me customer review counts

Tags: Customers, Judge.me, Reviews

Using Judge.me for reviews? Use this task to keep a counter for each customer's reviews, stored as a metafield on the customer record. And, auto-tag customers as they reach different levels of review counts - useful for granting discounts or special access to repeat reviewers.

* View in the task library: [usemechanic.com/task/record-judge-me-customer-review-counts](https://usemechanic.com/task/record-judge-me-customer-review-counts)
* Task JSON, for direct import: [task.json](../../tasks/record-judge-me-customer-review-counts.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "metafield_namespace_required": null,
  "metafield_key__required": null,
  "tags_to_apply_for_review_counts__keyval": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
judgeme/review/created
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Using Judge.me for reviews? Use this task to keep a counter for each customer's reviews, stored as a metafield on the customer record. And, auto-tag customers as they reach different levels of review counts - useful for granting discounts or special access to repeat reviewers.

After installing this task, activate Judge.me's Mechanic integration: Settings > Integrations > Admin Backend > Mechanic.

Notes:

* This task will start counting reviews for each customer, as each review comes in. It will not scan reviews that existed beforehand.
* Reviews will only be attributed to a customer account if (a) the customer is already registered, and (b) the reviewer submits the correct customer email address in the review form.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/record-judge-me-customer-review-counts), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/record-judge-me-customer-review-counts.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
