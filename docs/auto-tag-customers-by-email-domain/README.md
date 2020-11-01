# Auto-tag customers based on email domain

* [task.json](../../tasks/auto-tag-customers-by-email-domain.json) (for import/export)
* [Task script](./script.liquid)

Useful in a million scenarios. The merchant who requested this task has discounts set up based on customer tag, and they're using this task to guarantee that qualifying customers see their discount immediately – even if they just signed up!

## Default options

```json
{
  "customer_email_domains__required_array": [
    "example.com"
  ],
  "customer_tag_to_apply__required": null
}
```

## Subscriptions

```liquid
shopify/customers/create
mechanic/user/trigger
```

## Documentation

Useful in a million scenarios. The merchant who requested this task has discounts set up based on customer tag, and they're using this task to guarantee that qualifying customers see their discount immediately – even if they just signed up!

This task runs when customers are created. Use the "Run task" button to scan all customers already registered.
