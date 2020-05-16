# Temporarily add an order note

* [Task script](./script.liquid)

This task looks up orders by their order number, adds the note of your choice to the order record, and removes that same note 12 hours later. A bespoke task for a very specific merchant need, we publish this task as an example of getting creative with Mechanic. :)

## Default options

```json
{
  "hours_to_wait__number_required": 12,
  "order_note_to_add__required": null
}
```

## Subscriptions

```liquid
mechanic/user/text
user/orders/remove_note
```

## Documentation

Run this task manually, and enter one or more order numbers (one per line, making sure to use the exact order number - including symbols and prefixes/suffixes. Mechanic will add the note you configure to the corresponding order, and remove it 12 hours later.

Mechanic will preserve any existing notes on file for these orders, appending the new note content to the end of the content already in place.