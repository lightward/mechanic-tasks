# Auto-remove a product tag x days after it's added

* [Task script](./script.liquid)

Use this this task to monitor for the addition of a new product tag, and to schedule the product to be untagged some number of days later. Useful for temporarily adding a product to a collection, or qualifying the product for some other temporary functionality.

## Default options

```json
{
  "tag_to_monitor__required": null,
  "days_to_wait_before_untagging__number_required": null
}
```

## Subscriptions

```liquid
shopify/products/create
shopify/products/update
user/task/untag_product
```

## Documentation

This task monitors new and updated products, watching for the configured product tag.

As soon as that tag is detected, the task will _add_ a second tag, indicating that the product is scheduled to be untagged. (For example, if the task is configured to watch for the tag "Approved", the task will _add_ the tag "Approved - will be auto-removed by Mechanic".) The task will then schedule a followup event for the future, according to the configured number of days to wait. At that time, the task will remove both tags.

Important note: To _prevent_ the task from untagging the product later, manually remove the task's additional tag (i.e. the "will be auto-removed by Mechanic" tag). If the additional tag is found missing, the task will leave the tag in place instead of auto-removing it.