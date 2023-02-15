# Auto-add bundle components to orders, post-purchase

Tags: Admin Link, Bundle, Order Editing, Orders, SKU

Use this task to automatically add product bundle components to qualifying paid orders, by configuring the task with a bundle parent SKU, unique SKUs for the bundle components, and with quantities needed from each component for each bundle parent unit. The bundle components will be added to the order at a 100% discount, and the order's subtotal will be unaffected.

* View in the task library: [tasks.mechanic.dev/auto-add-bundle-components-to-orders-post-purchase](https://tasks.mechanic.dev/auto-add-bundle-components-to-orders-post-purchase)
* Task JSON, for direct import: [task.json](../../tasks/auto-add-bundle-components-to-orders-post-purchase.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "bundle_parent_sku__required": null,
  "component_skus_and_quantities_per_bundle__keyval_number_required": null,
  "discount_message_to_display_on_each_added_component__required": null,
  "staff_note_for_the_order_edit": "Bundle components auto-added by Mechanic",
  "alert_email_recipients__array_required": null,
  "manual_mode__boolean": true
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{% if options.manual_mode__boolean %}
  mechanic/user/order
{% else %}
  shopify/orders/paid
{% endif %}
mechanic/actions/perform
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to automatically add product bundle components to qualifying paid orders, by configuring the task with a bundle parent SKU, unique SKUs for the bundle components, and with quantities needed from each component for each bundle parent unit. The bundle components will be added to the order at a 100% discount, and the order's subtotal will be unaffected.

**Usage:**

This task is initially confiured with a *"Manual mode"* option enabled. This will allow you to try out the order edits on **live** orders by sending them manually via an [admin action link](https://learn.mechanic.dev/core/shopify/admin-action-links). When you are satisfied with the outcomes, then disable this mode to have the task process new, paid orders.

**Task configuration:**
- *Bundle parent SKU* - The SKU of the variant that must appear on a line item for an order to qualify for the order edit.
- *Component SKUs and quantities per bundle* - Add **unique** component SKUs on the left-hand side of this option, and use the right-hand side to control how many units of each component SKU is required for each single bundle unit. If your bundle requires one wrench and two sprockets, for example, make sure to add "1" and "2" on the right-hand side, each number associated with the right component SKU.
- *Discount message to display on each added componnent* - This appears on the order status page and any follow on Shopify emails that includes a list of line items.
- *Staff note for the order edit* - Optional field to indicate a reason for the order edit in the order's timeline.
- *Alert email recipients* - One or more recipients that should get an email from Mechanic if any of the order editing steps fail during a task run.

**IMPORTANT:**
- If duplicate variants are found with the same component SKU during a task run, it will halt processing and not make any order edits.
- The bundle parent SKU can occur on multiple line items on an order, due to different line item attributes (e.g. gift messaging). This task will sum the quantites of each qualifying line item and use that as a multiplier when adding the bundle components.
- This task does **NOT** remove the bundle parent from the order. The bundle parent contains the original discounted price, plus any custom line item attributes that may be important for additional processes or flows.
- This task does **NOT** check the available inventory of the child components before adding them to the order. 
- This task does **NOT** sync inventory of the bundle parent and the child components. This [alternate task](https://tasks.mechanic.dev/maintain-inventory-for-a-product-bundle) is a better fit for that use case.

_Addendum:_ 

By its nature, this task can also be used as a simple way to add free items to orders when a qualifying item is bought. Typically, a free item task has more nuance around how an order qualifies (e.g. minimum quantities or subtotal, order tags, etc.), but this task can provide a great springboard for that additional customization.

This task uses [preview events](https://learn.mechanic.dev/core/tasks/previews/events) for each stage of the order edit. If you are interested in seeing the sample preview data, make sure you are viewing the task in Advanced mode.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-add-bundle-components-to-orders-post-purchase), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-add-bundle-components-to-orders-post-purchase.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
