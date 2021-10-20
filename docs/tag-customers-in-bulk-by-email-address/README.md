# Tag customers in bulk by email address

Tags: Customers, Email, Tag

This task prompts you for a list of email addresses and tags, one pair per line, in the format "customer@example.com:tag". The task adds each tag to its related customer. Developers: this task is an example of working in batches with GraphQL – useful when working with bulk data.

* View in the task library: [usemechanic.com/task/tag-customers-in-bulk-by-email-address](https://usemechanic.com/task/tag-customers-in-bulk-by-email-address)
* Task JSON, for direct import: [task.json](../../tasks/tag-customers-in-bulk-by-email-address.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
mechanic/user/text
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task prompts you for a list of email addresses and tags, one pair per line, in the format "customer@example.com:tag". The task adds each tag to its related customer. Developers: this task is an example of working in batches with GraphQL – useful when working with bulk data.

Enter a list of email addresses and tags, one pair per line, in the format "customer@example.com:tag". The task will add each tag to its related customer, unless (a) the customer already has the tag, (b) the customer could not be found, or (c) a problem was found either with the entered line or with the customer record.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/tag-customers-in-bulk-by-email-address), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-customers-in-bulk-by-email-address.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
