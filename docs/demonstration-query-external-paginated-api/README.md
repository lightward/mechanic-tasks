# Demonstration: Query external paginated API

Tags: Demonstration, External API

This task shows how to call an external API using the HTTP action type to first get a limited page of products, and then paginate through the responses until all of the products are fetched.

* View in the task library: [tasks.mechanic.dev/demonstration-query-external-paginated-api](https://tasks.mechanic.dev/demonstration-query-external-paginated-api)
* Task JSON, for direct import: [task.json](../../tasks/demonstration-query-external-paginated-api.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/actions/perform
user/demo_paginated_api/fetched_products
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task shows how to call an external API using the HTTP action type to first get a limited page of products, and then paginate through the responses until all of the products are fetched.

For this demonstration, the free [DummyJSON](https://dummyjson.com/) products resource will be used, which has a pagination method similar to many public REST APIs.

The ```mechanic/actions/perform``` event contains the results from the API. A decision is made based on the pagination data in the results on whether to make an additional API call. For each additional call, an array of fetched products is passed as [meta](https://learn.mechanic.dev/core/tasks/code/action-objects#meta) so they may all be processed at the end of the paginated calls.

**NOTE: Reading the developer docs for an API is a must to understanding how its specific pagination works.**

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/demonstration-query-external-paginated-api), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/demonstration-query-external-paginated-api.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
