# Delete draft orders

* [Task script](./script.liquid)

Use this task to clear out your draft orders, on demand. Filter by draft order status (open, invoice sent, closed), or by draft order tags.

## Default options

```json
{
  "include_open_draft_orders__boolean": false,
  "include_invoice_sent_draft_orders__boolean": false,
  "include_closed_draft_orders__boolean": false,
  "only_delete_draft_orders_having_this_tag": null,
  "ignore_draft_orders_having_this_tag": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
```

## Documentation

**Important: Be sure to configure this task before running!** You may filter by draft order status (open, invoice sent, or closed), and by draft order tag (to selectively delete, or to selectively ignore).