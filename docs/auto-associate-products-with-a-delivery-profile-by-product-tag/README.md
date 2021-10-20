# Auto-associate products with a delivery profile, by product tag

Tags: Delivery, Products, Tag

Use this task to automatically add products, as they're tagged, to a specific delivery profile. Untag products to remove them from the configured profile.

* View in the task library: [usemechanic.com/task/auto-associate-products-with-a-delivery-profile-by-product-tag](https://usemechanic.com/task/auto-associate-products-with-a-delivery-profile-by-product-tag)
* Task JSON, for direct import: [task.json](../../tasks/auto-associate-products-with-a-delivery-profile-by-product-tag.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "delivery_profile_id__required_number": "1234567890",
  "required_product_tag__required": "special"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/products/create
shopify/products/update
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to automatically add products, as they're tagged, to a specific delivery profile. Untag products to remove them from the configured profile.

Configure this task using a product tag to watch for, and a delivery profile ID. Find the delivery profile ID by navigating to the "Shipping and delivery" section of your Shopify admin area, and clicking on the "Manage rates" link of the delivery profile you want to use. The delivery profile ID is the series of numbers at the very end of the URL – if the URL is example.myshopify.com/admin/settings/shipping/profiles/12345, then the delivery profile ID is 123545.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-associate-products-with-a-delivery-profile-by-product-tag), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-associate-products-with-a-delivery-profile-by-product-tag.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
