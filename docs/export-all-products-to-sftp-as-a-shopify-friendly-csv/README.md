# Export all products to SFTP, as a Shopify-friendly CSV

* [task.json](../../tasks/export-all-products-to-sftp-as-a-shopify-friendly-csv.json) (for import/export)
* [Task script](./script.liquid)

null

## Default options

```json
{
  "only_export_products_matching_this_query": null,
  "run_every_x_hours__number": null,
  "sftp_host__required": null,
  "sftp_port__required_number": null,
  "sftp_user__required": null,
  "sftp_password__required": null,
  "sftp_upload_directory": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_every_x_hours__number == 24 %}
  mechanic/scheduler/daily
{% elsif options.run_every_x_hours__number %}
  mechanic/scheduler/hourly
{% endif %}
mechanic/shopify/bulk_operation
```

## Documentation

null
