# Manage tagging for a time-limited membership product

Tags: Membership, Products, Tag, Time-Limited

Use this task to automatically tag customers when they purchase specific a membership product, and then untag them after a certain amount of time has passed! (Optionally, this task can also automatically untag the customer if/when their membership order is cancelled.)

* View in the task library: [usemechanic.com/task/manage-tagging-for-a-time-limited-membership-product](https://usemechanic.com/task/manage-tagging-for-a-time-limited-membership-product)
* Task JSON, for direct import: [task.json](../../tasks/manage-tagging-for-a-time-limited-membership-product.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "membership_product_title__required": "1 month membership",
  "membership_tag__required": "member",
  "days_to_wait_before_untagging__number_required": 30,
  "remove_tag_immediately_for_cancelled_orders__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/paid
{% if options.remove_tag_immediately_for_cancelled_orders__boolean %}
  shopify/orders/updated
{% endif %}
user/memberships/expire
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to automatically tag customers when they purchase specific a membership product, and then untag them after a certain amount of time has passed! (Optionally, this task can also automatically untag the customer if/when their membership order is cancelled.)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/manage-tagging-for-a-time-limited-membership-product), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/manage-tagging-for-a-time-limited-membership-product.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
