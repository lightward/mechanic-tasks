# Delete cancelled orders after 48 hours

* [task.json](../../tasks/delete-cancelled-orders-after-48-hours.json) (for import/export)
* [Task script](./script.liquid)

When an order is cancelled, this task waits 48 hours, and then permanently deletes the order. Simple as that! (Please note: if you only want to archive the cancelled order, not delete it, try a different task!)

## Subscriptions

```liquid
shopify/orders/updated
user/orders/delete_cancelled+48.hours
```

## Documentation

When an order is cancelled, this task waits 48 hours, and then permanently deletes the order. Simple as that! (Please note: if you only want to archive the cancelled order, not delete it, try a different task!)

When an order is cancelled, this task waits 48 hours, and then permanently deletes the order. There is no undo for deleting an order, so make sure this is what you want!
