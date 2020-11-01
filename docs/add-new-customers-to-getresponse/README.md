# Add new customers to GetResponse

* [task.json](../../tasks/add-new-customers-to-getresponse.json) (for import/export)
* [Task script](./script.liquid)

Does what it says on the tin. :) Provide your GetResponse API key (found under the account menu, under "Integrations & API" and "API") and a list token (found in the settings for your list – look for 5-6 letters and numbers), and Mechanic will automatically send each new customer account (full name and email address) over to GetResponse.

## Default options

```json
{
  "getresponse_api_key__required": null,
  "getresponse_list_token__required": null
}
```

## Subscriptions

```liquid
shopify/customers/create
```

## Documentation

Does what it says on the tin. :) Provide your GetResponse API key (found under the account menu, under "Integrations & API" and "API") and a list token (found in the settings for your list – look for 5-6 letters and numbers), and Mechanic will automatically send each new customer account (full name and email address) over to GetResponse.
