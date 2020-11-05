# Auto-add phone numbers to unfulfilled orders, when the customer is updated

When a customer update occurs, if the customer has a phone number on file, this task will look for unshipped or partially shipped orders that don't yet have a phone number on file, and will add the customer's phone number to those orders.

* View in the task library: [usemechanic.com/task/auto-add-phone-numbers-to-unfulfilled-orders-when-the-customer-is-updated](https://usemechanic.com/task/auto-add-phone-numbers-to-unfulfilled-orders-when-the-customer-is-updated)
* Task JSON, for direct import: [task.json](../../tasks/auto-add-phone-numbers-to-unfulfilled-orders-when-the-customer-is-updated.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
shopify/customers/update
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

When a customer update occurs, if the customer has a phone number on file, this task will look for unshipped or partially shipped orders that don't yet have a phone number on file, and will add the customer's phone number to those orders.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-add-phone-numbers-to-unfulfilled-orders-when-the-customer-is-updated), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-add-phone-numbers-to-unfulfilled-orders-when-the-customer-is-updated.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
