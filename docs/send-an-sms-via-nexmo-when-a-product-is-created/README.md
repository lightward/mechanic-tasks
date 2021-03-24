# Send an SMS via Nexmo when a product is created

Tags: SMS, Products

This task is a demonstration of sending text messages via Nexmo. In this task, we monitor for newly-created products, and we send a text message about the product to a phone number stored in that product's metafield.

* View in the task library: [usemechanic.com/task/send-an-sms-via-nexmo-when-a-product-is-created](https://usemechanic.com/task/send-an-sms-via-nexmo-when-a-product-is-created)
* Task JSON, for direct import: [task.json](../../tasks/send-an-sms-via-nexmo-when-a-product-is-created.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "message_content__required_multiline": "{{ product.title }} is now available!\n\nhttps://{{ shop.domain }}/products/{{ product.handle }}",
  "phone_number_metafield_namespace__required": null,
  "phone_number_metafield_key__required": null,
  "nexmo_api_key__required": null,
  "nexmo_api_secret__required": null,
  "nexmo_sms_phone_number__required": null,
  "test_mode__boolean": true,
  "default_country_code__number": null,
  "minutes_to_wait_before_sending__number": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/products/create{% if options.minutes_to_wait_before_sending__number != blank %}+{{ options.minutes_to_wait_before_sending__number }}.minutes{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task is a demonstration of sending text messages via Nexmo. In this task, we monitor for newly-created products, and we send a text message about the product to a phone number stored in that product's metafield.

This task monitors for newly-created products, and sends a text message about the product to a phone number stored in that product's metafield. If there is no number stored, or the number is invalid, no message will be sent.

Notes:

* Nexmo requires all phone numbers to have a country code. If a phone number encountered appears to be an invalid international number, this task will try to add whatever value you've got in the "Default country code" option.
* Your Nexmo information (API key/secret, and SMS phone number) can be found [on the Nexmo dashboard's "Getting started" page](https://dashboard.nexmo.com/getting-started-guide)
* Use test mode to have this task report the message that it _would_ send, if test mode was not enabled

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/send-an-sms-via-nexmo-when-a-product-is-created), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-an-sms-via-nexmo-when-a-product-is-created.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
