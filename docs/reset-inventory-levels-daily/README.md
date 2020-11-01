# Reset inventory levels daily

* [task.json](../../tasks/reset-inventory-levels-daily.json) (for import/export)
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

Use this task to bring all of your inventory levels to the same place, every night.

This task resets your inventory levels every night, for a given collection ID.
