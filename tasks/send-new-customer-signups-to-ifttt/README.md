# Send new customer signups to IFTTT

* [Task script](./script.liquid)

Send yourself a text message, or blink your lights, or do whatever you like! This task is an example, more than anything, of what you can do by connecting Mechanic and IFTTT. Follow our guide (in the task documentation) to learn how to set up text message alerts for customer signups, and then customize any and every part of this task to your liking.

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

## Subscriptions

```liquid
shopify/customers/create
```

## Documentation

To get started with this task, follow our complete guide: [Triggering IFTTT applets](https://help.usemechanic.com/tutorials/triggering-ifttt-applets).

If you want to get started more directly, just fill in your IFTTT key, available in your [IFTTT Maker webhook settings](https://ifttt.com/services/maker_webhooks/settings).