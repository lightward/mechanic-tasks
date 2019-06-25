# Export a CSV of order shipping addresses

* [Task script](./script.liquid)

Useful for quickly preparing labels, or planning a drop-off route.

## Default options

```json
{
  "orders_search_query": "fulfillment_status:unshipped",
  "include_name_in_formatted_address__boolean": null,
  "include_company_in_formatted_address__boolean": null,
  "csv_email_recipient__email_required": ""
}
```

## Subscriptions

```liquid
mechanic/user/trigger
```

## Documentation

Use the "Run task" button to scan all orders matching your search query, exporting their shipping addresses as a CSV. The resulting file will be emailed to the address you specify.