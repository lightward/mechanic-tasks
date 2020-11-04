# Demonstration: Performing action runs in sequence

* [task.json](../../tasks/demonstration-performing-action-runs-in-sequence.json) (for import/export)
* [Task script](./script.liquid)

This task demonstrates Mechanic's opt-in ability to perform a task's generated actions in a sequence, rather than in parallel. To try this task, enable the "Perform action runs in sequence" option, in the task's advanced settings.

## Default options

```json
{
  "fail_the_sixth_action__boolean": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
```

## Documentation

This task demonstrates Mechanic's opt-in ability to perform a task's generated actions in a sequence, rather than in parallel. To try this task, enable the "Perform action runs in sequence" option, in the task's advanced settings.

Read more: [Generating sequences of actions](https://docs.usemechanic.com/article/452-generating-sequences-of-actions)
