# Auto-publish products tagged with the current day

* [Task script](./script.liquid)

Use this task to automatically roll out your products on specific days of the week. This task runs every midnight, in your shop's local timezone, and it scans your catalog for unpublished products tagged with the current day of the week (e.g. "Monday", "tuesday", etc).

## Subscriptions

```liquid
mechanic/scheduler/daily
mechanic/user/trigger
```

## Documentation

This task runs every midnight, in your shop's local timezone, and it scans your catalog for unpublished products tagged with the current day of the week (e.g. "Monday", "tuesday", etc).

You can also run this task manually, to publish any unpublished products tagged with the current day of the week.