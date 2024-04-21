# Scheduled inventory adjustment

Tags: Inventory, Products, Schedule, Variants

Use this task to set the available inventory of a single product variant at a single location in your shop at a specific time on your choice of recurring days. Great for daily or weekly product drops!

* View in the task library: [tasks.mechanic.dev/scheduled-inventory-adjustment](https://tasks.mechanic.dev/scheduled-inventory-adjustment)
* Task JSON, for direct import: [task.json](../../tasks/scheduled-inventory-adjustment.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "variant_id__number_required": null,
  "inventory_quantity_to_set__number_required": null,
  "location_name__required": null,
  "hours_offset_from_midnight__number__required": "0",
  "minutes_offset_from_the_hour__number_required": "0",
  "run_daily__boolean": false,
  "run_on_mondays__boolean": false,
  "run_on_tuesdays__boolean": false,
  "run_on_wednesdays__boolean": false,
  "run_on_thursdays__boolean": false,
  "run_on_fridays__boolean": false,
  "run_on_saturdays__boolean": false,
  "run_on_sundays__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger

{% assign hours_offset = options.hours_offset_from_midnight__number__required | at_least: 0 %}
{% assign minutes_offset = options.minutes_offset_from_the_hour__number_required | at_least: 0 %}
{% assign total_minutes_offset = hours_offset | times: 60 | plus: minutes_offset %}

{% if options.run_daily__boolean %}
  mechanic/scheduler/daily+{{ total_minutes_offset }}.minutes
{% else %}
  {% if options.run_on_mondays__boolean %}
    mechanic/scheduler/monday+{{ total_minutes_offset }}.minutes
  {% endif %}
  {% if options.run_on_tuesdays__boolean %}
    mechanic/scheduler/tuesday+{{ total_minutes_offset }}.minutes
  {% endif %}
  {% if options.run_on_wednesdays__boolean %}
    mechanic/scheduler/wednesday+{{ total_minutes_offset }}.minutes
  {% endif %}
  {% if options.run_on_thursdays__boolean %}
    mechanic/scheduler/thursday+{{ total_minutes_offset }}.minutes
  {% endif %}
  {% if options.run_on_fridays__boolean %}
    mechanic/scheduler/friday+{{ total_minutes_offset }}.minutes
  {% endif %}
  {% if options.run_on_saturdays__boolean %}
    mechanic/scheduler/saturday+{{ total_minutes_offset }}.minutes
  {% endif %}
  {% if options.run_on_sundays__boolean %}
    mechanic/scheduler/sunday+{{ total_minutes_offset }}.minutes
  {% endif %}
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to set the available inventory of a single product variant at a single location in your shop at a specific time on your choice of recurring days. Great for daily or weekly product drops!

The time of day for the scheduled task run is controlled by setting the hours offset from midnight and the minutes offset from the hour. Entering zeroes in both of those fields will represent midnight.

Choose either to schedule this task for daily runs, or instead on one or more days of the week.

Run the task manually to have it validate the configured variant ID, the location name, and whether that variant is stocked at that location.

**Notes:**
- Midnight is considered the beginning of the configured day(s).
- This task will not take into account local clock changes (e.g. "Daylight saving time"), so keep that in mind if a scheduled day will fall on a date where the clock is adjusted.



## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/scheduled-inventory-adjustment), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/scheduled-inventory-adjustment.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
