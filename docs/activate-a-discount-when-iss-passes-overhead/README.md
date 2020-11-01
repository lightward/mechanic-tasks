# Activate a discount when ISS passes overhead

* [task.json](../../tasks/activate-a-discount-when-iss-passes-overhead.json) (for import/export)
* [Task script](./script.liquid)

You know what's worth celebrating? SPACE. Use this task to activate a discount code every time the International Space Station passes over your store (or some other location of your choice), powered by Mechanic webhooks, IFTTT, and NASA. 🚀

## Default options

```json
{
  "discount_code__required": "SPAAAACE",
  "discount_percentage__number_required": "20.0",
  "notification_email_address__email": ""
}
```

## Subscriptions

```liquid
user/space/iss
```

## Documentation

You know what's worth celebrating? SPACE. Use this task to activate a discount code every time the International Space Station passes over your store (or some other location of your choice), powered by Mechanic webhooks, IFTTT, and NASA. 🚀

To get set up, follow our guide on [Triggering tasks with IFTTT](https://help.usemechanic.com/tutorials/triggering-tasks-with-ifttt), with these modifications:

1. When configuring your Mechanic webhook, use the event topic `user/space/iss`.
2. When choosing an IFTTT service (for "+this"), search for and select the "Space" service.
3. When choosing an IFTTT trigger, select "ISS passes over a specific location", and choose the location of your store. Or, whatever location you prefer. :)
4. When configuring the webhook action, set the content type to "application/json", and set the body to the following code:

    `{ "duration_seconds": "{{DurationSeconds}}", "location_map_url": "{{LocationMapUrl}}" }`

That's it! :) Every time the ISS arrives at your location, this task will activate the discount code of your choice (re-activating it when it already exists, and creating it if it does not), setting it to expire when the ISS departs.
