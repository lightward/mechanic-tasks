# Complete templates

Templates install connected tasks, incoming Mechanic webhooks, customized Shopify webhooks, and storefront forms. Existing task imports and URLs stay unchanged.

Template sources live in this directory. A task resource can refer to a canonical task using `task_slug`, with optional configuration overrides. `npm run build` resolves that reference into a self-contained snapshot in `bundled/`, assigns a content revision, and generates documentation under `docs/recipes/`. Do not edit generated files by hand. `npm test` checks that bundles and documentation match their sources.

The importer accepts `kind: mechanic_recipe`, `version: 1`, and explicit typed bindings. It rejects unsupported resource types or binding targets. Bindings connect resource IDs, generated event topics, and destination inputs; they never rewrite Liquid code or execute setup scripts.

The Forms picker offers nine form templates through **Review → Add to store**. Gift messages use the fulfillment email task; cart quotes use the draft-order task; the other seven use the shared team-email task. Reviewing or continuing to placement does not install resources. **Publish form** connects and enables the appropriate task and webhook (when needed) for the existing form, checks access, then publishes. Theme placement remains in Shopify’s theme editor. Existing setups reopen for editing without creating copies.

Built-in form templates in both libraries open the same Review → Add to store guide as Forms. The three entries are team-email submissions (Basic form), cart quotes and gift messages. They create only the form draft on entry; Publish connects and enables the task. Private/custom imports retain configure/review/connect and create connected drafts with disabled tasks. There is no separate Recipes menu or management dashboard.

A template is a starting point. Catalog changes affect future setups, not an installed form or connection. Recognized canonical tasks remain subject to Mechanic’s normal library-task update rules; there is no whole-template upgrade. Source revisions are retained for support. The `mechanic_recipe` format and `recipes/` folder remain compatibility identifiers; visible labels and URLs use Templates and `/templates`.

Never include shop credentials, webhook URLs, customer submissions, or private fixture data in a template. Review task code and filters as well as option values. Use declared destination inputs for settings that must be chosen in the receiving shop.

Form resources preserve their destination. Storefront forms that save answers to the cart use `destination: cart` and must not bind `webhookId`. Product/variant visibility selections can bind to destination inputs under `visibility.rules`.

Customer account cards/pages are not yet supported by the Templates installer. Keep those packages out of the public catalog until those surfaces are implemented and qualified.

The first guided form outcomes are team email, cart submission to draft order, and gift email after full fulfillment. Sources bind the form and task together; incoming webhooks are included only when needed. `email_list` inputs bind an array of recipient addresses to ordinary task options.
