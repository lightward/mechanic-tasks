# Temporarily add an order note

* [Task script](./script.liquid)

This task looks up orders by their order number, adds the note of your choice to the order record, and removes that same note 12 hours later. A bespoke task for a very specific merchant need, we publish this task as an example of getting creative with Mechanic. :)

## Default options

```json
{
  "order_note_to_add__required": null
}
```

## Subscriptions

```liquid
mechanic/user/text
user/orders/remove_note+12.hours
```

## Documentation

Enter one or more order numbers (one line apiece), and Mechanic will add the note you configure to the corresponding order, and remove it 12 hours later.

Mechanic will preserve any existing notes on file for these orders, appending the new note content to the end of the content already in place.

Note: Mechanic will only look at authorized and paid orders from the last 60 days.