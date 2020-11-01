# Send an email when a purchase is made from a certain collection

* [task.json](../../tasks/send-an-email-when-a-purchase-is-made-from-a-certain-collection.json) (for import/export)
* [Task script](./script.liquid)

null

## Default options

```json
{
  "required_collection_id__number_required": "",
  "email_address__required": "",
  "email_subject__required": "New purchase for LINE_ITEM_TITLES, from COLLECTION_TITLE",
  "email_body__multiline_required": "Hello,\n\nOrder {{ order.name }} includes LINE_ITEM_TITLES, from COLLECTION_TITLE.\n\n<a href=\"https://{{ shop.domain }}/admin/orders/{{ order.id }}\">Manage this order in Shopify</a>\n\nThanks,\n-Mechanic, for {{ shop.name }}"
}
```

## Subscriptions

```liquid
shopify/orders/paid
```

## Documentation

null
