# Auto-remove a customer tag x days after it's added

* [Task script](./script.liquid)

Use this this task to monitor for the addition of a new customer tag, and to schedule the customer to be untagged some number of days later. Useful for granting temporary access to discounts, or other resources.

## Default options

```json
{
  "tag_to_monitor__required": null,
  "days_to_wait_before_untagging__number_required": null
}
```

## Subscriptions

```liquid
shopify/customers/create
shopify/customers/update
user/task/untag_customer
```

## Documentation

This task monitors new and updated customers, watching for the configured customer tag.

As soon as that tag is detected, the task will _add_ a second tag, indicating that the customer is scheduled to be untagged. (For example, if the task is configured to watch for the tag "Approved", the task will _add_ the tag "Approved - will be auto-removed by Mechanic".) The task will then schedule a followup event for the future, according to the configured number of days to wait. At that time, the task will remove both tags.

Important note: To _prevent_ the task from untagging the customer later, manually remove the task's additional tag (i.e. the "will be auto-removed by Mechanic" tag). If the additional tag is found missing, the task will leave the tag in place instead of auto-removing it.