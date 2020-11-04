# Send an email alert if a new collection has no orders after x days

* [task.json](../../tasks/send-an-email-alert-if-a-new-collection-has-no-orders-after-x-days.json) (for import/export)
* [Task script](./script.liquid)

This task watches for newly-created collections, waits a configurable number of days, and then sends a staff email if no orders have been placed for products that are in the new collection.

## Default options

```json
{
  "email_recipient__required_email": "",
  "email_subject__required": "The new collection \"{{ collection.title }}\" has no orders yet",
  "email_body__required_multiline": "Hello,\n\nThe collection \"<a href=\"https://{{ shop.domain }}/collections/{{ collection.handle }}\">{{ collection.title }}</a>\" was created on {{ collection.created_at | date: \"%Y-%m-%d\" }}, and no orders have yet been made for products in this collection.\n\nThanks,\nMechanic, for {{ shop.name }}",
  "days_to_wait_before_checking__number_required": "2"
}
```

## Subscriptions

```liquid
shopify/collections/create+{{ options.days_to_wait_before_checking__number_required | default: 2 }}.days
```

## Documentation

This task watches for newly-created collections, waits a configurable number of days, and then sends a staff email if no orders have been placed for products that are in the new collection.
