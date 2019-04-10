# Auto-tag orders using product tags

* [Task script](./script.liquid)

Use this task to tag incoming orders with all the product tags in the order. Optionally, specify a specific list of tags to be copied, and/or a certain tag prefix to watch for.

## Default options

```json
{
  "copy_these_tags__array": [

  ],
  "copy_tags_having_this_prefix": [

  ]
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

(none)