# Email customers when tagged

* [task.json](../../tasks/email-customers-when-tagged.json) (for import/export)
* [Task script](./script.liquid)

Automatically send out an email to your customers when a tag is added to their account. Useful for sending approval emails, welcome emails if the customer was created with a certain tag, or any other emails related to an update to the customer's status. The most common use of this task is to send out emails to customers when their accounts are approved, but you can use this task to email customers any kind of alert you like, triggered by a simple tag. For example, some themes include an email subscription form that creates a customer record, pre-tagged with "email subscribe", or something to that effect.

## Default options

```json
{
  "tag_to_watch_for__required": "approved",
  "ignore_tag_case__boolean": true,
  "email_subject__required": "Your account has been approved!",
  "email_body__required_multiline": "Hi {{ customer.first_name | default: \"there\" }},\n\nYour account for {{ shop.name }} has been approved! Thanks for registering, and we'll see you soon.\n\nThanks,\nThe team at {{ shop.name }}",
  "autotag_customers_after_emailing__boolean": null
}
```

## Subscriptions

```liquid
shopify/customers/create
shopify/customers/update
mechanic/user/trigger
```

## Documentation

Automatically send out an email to your customers when a tag is added to their account. Useful for sending approval emails, welcome emails if the customer was created with a certain tag, or any other emails related to an update to the customer's status. The most common use of this task is to send out emails to customers when their accounts are approved, but you can use this task to email customers any kind of alert you like, triggered by a simple tag. For example, some themes include an email subscription form that creates a customer record, pre-tagged with "email subscribe", or something to that effect.

**Important note:** After saving this task for the first time (and every time you change the tag to watch for), click the "Run task" button. Mechanic will then scan your customers to find those who _already_ have the desired tag, and will make a note of them, so as to not email them in the future. (We require this to avoid suddenly sending a flood of emails to customers that were tagged before the Mechanic task was created.)

Enable the "Autotag customers after emailing" option to have Mechanic add "YOURTAGHERE-email-sent" to the customer's tags, when their email is sent out.
