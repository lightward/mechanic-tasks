# Email all customers who made a purchase

* [task.json](../../tasks/email-customers-who-purchased-product.json) (for import/export)
* [Task script](./script.liquid)

Need to reach customers who made a specific purchase? This task scans your order history, looking for orders that match the conditions you specify. For each qualifying order, the task sends an email to the customer, optionally linking to the product(s) ordered.

## Default options

```json
{
  "search_query_for_orders": "financial_status:paid processed_at:>=2019-10-01",
  "product_ids_to_look_for__number_array": null,
  "variant_ids_to_look_for__number_array": null,
  "email_subject__required": "A note about ORDER_NAME",
  "email_body__required_multiline": "Hello,\n\nThanks for ordering PRODUCT_TITLES_WITH_LINKS. We appreciate it. :)\n\nCheers,\n{{ shop.name }}",
  "add_this_tag_to_matching_orders": null,
  "test_mode__boolean": true,
  "i_certify_that_messages_sent_here_are_related_to_customer_activity__boolean": false
}
```

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

## Documentation

Need to reach customers who made a specific purchase? This task scans your order history, looking for orders that match the conditions you specify. For each qualifying order, the task sends an email to the customer, optionally linking to the product(s) ordered.

Configure "Search query for orders" with the same search query you might use in the Shopify admin area. For example:

* Use `processed_at:>=2019-01-01 processed_at:<2020-01-01` for every order in 2019
* Use `financial_status:paid` for all paid orders
* Use `fulfillment_status:unshipped` for all unshipped orders

Configure this task with product IDs and/or variant IDs, to have the task look for orders that contain any matching products and/or variants. [Learn how to find these IDs.](https://help.usemechanic.com/en/articles/2946120-how-do-i-find-an-id-for-a-product-collection-order-or-something-else)

Use `ORDER_NAME` in the email subject or body, to insert the name of the order (e.g. "#1234"). Use `PRODUCT_TITLES` or `PRODUCT_TITLES_WITH_LINKS` to list all products in the order.

Use "Test mode" to have Mechanic show you what emails it _would_ send, if test mode were disabled.

This task requires you to certify that the messages sent are directly related to customer activity. Our email provider, Postmark, does not allow bulk messaging. [Read more about their policy.](https://postmarkapp.com/blog/bulk-vs-transactional)
