# Demonstration: Write to a customer metafield

Tags: Demonstration, Metafields

This task demonstrates how to write to a Shopify metafield, belonging to a specific resource - in this case, a customer.

* View in the task library: [tasks.mechanic.dev/demonstration-write-to-a-customer-metafield](https://tasks.mechanic.dev/demonstration-write-to-a-customer-metafield)
* Task JSON, for direct import: [task.json](../../tasks/demonstration-write-to-a-customer-metafield.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "customer_id__number_required": "",
  "customer_metafield__required": "foo.bar",
  "metafield_value__required": "baz",
  "mutation_choice__choice_o1_customer_update_o2_metafields_set_required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task demonstrates how to write to a Shopify metafield, belonging to a specific resource - in this case, a customer.

This example covers:

* Retrieving an existing customer metafield, if any, having the desired namespace and key
* Using the [customerUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerUpdate) GraphQL mutation, to either create a new metafield or update an existing one
* Using the [metafieldsSet](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsset) GraphQL mutation, which does not require a metafield ID

To use this task, provide the numeric ID of a customer in your store. ([Need help finding the customer ID?](https://learn.mechanic.dev/techniques/finding-a-resource-id)) Then, add in the desired metafield in the format of "namespace.key" (which will uniquely identify the metafield), and the metafield value (which will be stored within the metafield). Finally, choose between using the "Customer update" and "Metafields set" GraphQL mutations for performing the Shopify API operation, noting how the [task preview](https://learn.mechanic.dev/core/tasks/previews) changes to reflect your choice.

Run the task to see the metafield create/update in action. After running the mutation, the task will log out a url to the customer's unstructured metafields list, which is where the metafield should be found unless it has a metafield definition (i.e. you are testing with an existing metafield).

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/demonstration-write-to-a-customer-metafield), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/demonstration-write-to-a-customer-metafield.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
