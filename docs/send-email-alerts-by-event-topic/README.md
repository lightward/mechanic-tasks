# Send email alerts by event topic

This task allows you to receive an email alert for any event topic supported by Mechanic. Configure the task with a list of email addresses to notify, an email subject, and one or more event topics, each paired with an email body that supports liquid output tags for the main object of each event (e.g. *shopify/products/create* can use attributes like `{{ product.id }}` or `{{ product.title }}`)

* View in the task library: [usemechanic.com/task/send-email-alerts-by-event-topic](https://usemechanic.com/task/send-email-alerts-by-event-topic)
* Task JSON, for direct import: [task.json](../../tasks/send-email-alerts-by-event-topic.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "emails_to_notify__array_required": null,
  "general_email_subject__required": "ALERT",
  "append_event_topic_to_email_subject__boolean": true,
  "event_topics_and_email_bodies__keyval_multiline_required": {
    "shopify/products/create": "Hi,\n\nProduct {{ product.id }} was created\n\nView the details in Shopify:\nOBJECT_LINK",
    "shopify/customers/create": "Hi\n\nCustomer {{ customer.id }} was created\n\nView the details in Shopify:\nOBJECT_LINK"
  }
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
{{ options.event_topics_and_email_bodies__keyval_multiline_required | keys | join: newline }}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task allows you to receive an email alert for any event topic supported by Mechanic. Configure the task with a list of email addresses to notify, an email subject, and one or more event topics, each paired with an email body that supports liquid output tags for the main object of each event (e.g. *shopify/products/create* can use attributes like `{{ product.id }}` or `{{ product.title }}`)

The task comes preloaded with the customers and products create event topics, along with sample email bodies. Configure to taste :) The full list of supported event topics can be found [here](https://docs.usemechanic.com/article/416-all-event-topics).

Note:
- The task will replace the __OBJECT_LINK__ string within the email body if present (and where it makes sense to do so) with an admin link to the Shopify object related to the event topic.
- Some event topics, like *shopify/products/update* and *shopify/inventory_levels/update*, can generate **a lot** of emails, so they should be used with caution.
- When using the *shopify/orders/edited* event topic, the original order can be referenced using `{{ order_edit.order }}`.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/send-email-alerts-by-event-topic), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-email-alerts-by-event-topic.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
