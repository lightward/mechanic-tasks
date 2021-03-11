# Tutorial: trigger a task from a contact form using webhooks

This is a companion task for the Trigger a task from a contact form tutorial: https://learn.mechanic.dev/resources/tutorials/trigger-a-task-from-a-contact-form.

* View in the task library: [usemechanic.com/task/tutorial-trigger-a-task-from-a-contact-form-using-webhooks](https://usemechanic.com/task/tutorial-trigger-a-task-from-a-contact-form-using-webhooks)
* Task JSON, for direct import: [task.json](../../tasks/tutorial-trigger-a-task-from-a-contact-form-using-webhooks.json)
* Preview task code:
  * [script.liquid](./script.liquid)
  * [online_store_javascript.js.liquid](./online_store_javascript.js.liquid)

## Default options

```json
{
  "recipient_email_address__email_required": "",
  "email_subject__required": "Contact form submission: {{ \"now\" | date: \"%Y-%m-%d %H:%M\" }}",
  "email_body__required_multiline": "Hello,\n\nPlease find the attached CSV. Thanks!\n\n-Mechanic, for {{ shop.name }}",
  "csv_attachment_filename__required": "contact-form-{{ \"now\" | date: \"%Y%m%d\" }}.csv",
  "contact_form_id__required": "#ContactForm",
  "mechanic_webhook_url__required": ""
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
user/webhook/form
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This is a companion task for the Trigger a task from a contact form tutorial: https://learn.mechanic.dev/resources/tutorials/trigger-a-task-from-a-contact-form.

This task is triggered via a webhook which is called when a contact form is submitted on the frontend of your Shopify store. We use the JavaScript for online storefront functionality to insert JavaScript, which listens for a `submit` event, and then posts the form data to your webhook.

Make sure to visit the tutorial to learn more about this task: https://learn.mechanic.dev/resources/tutorials/trigger-a-task-from-a-contact-form.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/tutorial-trigger-a-task-from-a-contact-form-using-webhooks), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tutorial-trigger-a-task-from-a-contact-form-using-webhooks.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
