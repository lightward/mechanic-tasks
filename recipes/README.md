# Complete templates

Templates install connected tasks, incoming Mechanic webhooks, customized Shopify webhooks, and storefront forms. Existing task imports and URLs stay unchanged.

Source recipes live in this directory. A task resource can refer to a canonical task using `task_slug`, with optional configuration overrides. `npm run build` resolves that reference into a self-contained snapshot in `bundled/`, assigns a content revision, and generates documentation under `docs/recipes/`. Do not edit generated files by hand. `npm test` checks that bundles and documentation match their sources.

The importer accepts `kind: mechanic_recipe`, `version: 1`, and explicit typed bindings. It rejects unsupported resource types or binding targets. Bindings connect resource IDs, generated event topics, and destination inputs; they never rewrite Liquid code or execute setup scripts.

Choose and configure a template, review it, then choose Connect setup. Its task starts disabled. Continue setup in the form to enable the task, approve access, publish/place, and test. A form you already created can use Continue setup without making a copy. There is no separate Recipes menu or management dashboard. Updating this repository never overwrites a merchant's installed tasks. Private merchant exports use the same import format without adding anything to this public repository.

Never include shop credentials, webhook URLs, customer submissions, or private fixture data in a recipe. Review task code and filters as well as option values. Use declared destination inputs for settings that must be chosen in the receiving shop.

Form resources preserve their destination. Storefront forms that save answers to the cart use `destination: cart` and must not bind `webhookId`. Product/variant visibility selections can bind to destination inputs under `visibility.rules`.

Customer account cards/pages are not yet supported by the Templates installer. Keep those packages out of the public catalog until those surfaces are implemented and qualified.

The first guided form outcomes are team email, cart submission to draft order, and gift email after full fulfillment. Sources bind the form and task together; incoming webhooks are included only when needed. `email_list` inputs bind an array of recipient addresses to ordinary task options.
