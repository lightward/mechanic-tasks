# Send an email to all customers

* [task.json](../../tasks/send-an-email-to-all-customers.json) (for import/export)
* [Task script](./script.liquid)

Use this task to easily contact all of your customers at once, optionally filtering by customer tag. Important: This task can only be used in a transactional context - it cannot be used be used for marketing emails, or any type of message that would require an unsubscribe link.

## Default options

```json
{
  "only_send_to_customers_having_this_tag": null,
  "email_subject__required": null,
  "email_body__required_multiline": null,
  "test_mode__boolean": true
}
```

## Subscriptions

```liquid
mechanic/user/trigger
```

## Documentation

Use this task to easily contact all of your customers at once, optionally filtering by customer tag. Important: This task can only be used in a transactional context - it cannot be used be used for marketing emails, or any type of message that would require an unsubscribe link.

This task will send your preconfigured email to all of your customers, optionally filtering by preconfigured tag. Make sure to double-check your task configuration before sending! Use test mode to receive a list of customers who will receive your email, before running without it.

**Important: This task can only be used in a transactional context - it cannot be used be used for marketing emails, or any type of message that would require an unsubscribe link.** [Read more: What kind of email can I send with Mechanic?](https://help.usemechanic.com/en/articles/3140336-what-kind-of-email-can-i-send-with-mechanic)
