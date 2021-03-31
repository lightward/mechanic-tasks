# Tutorial: Trigger a task from a contact form, using webhooks

Tags: (not tagged!)

This is the companion task for the [Triggering tasks from a contact form](https://learn.mechanic.dev/resources/tutorials/triggering-tasks-from-a-contact-form) tutorial.

* View in the task library: [usemechanic.com/task/tutorial-trigger-a-task-from-a-contact-form-using-webhooks](https://usemechanic.com/task/tutorial-trigger-a-task-from-a-contact-form-using-webhooks)
* Task JSON, for direct import: [task.json](../../tasks/tutorial-trigger-a-task-from-a-contact-form-using-webhooks.json)
* Preview task code:
  * [script.liquid](./script.liquid)
  * [online_store_javascript.js.liquid](./online_store_javascript.js.liquid)

## Default options

```json
{
  "recipient_email_address__email_required": "crm_imports@example.com",
  "email_subject__required": "Contact form submission for CRM: {{ \"now\" | date: \"%Y-%m-%d %H:%M\" }}",
  "email_body__required_multiline": "Hello,\n\nPlease find the attached CSV. Thanks!\n\n-Mechanic, for {{ shop.name }}",
  "csv_attachment_filename__required": "contact-form-for-crm-{{ \"now\" | date: \"%s\" }}",
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

This is the companion task for the [Triggering tasks from a contact form](https://learn.mechanic.dev/resources/tutorials/triggering-tasks-from-a-contact-form) tutorial.

This task is triggered via Mechanic webhook, and includes JavaScript that calls this webhook when a contact form is submitted on your online Shopify store. This task's included JavaScript listens for a `submit` event on that form, sends the form data to your Mechanic webhook, and then allows that form to continue submission normally. In this way, the task augments the contact form's original functionality, instead of replacing that functionality.

This task requires additional setup, including configuring a Mechanic webhook for your store, and adjusting the task's JavaScript to account for your contact form HTML. To use this task, make sure to start with the tutorial itself:

https://learn.mechanic.dev/resources/tutorials/triggering-tasks-from-a-contact-form

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/tutorial-trigger-a-task-from-a-contact-form-using-webhooks), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tutorial-trigger-a-task-from-a-contact-form-using-webhooks.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
