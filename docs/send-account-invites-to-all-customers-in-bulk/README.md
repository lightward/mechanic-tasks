# Send account invites to all customers in bulk

* [task.json](../../tasks/send-account-invites-to-all-customers-in-bulk.json) (for import/export)
* [Task script](./script.liquid)

Use this task to send out account invitations to all the customers you already have on file, with the push of a button. Optionally, filter by customer tag.

## Default options

```json
{
  "only_invite_customers_with_this_tag": null,
  "custom_subject": null,
  "custom_message__multiline": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
```

## Documentation

Use this task to send out account invitations to all the customers you already have on file, with the push of a button. Optionally, filter by customer tag.

This task sends the same Shopify-powered emails that are used when sending individual customer invitations ([see Shopify's documentation](https://help.shopify.com/en/manual/customers/customer-accounts#individual-invites)), and uses the same Shopify email template. A custom subject and message are not required, but will be included when specified.
