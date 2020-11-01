# Auto-generate SKUs

* [task.json](../../tasks/auto-generate-skus.json) (for import/export)
* [Task script](./script.liquid)

Save time by letting this task keep your variant SKUs up to date, generating them based on your product handle, and the initials of each variant option. Useful for large catalogs, or for anyone who has a consistent SKU format. Like all tasks, this one is easy to update for your business's needs - get in touch if you need a hand.

## Default options

```json
{
  "product_options_to_keep_unabbreviated__array": null
}
```

## Subscriptions

```liquid
shopify/products/create
shopify/products/update
```

## Documentation

Save time by letting this task keep your variant SKUs up to date, generating them based on your product handle, and the initials of each variant option. Useful for large catalogs, or for anyone who has a consistent SKU format. Like all tasks, this one is easy to update for your business's needs - get in touch if you need a hand.

This task automatically maintains SKUs for your product variants, by combining these elements and joining them with a dash:

1. The last portion of the product handle (e.g. `503`, if your product is available at `myshop.com/products/stylish-shirt-503`)
2. The capital letters of the variant's first option (e.g. `H` if the option is `Heather gray`, or `HG` if the option is `Heather Gray`)
3. The capital letters of the variant's second option, if there is one
4. The capital letters of the variant's third option, if there is one

(To use the product option's full value, instead of abbreviating it, add the option name to the "Product options to keep unabbreviated" list.)

To illustrate, a shirt available at `myshop.com/products/stylish-shirt-503`, with options for size and color, might have these SKUs auto-generated:

* Medium, Black: `503-M-B`
* XL, Heather gray: `503-XL-H`
* Small, Red: `503-S-R`

To update your product handle, so as to control the first portion of generated SKUs, open the product in the Shopify admin, scroll to the bottom of the page, click "Edit website SEO", and update the "URL and handle" field to taste. :)
