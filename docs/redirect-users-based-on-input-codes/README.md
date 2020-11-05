# Redirect users based on input codes

Use this task to prompt your users for a code, redirecting them to an appropriate destination based on what they enter. Some assembly required, with sample Javascript and HTML provided. :)

* View in the task library: [usemechanic.com/task/redirect-users-based-on-input-codes](https://usemechanic.com/task/redirect-users-based-on-input-codes)
* Task JSON, for direct import: [task.json](../../tasks/redirect-users-based-on-input-codes.json)
* Preview task code: [online_store_javascript.js.liquid](./online_store_javascript.js.liquid)

## Default options

```json
{
  "redirects_and_codes__keyval_multiline": {
    "/pages/secret-one": "one\num\nuno",
    "/pages/secret-two": "two\ndois\ndos",
    "/pages/secret-three": "three\ntrês\ntres"
  },
  "require_case_sensitive_codes__boolean": false,
  "invalid_code_message__required": "That code wasn't valid - try again."
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Documentation

Use this task to prompt your users for a code, redirecting them to an appropriate destination based on what they enter. Some assembly required, with sample Javascript and HTML provided. :)

Configure this task by filling in redirect URLs on the left, and a series of codes for each redirect on the right. The intent is to route users to the appropriate redirect, based on the code they enter.

This task doesn't run automatically. Instead, it generates some Javascript that's automatically embedded into your online storefront, redirecting the user when they enter a code that matches one of the redirects you've configured.

You can prompt the user for a code yourself, and pass the result to the function `attemptRedirectByCode`, like this:

```js
<script>
  attemptRedirectByCode(prompt('Enter your code here:'))
</script>
```

Or, modify this HTML to set up a form for your users:

```
<form id="redirect-form">
  <input type="text" placeholder="Enter your code here">
</form>
<script>
  document.getElementById('redirect-form').onsubmit = function (event) {
    event.preventDefault();
    var input = event.target.children[0];
    attemptRedirectByCode(input.value) || input.select();
  };
</script>
```

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/redirect-users-based-on-input-codes), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/redirect-users-based-on-input-codes.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
