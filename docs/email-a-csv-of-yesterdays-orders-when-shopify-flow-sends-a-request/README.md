# Email a CSV of yesterday's orders when Shopify Flow sends a request

Tags: CSV, Email, Export, Orders, Shopify Flow

Use this task with Shopify Flow to email a CSV of yesterday's orders, with one row per line item, each time a workflow sends the request.

* View in the task library: [tasks.mechanic.dev/email-a-csv-of-yesterdays-orders-when-shopify-flow-sends-a-request](https://tasks.mechanic.dev/email-a-csv-of-yesterdays-orders-when-shopify-flow-sends-a-request)
* Task JSON, for direct import: [task.json](../../tasks/email-a-csv-of-yesterdays-orders-when-shopify-flow-sends-a-request.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "only_include_orders_matching_this_search_query": null,
  "csv_filename__required": "orders-DATE",
  "email_recipients__email_array_required": null,
  "email_subject__required": "Orders for DATE",
  "email_body__required_multiline": "Hello,\n\nAttached is a CSV of orders from DATE.\n\nOrders in the file: ORDER_COUNT\n\nThanks,\nMechanic, for {{ shop.name }}"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
user/flow/orders_csv_email
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task with Shopify Flow to email a CSV of yesterday's orders, with one row per line item, each time a workflow sends the request.

Shopify Flow decides when the export runs, and this task builds the file and emails it. It pairs with the Shopify Flow template "Email a CSV of yesterday's orders when the daily schedule runs", and any other workflow can call it too.

### How it works

When Shopify Flow sends an event with the event topic `user/flow/orders_csv_email`, this task asks Shopify for yesterday's orders: orders created from midnight yesterday up to, but not including, midnight today, in your store's time zone. Shopify collects the orders in the background. When they are ready, usually within a few minutes, the task builds the CSV and emails it to your recipients.

If no orders are found, the task still sends the file, with only the header row.

### Setting up the workflow

In Shopify Flow, add the action **Send event to Mechanic** to your workflow, with these values:

* Event topic: `user/flow/orders_csv_email`
* Event data: leave this empty to export yesterday's orders. To go back more days, enter `{"days_back": 7}`, using any whole number from 1 to 31. The date range then starts that many days before today's midnight. It still ends at today's midnight, so today's orders are not included.

### What the file contains

The file has a header row, then one row for each line item. The columns are: Order name, Created at, Financial status, Fulfillment status, Customer email, Shipping name, Shipping address 1, Shipping address 2, Shipping city, Shipping province, Shipping country, Shipping zip, Line item title, Variant title, SKU, Quantity, Line item price, Order total, Currency, Order tags.

"Created at" is in your store's time zone. "Line item price" is the price of one unit, before discounts. "Order total" is the total for the whole order, and it repeats on each of that order's rows. Both amounts are in your store's currency.

### Options

* **Only include orders matching this search query**: optional. Uses Shopify's order search syntax, for example `financial_status:paid`. The task applies it together with the date range.
* **CSV filename**: the name of the attached file. The task adds ".csv". DATE is replaced with the first day of the date range, written as YYYY-MM-DD.
* **Email recipients**: the addresses that receive the file. The task sends one email, addressed to all of them.
* **Email subject** and **Email body**: both may use DATE, as above, and ORDER_COUNT, which is replaced with the number of orders in the file.

### Before you start

Mechanic sends email only for accounts that have been approved for email. If your Mechanic account is new, write to team@usemechanic.com to ask for approval. Stores on a Shopify trial cannot send email.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/email-a-csv-of-yesterdays-orders-when-shopify-flow-sends-a-request), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-a-csv-of-yesterdays-orders-when-shopify-flow-sends-a-request.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
