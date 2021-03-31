# Auto-verify customer email addresses

Tags: Account, Customers, Email

Use this task to perform an extra verification step for your newly-created customers, in which a verification code is emailed to them, along with a link to a form on your online storefront where they can enter the code for verification. Once verified, the customer will be tagged, and sent a confirmation email.

* View in the task library: [usemechanic.com/task/auto-verify-customer-email-addresses](https://usemechanic.com/task/auto-verify-customer-email-addresses)
* Task JSON, for direct import: [task.json](../../tasks/auto-verify-customer-email-addresses.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_to_add_after_verifying__required": "verified",
  "verification_email_subject__required": "[{{ shop.name }}] Please verify your account",
  "verification_email_body__multiline_required": "Hello,\n\nWe've received your registration, but we need you to verify your email address before continuing.\n\nPlease visit https://example.com/pages/verify, and submit the verification code VERIFICATION_CODE.\n\nIf you have any questions, please reply to this email.\n\nThanks,\n{{ shop.name }}",
  "verification_confirmed_email_subject__required": "[{{ shop.name }}] Your account has been confirmed",
  "verification_confirmed_email_body__multiline_required": "Hello,\n\nYour account has been successfully verified. Thank you!\n\nCheers,\n{{ shop.name }}",
  "verification_webhook_event_topic__required": "user/customers/verify_webhook"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/customers/create
{{ options.verification_webhook_event_topic__required }}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to perform an extra verification step for your newly-created customers, in which a verification code is emailed to them, along with a link to a form on your online storefront where they can enter the code for verification. Once verified, the customer will be tagged, and sent a confirmation email.

### Setting up

1.  Install this task! :) Customize the email content to taste.
2.  Navigate to your Mechanic account settings, and use the "Webhooks" section to create a new webhook, named "Customer verification" (or another name of your choosing), and using the event topic "user/customers/verify_webhook". Make a note of the webhook URL that Mechanic generates for you.
3.  Adapt and use the following code sample on your online store, perhaps using a new page and [editing its HTML](https://help.shopify.com/en/manual/sell-online/online-store/pages#add-content-to-a-webpage). Make sure to replace the `mechanicWebhookUrl` javascript variable with the webhook URL that Mechanic generated for you earlier.

    ```
    <p>Please verify your account:</p>

    <form id="verify">
      <p><label>Email address: <input type="email" name="customer_email" required></label>
      <p><label>Verification code: <input type="text" name="verification_code" required></label>
      <p><button type="submit">Submit</button></p>
    </form>

    <script>
      var mechanicWebhookUrl = 'https://usemechanic.com/webhook/00000000-0000-0000-0000-000000000000';
      window.addEventListener('load', function () {
        $('#verify').on('submit', function (e) {
          e.preventDefault();
          $.post(mechanicWebhookUrl + '?' + $(this).serialize());
          alert('Your information has been submitted. If verification was successful, you will receive a confirmation email.');
        });
      });
    </script>
    ```
4. You're done! Perform a test to make sure everything works as intended.

Please note: the team at Mechanic can help with debugging the Mechanic side of things, but we can't help with adapting the code above. Work with a web designer or developer to create the right experience for your store.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-verify-customer-email-addresses), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-verify-customer-email-addresses.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
