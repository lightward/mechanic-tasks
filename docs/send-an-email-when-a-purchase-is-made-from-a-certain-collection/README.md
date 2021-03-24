# Send an email when a purchase is made from a certain collection

Tags: Email, Collections, Orders

This task will monitor incoming orders for any products that are included in the collection you choose. [Learn where to find the collection ID.](https://help.usemechanic.com/articles/2946120-how-do-i-find-an-id-for-a-product-collection-order-or-something-else)

* View in the task library: [usemechanic.com/task/send-an-email-when-a-purchase-is-made-from-a-certain-collection](https://usemechanic.com/task/send-an-email-when-a-purchase-is-made-from-a-certain-collection)
* Task JSON, for direct import: [task.json](../../tasks/send-an-email-when-a-purchase-is-made-from-a-certain-collection.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "required_collection_id__number_required": "",
  "email_address__required": "",
  "email_subject__required": "New purchase for LINE_ITEM_TITLES, from COLLECTION_TITLE",
  "email_body__multiline_required": "Hello,\n\nOrder {{ order.name }} includes LINE_ITEM_TITLES, from COLLECTION_TITLE.\n\n<a href=\"https://{{ shop.domain }}/admin/orders/{{ order.id }}\">Manage this order in Shopify</a>\n\nThanks,\n-Mechanic, for {{ shop.name }}"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/paid
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task will monitor incoming orders for any products that are included in the collection you choose. [Learn where to find the collection ID.](https://help.usemechanic.com/articles/2946120-how-do-i-find-an-id-for-a-product-collection-order-or-something-else)

Please note: This task _does not_ determine what collection the customer may have been browsing when they added the product to the cart. This task simply checks to see which collections contain each purchased product, looking for a match with the collection you choose.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/send-an-email-when-a-purchase-is-made-from-a-certain-collection), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-an-email-when-a-purchase-is-made-from-a-certain-collection.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
