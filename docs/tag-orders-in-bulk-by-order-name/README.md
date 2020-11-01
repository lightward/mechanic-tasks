# Tag orders in bulk by order name

* [task.json](../../tasks/tag-orders-in-bulk-by-order-name.json) (for import/export)
* [Task script](./script.liquid)

Use this task to rapidly update your order list, by entering a set of order names (e.g. "#12345", often called order numbers) and the tags to apply to those orders.

## Subscriptions

```liquid
mechanic/user/text
```

## Documentation

Use this task to rapidly update your order list, by entering a set of order names (e.g. "#12345", often called order numbers) and the tags to apply to those orders.

Enter a list of order name + tag pairs, like so:

```
#12345:approved
#67890:approved
#11111:denied
```

Please note: the order name must be an exact match, including any prefixes and suffixes.

Mechanic will look up each order by name, and add the tag you specify. (If the tag is already present, Mechanic won't update the order.)
