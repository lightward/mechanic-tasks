# Auto-tag orders by product collections

* [Task script](./script.liquid)

Use this task to automatically tag orders based on what collection(s) the customer has ordered from. Useful for broadly classifying orders according to their contents.

## Default options

```json
{
  "collections_and_tags__keyval_required": {
    "Summer Swimware": "summer, swimware",
    "Cold Weather Gear": "winter"
  }
}
```

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
```

## Documentation

Fill in the "Collections and tags" option with the collection on the left, and tags on the right. When specifying the collection, you can use the collection title (e.g. "Summer Swimware"), handle ("e.g. summer-swimware"), or ID (e.g. 27359487103). These are all case-sensitive, so double-check your work!

Run this task manually to scan and tag every order in your store.