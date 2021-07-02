# Download and email a file to a customer, when purchased

Tags: Download, Email, Files, Orders

This task watches for newly-paid orders. When an order contains a certain line item, this task retrieves a file from the URL of your choice, and emails that file to the customer. Because URLs are easier to share, this makes for a safer way to distribute downloadable materials.

* View in the task library: [usemechanic.com/task/download-and-email-a-file-to-a-customer-when-purchased](https://usemechanic.com/task/download-and-email-a-file-to-a-customer-when-purchased)
* Task JSON, for direct import: [task.json](../../tasks/download-and-email-a-file-to-a-customer-when-purchased.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "required_line_item_title__required": "Course",
  "email_subject__required": "Here's your purchased course! (Order {{ order.name }})",
  "email_body__required_multiline": "Hey there! Thanks for purchasing this course. You'll find the PDF attached to this email. :)\n\nThanks,\n{{ shop.name }}",
  "attachment_filename__required": "Course for order {{ order.name }}.pdf",
  "attachment_url__required": "https://example.com/course.pdf"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/paid
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task watches for newly-paid orders. When an order contains a certain line item, this task retrieves a file from the URL of your choice, and emails that file to the customer. Because URLs are easier to share, this makes for a safer way to distribute downloadable materials.

Shopify allows file uploads via the "Files" page. Once uploaded, you'll receive a URL which can be used for this task. [Learn how to upload files to Shopify.](https://help.shopify.com/en/manual/sell-online/online-store/file-uploads#upload-a-file-on-the-files-page)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/download-and-email-a-file-to-a-customer-when-purchased), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/download-and-email-a-file-to-a-customer-when-purchased.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
