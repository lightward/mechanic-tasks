# Remove a customer tag when another tag is added

* [task.json](../../tasks/remove-a-customer-tag-when-another-tag-is-added.json) (for import/export)
* [Task script](./script.liquid)

Does exactly as it says. :)

## Default options

```json
{
  "customer_tag_to_watch_for__required": null,
  "customer_tag_to_remove__required": null,
  "ignore_tag_case__boolean": true
}
```

## Subscriptions

```liquid
shopify/customers/update
```

## Documentation

Does exactly as it says. :)
