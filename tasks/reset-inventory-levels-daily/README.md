# Reset inventory levels daily

* [Task script](./script.liquid)

Use this task to bring all of your inventory levels to the same place, every night.

## Default options

```json
{
  "inventory_level_to_apply__number_required": null,
  "collection_id__number_required": null
}
```

## Subscriptions

```liquid
mechanic/scheduler/daily
```

## Documentation

This task resets your inventory levels every night, for a given collection ID.