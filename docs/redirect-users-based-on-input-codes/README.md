# Redirect users based on input codes

* [task.json](../../tasks/redirect-users-based-on-input-codes.json) (for import/export)
* [Task online store javascript](./online_store_javascript.js.liquid)

Use this task to prompt your users for a code, redirecting them to an appropriate destination based on what they enter. Some assembly required, with sample Javascript and HTML provided. :)

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
