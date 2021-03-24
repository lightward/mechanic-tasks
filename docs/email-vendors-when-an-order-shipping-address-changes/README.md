# Email vendors when an order shipping address changes

Tags: Email, Vendor, Shipping, Address

Keep customers happy by making sure your vendors have up-to-date shipping information. This keeps your vendors happy, too!

* View in the task library: [usemechanic.com/task/email-vendors-when-an-order-shipping-address-changes](https://usemechanic.com/task/email-vendors-when-an-order-shipping-address-changes)
* Task JSON, for direct import: [task.json](../../tasks/email-vendors-when-an-order-shipping-address-changes.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "vendors_and_email_addresses__required_keyval": {
    "Nike": "nike@example.com",
    "Apple": "apple@example.com"
  },
  "email_body__required_multiline": "Hello,\n\nOrder {{ order.name }} has a new shipping address:\n\nName: {{ order.shipping_address.first_name }} {{ order.shipping_address.last_name }}\nCompany: {{ order.shipping_address.company }}\nPhone: {{ order.shipping_address.phone }}\n\n{{ order.shipping_address.address1 }}\n{{ order.shipping_address.address2 }}\n{{ order.shipping_address.city }}, {{ order.shipping_address.province_code }} {{ order.shipping_address.zip }}\n{{ order.shipping_address.country_code }}\n\nThanks,\n\n{{ shop.name }}",
  "email_subject__required": "{{ shop.name }}: Shipping address update for {{ order.name }}"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
shopify/orders/updated
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Keep customers happy by making sure your vendors have up-to-date shipping information. This keeps your vendors happy, too!

**When an order is created,** this task will store a temporary copy of the order's shipping address.

**When an order is updated,** this task will check for a stored copy of the shipping address. If the stored address is different than the updated order address, this task will send an email to any vendors responsible for line items in the order, as long as the vendor email is configured in this task.

**Configure this task** with a list of vendor names on the left, and email addresses on the right. *Vendor names are case sensitive!*

---

**Please note: The task can only send emails for orders that it gets to see created initially, or for orders that have two updates.**

This is because Shopify doesn't tell Mechanic _what_ changed about an order, only that it's changed _somehow_. Therefore, Mechanic needs to see what the order shipping address is at least once, so as to compare it to incoming updates.

This task will start sending emails for orders that are created after the task was turned on. To see if it works right away, just try changing some simple about an order (like the order note), waiting a minute, and then try changing the order address. This will give Mechanic a chance to see what the order address was originally, allowing it to be able to determine that the address has changed.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/email-vendors-when-an-order-shipping-address-changes), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-vendors-when-an-order-shipping-address-changes.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
