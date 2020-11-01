# Delete variants having a metafield date that has passed

* [task.json](../../tasks/delete-variants-having-a-metafield-date-that-has-passed.json) (for import/export)
* [Task script](./script.liquid)

Do you sell tickets to recurring events? Do you use a new product variant for each one? Use this task to regularly scan your catalog for product variants that have a date metafield, and to delete variants when their date has passed.

## Default options

```json
{
  "date_metafield_namespace__required": null,
  "date_metafield_key__required": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/daily
```

## Documentation

Do you sell tickets to recurring events? Do you use a new product variant for each one? Use this task to regularly scan your catalog for product variants that have a date metafield, and to delete variants when their date has passed.

Run this task manually to immediately scan your product catalog for outdated variants, and delete them. This task will also run nightly, at midnight in your store's timezone.
