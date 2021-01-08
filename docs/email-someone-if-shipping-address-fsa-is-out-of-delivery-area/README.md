# Email Someone if Shipping Address FSA is out of delivery area

This checks an order and sends an email if the shipping address FSA isn't included in the FSA list.

* View in the task library: [usemechanic.com/task/email-someone-if-shipping-address-fsa-is-out-of-delivery-area](https://usemechanic.com/task/email-someone-if-shipping-address-fsa-is-out-of-delivery-area)
* Task JSON, for direct import: [task.json](../../tasks/email-someone-if-shipping-address-fsa-is-out-of-delivery-area.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "allowed_fsa__required": "",
  "email_recipients__required": "",
  "email_subject__required": "Order {{ order.name }} may be out of delivery zone",
  "email_body__required_multiline": "Hi team,\n\nPlease see details for order {{ order.name }}:\n\nhttps://{{ shop.myshopify_domain }}/admin/orders/{{ order.id }}\n\nIt looks like this might be out of our delivery zone!\n\nThanks,\n- Mechanic, for {{ shop.name }}"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This checks an order and sends an email if the shipping address FSA isn't included in the FSA list.

The FSA list must be the first three characters of the postal code. The postal codes must be seperated by commas and no spaces. The postal codes can be entered in any order.

The log displays orders whose FSA was was found in the available FSA list.

It also displays the available FSA in json format to eassily catch if the availability list was input incorrectly.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/email-someone-if-shipping-address-fsa-is-out-of-delivery-area), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-someone-if-shipping-address-fsa-is-out-of-delivery-area.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
