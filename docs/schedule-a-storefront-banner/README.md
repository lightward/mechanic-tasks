# Schedule a storefront banner

Tags: Banner, Schedule, Storefront

Use this task to publish a banner, to be displayed across your online storefront. This task comes with some pre-configured HTML and CSS – customize to taste. :)

* View in the task library: [usemechanic.com/task/schedule-a-storefront-banner](https://usemechanic.com/task/schedule-a-storefront-banner)
* Task JSON, for direct import: [task.json](../../tasks/schedule-a-storefront-banner.json)
* Preview task code: [online_store_javascript.js.liquid](./online_store_javascript.js.liquid)

## Default options

```json
{
  "starting_date_and_time__required": "May 1 2019 12:00am",
  "ending_date_and_time__required": "June 1 2019 12:00am",
  "banner_html__required_multiline_code": "<style>\n#banner_placeholder {\n    height: 50px;\n    width: 100%;\n}\n\n#banner {\n    position: absolute;\n    z-index: 1000;\n    top: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 0.8);\n    color: #ddd;\n    padding: 10px;\n    font-size: 16px;\n}\n\n#banner a {\n    font-weight: bold;\n    text-decoration: underline;\n    color: #ddd;\n}\n\n#banner a:hover {\n    color: #fff;\n}\n</style>\n\n<div id=\"banner_placeholder\"></div>\n<div id=\"banner\">\n  It's time for a banner! <a href=\"/\">Keep shopping!</a>\n</div>",
  "banner_parent_css_selector__required": "body"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Documentation

Use this task to publish a banner, to be displayed across your online storefront. This task comes with some pre-configured HTML and CSS – customize to taste. :)

Configure the starting and ending times as appropriate, remembering that all times in Mechanic are local to your store's timezone.

Adjust (or replace!) the banner HTML and CSS to taste. Mechanic will place your code within a plain `<div>` wrapper. To control where your banner is inserted, use the "Banner parent CSS selector" option. Mechanic will insert your banner as the first child of whatever element is matched by that CSS selector.

Please note: the Mechanic support crew can't help out with banner design.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/schedule-a-storefront-banner), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/schedule-a-storefront-banner.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
