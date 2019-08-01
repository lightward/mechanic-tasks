# Auto-tag new online orders by web browser

* [Task script](./script.liquid)

This task monitors incoming orders, and tags them with information about the customer's web browser.

## Default options

```json
{
  "include_browser_version__boolean": false
}
```

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
```

## Documentation

This task will monitor incoming orders, and tag them if the browser name can be derived from the order information.

Run this task manually to scan your existing orders, and tag them as appropriate.