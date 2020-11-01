# Auto-tag customers with who have accounts

* [task.json](../../tasks/auto-tag-customers-with-who-have-accounts.json) (for import/export)
* [Task script](./script.liquid)

This task monitors customer accounts, and applies the tag of your choice to customers that have an enabled account, with a registered email address and active password. It untags customers whose accounts are disabled. This task can be run manually to tag/untag all existing customers.

## Default options

```json
{
  "customer_tag_to_apply__required": null,
  "test_mode__boolean": true
}
```

## Subscriptions

```liquid
shopify/customers/create
shopify/customers/update
mechanic/user/trigger
```

## Documentation

This task monitors customer accounts, and applies the tag of your choice to customers that have an enabled account, with a registered email address and active password. It untags customers whose accounts are disabled. This task can be run manually to tag/untag all existing customers.

This task runs automatically for individual customers, as they are created and updated. It will tag customers when they have an enabled account (i.e. have a registered email address and active password), and it will untag customers whose accounts are disabled.

Run this task manually to scan all existing customers, tagging and untagging as appropriate.

Use test mode to have this task return information about what actions it would normally take.
