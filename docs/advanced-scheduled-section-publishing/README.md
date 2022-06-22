# Advanced: Scheduled section publishing

**🚨 This is an advanced task, intended for technical users. For tasks like these, the Mechanic team only offers support with platform-level issues. For help with task-level issues (e.g. debugging, configuration, customization, monitoring, etc), see [Hire a Mechanic developer](https://learn.mechanic.dev/hire-a-developer).**

Tags: Advanced, Publish, Schedule, Sections, Unpublish

This advanced task allows you to schedule section publishing and unpublishing for your store. To use this task, enter a datetime to publish, a theme ID, and template names paired with one or more section IDs to publish or unpublish. If the configured datetime matches the current task run time at a scheduled 10 minute interval, then it will publish and/or unpublish the theme sections as configured.

* View in the task library: [tasks.mechanic.dev/advanced-scheduled-section-publishing](https://tasks.mechanic.dev/advanced-scheduled-section-publishing)
* Task JSON, for direct import: [task.json](../../tasks/advanced-scheduled-section-publishing.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "datetime_to_publish__required": null,
  "theme_id__number_required": null,
  "template_names_and_section_ids_to_publish__keyval_multiline": {},
  "template_names_and_section_ids_to_unpublish__keyval_multiline": {}
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/scheduler/10min
mechanic/user/trigger
mechanic/actions/perform
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This advanced task allows you to schedule section publishing and unpublishing for your store. To use this task, enter a datetime to publish, a theme ID, and template names paired with one or more section IDs to publish or unpublish. If the configured datetime matches the current task run time at a scheduled 10 minute interval, then it will publish and/or unpublish the theme sections as configured.

__Important Notes:__
- The datetime to publish must be in the format of "YYYY-MM-DD HH:MM" with a 24 hour clock time having minutes that are a multiple of 10, since that is the smallest scheduler interval available.
- Template names should be entered without the _.json_ suffix (e.g. index, page.contact).
- Template names can appear in both the publish and unpublish keyval configurations, but they may only appear once in each since they are the left-hand keys.
- Section IDs should be entered in the right-hand value fields, paired with their respective template.
- Multiple section IDs being (un)published for the same template must be  entered on multiple lines of the same entry field.

_Example configuration_
- Datetime to publish: __2022-07-31 13:30__
- Theme ID: __1234567890__
- Template names and section IDs to publish:
  - __index__
    - _collage_
    - _123456abcdef_
- Template names and section IDs to unpublish:
  - __index__
    - _234561bcdefa_

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/advanced-scheduled-section-publishing), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/advanced-scheduled-section-publishing.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
