# Tutorial: Trigger a task from a contact form, using webhooks

Tags: Tutorial

This is the companion task for the [Triggering tasks from a contact form](https://learn.mechanic.dev/resources/tutorials/triggering-tasks-from-a-contact-form) tutorial.

* View in the task library: [tasks.mechanic.dev/tutorial-trigger-a-task-from-a-contact-form-using-webhooks](https://tasks.mechanic.dev/tutorial-trigger-a-task-from-a-contact-form-using-webhooks)
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

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
user/webhook/form
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This is the companion task for the [Triggering tasks from a contact form](https://learn.mechanic.dev/resources/tutorials/triggering-tasks-from-a-contact-form) tutorial.

### Enable Mechanic in your theme

This task needs to run JavaScript in your online store. If Mechanic shows a theme setup prompt, click **Enable Mechanic in your theme**, make sure Mechanic's **Online store JavaScript** is turned on under **App embeds**, and click **Save** in Shopify. Then return to Mechanic to confirm setup.

You only need to do this once for your current theme; the same setting serves all your enabled tasks that use storefront JavaScript. You can leave it enabled if you disable this task. If your store doesn't already have Mechanic loading JavaScript, this task's storefront functionality won't work until setup is complete. [Learn about theme setup and existing tasks](https://learn.mechanic.dev/core/tasks/advanced-settings/javascript#enable-mechanic-in-your-theme).

This loads the task's JavaScript. You still need to configure the webhook and match the code to your contact form, as described in the tutorial.

### Complete the tutorial

This task is triggered via Mechanic webhook, and includes JavaScript that calls this webhook when a contact form is submitted on your online Shopify store. This task's included JavaScript listens for a `submit` event on that form, sends the form data to your Mechanic webhook, and then allows that form to continue submission normally. In this way, the task augments the contact form's original functionality, instead of replacing that functionality.

This task requires additional setup, including configuring a Mechanic webhook for your store, and adjusting the task's JavaScript to account for your contact form HTML. To use this task, make sure to start with the tutorial itself:

https://learn.mechanic.dev/resources/tutorials/triggering-tasks-from-a-contact-form

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/tutorial-trigger-a-task-from-a-contact-form-using-webhooks), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tutorial-trigger-a-task-from-a-contact-form-using-webhooks.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
