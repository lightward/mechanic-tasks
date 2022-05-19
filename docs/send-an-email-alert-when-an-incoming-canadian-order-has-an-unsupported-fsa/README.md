# Send an email alert when an incoming Canadian order has an unsupported FSA

Tags: Alert, Delivery, Email, Shipping

Useful for Canadian stores with limited shipping zones, this task inspects [the FSA (the first three characters of the postal code)](https://en.wikipedia.org/wiki/Postal_codes_in_Canada#Forward_sortation_areas) for each order's shipping address. If an FSA is found that's not on a preconfigured list, this task sends an email to the recipients of your choice.

* View in the task library: [tasks.mechanic.dev/send-an-email-alert-when-an-incoming-canadian-order-has-an-unsupported-fsa](https://tasks.mechanic.dev/send-an-email-alert-when-an-incoming-canadian-order-has-an-unsupported-fsa)
* Task JSON, for direct import: [task.json](../../tasks/send-an-email-alert-when-an-incoming-canadian-order-has-an-unsupported-fsa.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "supported_fsa_values__required_array": [
    "K1A"
  ],
  "email_recipients__required": "",
  "email_subject__required": "Order {{ order.name }} may be out of delivery zone",
  "email_body__required_multiline": "Hi team,\n\nPlease see details for order {{ order.name }}:\n\nhttps://{{ shop.myshopify_domain }}/admin/orders/{{ order.id }}\n\nIt looks like this might be out of our delivery zone!\n\nThanks,\n- Mechanic, for {{ shop.name }}"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Useful for Canadian stores with limited shipping zones, this task inspects [the FSA (the first three characters of the postal code)](https://en.wikipedia.org/wiki/Postal_codes_in_Canada#Forward_sortation_areas) for each order's shipping address. If an FSA is found that's not on a preconfigured list, this task sends an email to the recipients of your choice.

The FSA list must be comprised of FSAs in the format 'A1A', without the quotation marks. The FSAs must be separated by commas and no spaces. The FSAs can be entered in any order.

The task will log orders whose FSA was found in the available FSA list.

It also displays the available FSA list in json format to more easily catch if there were errors in inputting the availability list. 

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/send-an-email-alert-when-an-incoming-canadian-order-has-an-unsupported-fsa), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-an-email-alert-when-an-incoming-canadian-order-has-an-unsupported-fsa.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
