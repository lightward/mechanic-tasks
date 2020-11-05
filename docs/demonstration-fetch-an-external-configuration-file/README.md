# Demonstration: Fetch an external configuration file

This task script demonstrates using the "http" action to retrieve external data, using a GET request. It also demonstrates saving the retrieved data to the Mechanic cache, where it can be used for future task runs.

* View in the task library: [usemechanic.com/task/demonstration-fetch-an-external-configuration-file](https://usemechanic.com/task/demonstration-fetch-an-external-configuration-file)
* Task JSON, for direct import: [task.json](../../tasks/demonstration-fetch-an-external-configuration-file.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "save_data_to_cache__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/actions/perform
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task script demonstrates using the "http" action to retrieve external data, using a GET request. It also demonstrates saving the retrieved data to the Mechanic cache, where it can be used for future task runs.

Learn more about this technique: [Can I load data from external sources?](https://docs.usemechanic.com/article/460-can-i-load-data-from-external-sources)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/demonstration-fetch-an-external-configuration-file), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/demonstration-fetch-an-external-configuration-file.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
