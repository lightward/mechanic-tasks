# Demonstration: Write to a customer metafield

Tags: Demonstration, Metafields

This task demonstrates how to write to a Shopify metafield, belonging to a specific resource - in this case, a customer.

* View in the task library: [usemechanic.com/task/demonstration-write-to-a-customer-metafield](https://usemechanic.com/task/demonstration-write-to-a-customer-metafield)
* Task JSON, for direct import: [task.json](../../tasks/demonstration-write-to-a-customer-metafield.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "customer_id__number_required": "",
  "metafield_namespace__required": "foo",
  "metafield_key__required": "bar",
  "metafield_value__required": "baz",
  "use_rest_api__boolean": false,
  "use_graphql_api__boolean": false,
  "use_metafields_set_mutation__boolean": false
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task demonstrates how to write to a Shopify metafield, belonging to a specific resource - in this case, a customer.

This example covers:

* Retrieving an existing metafield, if any, having the desired namespace and key
* Re-using the existing metafield's ID to perform a metafield update, if applicable, and resulting in a newly-created metafield otherwise
* Using the [metafieldsSet](https://shopify.dev/api/admin-graphql/2021-10/mutations/metafieldsset) GraphQL mutation, which does not require a metafield ID [Note: this mutation is available as of the 2021-10 API release]

To use this task, provide the numeric ID of a customer in your store. ([Need help finding the customer ID?](https://learn.mechanic.dev/techniques/finding-a-resource-id)) Then, add in the desired metafield namespace and key (which will uniquely identify the metafield), and the metafield value (which will be stored within the metafield). Finally, choose between REST and GraphQL for performing the Shopify API operation, noting how the [task preview](https://learn.mechanic.dev/core/tasks/previews) changes to reflect your choice.

Run the task to see the metafield create/update in action.

To verify that the metafield operation succeeded, use an app like [Metafields Guru](https://apps.shopify.com/metafields-editor-2), or look up `/metafields.json` for the customer in your Shopify admin area. For example, for a customer with the ID 12345, on a store called example.myshopify.com, the following URL would show all the metafields for that customer:

`https://example.myshopify.com/admin/customers/12345/metafields.json`

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/demonstration-write-to-a-customer-metafield), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/demonstration-write-to-a-customer-metafield.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
