# Record Judge.me customer review counts

* [task.json](../../tasks/record-judge-me-customer-review-counts.json) (for import/export)
* [Task script](./script.liquid)

Using Judge.me for reviews? Use this task to keep a counter for each customer's reviews, stored as a metafield on the customer record. And, auto-tag customers as they reach different levels of review counts - useful for granting discounts or special access to repeat reviewers.

## Default options

```json
{
  "metafield_namespace_required": null,
  "metafield_key__required": null,
  "tags_to_apply_for_review_counts__keyval": null
}
```

## Subscriptions

```liquid
judgeme/review/created
```

## Documentation

Using Judge.me for reviews? Use this task to keep a counter for each customer's reviews, stored as a metafield on the customer record. And, auto-tag customers as they reach different levels of review counts - useful for granting discounts or special access to repeat reviewers.

After installing this task, activate Judge.me's Mechanic integration: Settings > Integrations > Admin Backend > Mechanic.

Notes:

* This task will start counting reviews for each customer, as each review comes in. It will not scan reviews that existed beforehand.
* Reviews will only be attributed to a customer account if (a) the customer is already registered, and (b) the reviewer submits the correct customer email address in the review form.
