# Recipes

Recipes install connected tasks, incoming Mechanic webhooks, customized Shopify webhooks, and storefront or after-checkout forms. Existing task imports and URLs stay unchanged.

Source recipes live in this directory. A task resource can refer to a canonical task using `task_slug`, with optional configuration overrides. `npm run build` resolves that reference into a self-contained snapshot in `bundled/`, assigns a content revision, and generates documentation under `docs/recipes/`. Do not edit generated files by hand. `npm test` checks that bundles and documentation match their sources.

The importer accepts `kind: mechanic_recipe`, `version: 1`, and explicit typed bindings. It rejects unsupported resource types or binding targets. Bindings connect resource IDs, generated event topics, and destination inputs; they never rewrite Liquid code or execute setup scripts.

Choose and configure a recipe, then install its connected components together. Nothing is saved before Install. After installation, manage the components in their normal editors; there is no installed-recipes dashboard. Updating this repository never overwrites a merchant's installed tasks. Private merchant exports use the same import format without adding anything to this public repository.

Never include shop credentials, webhook URLs, customer submissions, or private fixture data in a recipe. Review task code and filters as well as option values. Use declared destination inputs for settings that must be chosen in the receiving shop.

Form resources preserve their destination. Thank you and Order status forms use `surface: order_status` with their placements, request-status and availability settings. Storefront forms that save answers to the cart use `destination: cart` and must not bind `webhookId`. Product/variant visibility selections can bind to destination inputs under `availability.rules` as well as `visibility.rules`.

Customer account cards/pages are not yet supported by the Recipes installer. Keep those packages out of the public catalog until the Customer accounts integration is qualified.
