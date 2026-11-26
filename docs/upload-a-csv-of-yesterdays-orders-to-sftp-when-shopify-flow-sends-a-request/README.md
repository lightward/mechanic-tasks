# Upload a CSV of yesterday's orders to SFTP when Shopify Flow sends a request

Tags: CSV, Export, FTP, Orders, Shopify Flow

Use this task with Shopify Flow to upload a CSV of yesterday's orders, with one row per line item, to an SFTP server each time a workflow sends the request.

* View in the task library: [tasks.mechanic.dev/upload-a-csv-of-yesterdays-orders-to-sftp-when-shopify-flow-sends-a-request](https://tasks.mechanic.dev/upload-a-csv-of-yesterdays-orders-to-sftp-when-shopify-flow-sends-a-request)
* Task JSON, for direct import: [task.json](../../tasks/upload-a-csv-of-yesterdays-orders-to-sftp-when-shopify-flow-sends-a-request.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "only_include_orders_matching_this_search_query": null,
  "csv_filename__required": "orders-DATE",
  "sftp_host__required": null,
  "sftp_port__number_required": 22,
  "sftp_username__required": null,
  "sftp_password__secret": null,
  "sftp_private_key__secret": null,
  "sftp_remote_folder": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
user/flow/orders_csv_sftp
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task with Shopify Flow to upload a CSV of yesterday's orders, with one row per line item, to an SFTP server each time a workflow sends the request.

Shopify Flow decides when the export runs, and this task builds the file and uploads it. It pairs with the Shopify Flow template "Upload a CSV of yesterday's orders to SFTP when the daily schedule runs", and any other workflow can call it too.

### How it works

When Shopify Flow sends an event with the event topic `user/flow/orders_csv_sftp`, this task asks Shopify for yesterday's orders: orders created from midnight yesterday up to, but not including, midnight today, in your store's time zone. Shopify collects the orders in the background. When they are ready, usually within a few minutes, the task builds the CSV and uploads it to your SFTP server.

If no orders are found, the task still uploads the file, with only the header row.

### Setting up the workflow

In Shopify Flow, add the action **Send event to Mechanic** to your workflow, with these values:

* Event topic: `user/flow/orders_csv_sftp`
* Event data: leave this empty to export yesterday's orders. To go back more days, enter `{"days_back": 7}`, using any whole number from 1 to 31. The date range then starts that many days before today's midnight. It still ends at today's midnight, so today's orders are not included.

### What the file contains

The file has a header row, then one row for each line item. The columns are: Order name, Created at, Financial status, Fulfillment status, Customer email, Shipping name, Shipping address 1, Shipping address 2, Shipping city, Shipping province, Shipping country, Shipping zip, Line item title, Variant title, SKU, Quantity, Line item price, Order total, Currency, Order tags.

"Created at" is in your store's time zone. "Line item price" is the price of one unit, before discounts. "Order total" is the total for the whole order, and it repeats on each of that order's rows. Both amounts are in your store's currency.

### Options

* **Only include orders matching this search query**: optional. Uses Shopify's order search syntax, for example `financial_status:paid`. The task applies it together with the date range.
* **CSV filename**: the name of the uploaded file. The task adds ".csv". DATE is replaced with the first day of the date range, written as YYYY-MM-DD.
* **SFTP host**, **SFTP port** and **SFTP username**: the server, and the account to sign in with. The port is usually 22.
* **SFTP password** and **SFTP private key**: each lets you choose a secret that is saved in Mechanic. Choose at least one, whichever your server asks for. The task holds only a reference to the secret, so the password or key itself does not appear in the task or in its run logs. A private key must not be protected by a passphrase.
* **SFTP remote folder**: the folder to upload into, for example `exports/orders`. Leave this empty to upload into the account's home folder. The folder must already exist on the server.

### Before you start

Save the SFTP password or private key as a secret first. In Mechanic, open Settings, go to "Globals and secrets", and add a secret that holds the password or the key. The secret then appears as a choice in this task's **SFTP password** and **SFTP private key** options.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/upload-a-csv-of-yesterdays-orders-to-sftp-when-shopify-flow-sends-a-request), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/upload-a-csv-of-yesterdays-orders-to-sftp-when-shopify-flow-sends-a-request.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
