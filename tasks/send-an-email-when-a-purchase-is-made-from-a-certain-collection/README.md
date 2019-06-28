# Send an email when a purchase is made from a certain collection

* [Task script](./script.liquid)

This task will monitor incoming orders for any products that are included in the collection you choose.

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

This task will monitor incoming orders for any products that are included in the collection you choose. [Learn where to find the collection ID.](https://help.usemechanic.com/articles/2946120-how-do-i-find-an-id-for-a-product-collection-order-or-something-else)

Please note: This task _does not_ determine what collection the customer may have been browsing when they added the product to the cart. This task simply checks to see which collections contain each purchased product, looking for a match with the collection you choose.