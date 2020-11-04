# Demonstration: Fetch an external configuration file

* [task.json](../../tasks/demonstration-fetch-an-external-configuration-file.json) (for import/export)
* [Task script](./script.liquid)

This task script demonstrates using the "http" action to retrieve external data, using a GET request. It also demonstrates saving the retrieved data to the Mechanic cache, where it can be used for future task runs.

## Default options

```json
{
  "save_data_to_cache__boolean": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/actions/perform
```

## Documentation

This task script demonstrates using the "http" action to retrieve external data, using a GET request. It also demonstrates saving the retrieved data to the Mechanic cache, where it can be used for future task runs.

Learn more about this technique: [Can I load data from external sources?](https://docs.usemechanic.com/article/460-can-i-load-data-from-external-sources)
