# Send new customer signups to IFTTT

Tags: Customers, IFTTT

Send yourself a text message, or blink your lights, or do whatever you like! This task is an example, more than anything, of what you can do by connecting Mechanic and IFTTT. Follow our guide (in the task documentation) to learn how to set up text message alerts for customer signups, and then customize any and every part of this task to your liking.

* View in the task library: [usemechanic.com/task/send-new-customer-signups-to-ifttt](https://usemechanic.com/task/send-new-customer-signups-to-ifttt)
* Task JSON, for direct import: [task.json](../../tasks/send-new-customer-signups-to-ifttt.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "ifttt_event__required": "shopify_customer_created",
  "value1__required": "{{ customer.email }}",
  "ifttt_key__required": null,
  "value2": null,
  "value3": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/customers/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Send yourself a text message, or blink your lights, or do whatever you like! This task is an example, more than anything, of what you can do by connecting Mechanic and IFTTT. Follow our guide (in the task documentation) to learn how to set up text message alerts for customer signups, and then customize any and every part of this task to your liking.

To get started with this task, follow our complete guide: [Triggering IFTTT applets](https://help.usemechanic.com/tutorials/triggering-ifttt-applets).

If you want to get started more directly, just fill in your IFTTT key, available in your [IFTTT Maker webhook settings](https://ifttt.com/services/maker_webhooks/settings).

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/send-new-customer-signups-to-ifttt), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-new-customer-signups-to-ifttt.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
