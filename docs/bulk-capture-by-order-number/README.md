# Bulk capture orders by order number

* [task.json](../../tasks/bulk-capture-by-order-number.json) (for import/export)
* [Task script](./script.liquid)

The merchant who created this task uses another app for validating orders in bulk, resulting in a list of order numbers that should be captured. This task prompts the merchant for a list of order numbers, which Mechanic then captures one by one.

## Subscriptions

```liquid
mechanic/user/text
```

## Documentation

The merchant who created this task uses another app for validating orders in bulk, resulting in a list of order numbers that should be captured. This task prompts the merchant for a list of order numbers, which Mechanic then captures one by one.
