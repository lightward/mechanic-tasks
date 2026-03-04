# mechanic-tasks

The community task library for [Mechanic](https://mechanic.dev/), a development and automation platform for Shopify. This repository contains 350+ pre-built automation tasks that can be imported directly into any Mechanic account.

## What's in this repo

* **[tasks/](./tasks/)** — JSON exports of Mechanic tasks. Each file is a complete, importable task containing a Liquid script, event subscriptions, configuration options, and documentation. This is the primary content of the repository.
* **[docs/](./docs/)** — Auto-generated documentation for each task. **Do not edit these files directly** — they are rebuilt from the task JSON by `npm run build`.
* **[lib/](./lib/)** — Build tools and the task JSON schema. These are infrastructure for validating and documenting tasks — they are not part of the Mechanic platform.

For a browsable version of the task library, visit [tasks.mechanic.dev](https://tasks.mechanic.dev/).

## About Mechanic

Mechanic is a Liquid-based automation platform for Shopify stores. Tasks are event-driven scripts that respond to Shopify webhooks, scheduled events, or manual triggers. Each task can read Shopify data via GraphQL, perform mutations, send emails, call external APIs, generate files, and more.

Tasks are written in [Mechanic's extended Liquid](https://learn.mechanic.dev/platform/liquid) — not standard Shopify theme Liquid. Key differences include custom action tags (`{% action "shopify" %}`, `{% action "email" %}`), the `shopify` filter for inline GraphQL queries, and preview mode for testing.

For full documentation, see [learn.mechanic.dev](https://learn.mechanic.dev/).

## Using AI with Mechanic

Mechanic offers dedicated AI tools for writing, debugging, and understanding tasks. If you're using an AI assistant to work with Mechanic, see [learn.mechanic.dev/ai](https://learn.mechanic.dev/ai) for the best tools and guidance. Available resources include an MCP server, agent skills for AI coding tools, a Shopify Sidekick skill, and a ChatGPT GPT.

## Importing a task

Tasks can be imported into a Mechanic account using their JSON export. See [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) for instructions.

## Contributing

New and updated tasks are accepted via pull request. See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Building the docs

```sh
npm install   # install dependencies
npm run build # compile docs
npm test      # apply sanity checks
```

## More resources

* [Official website](https://mechanic.dev/)
* [Documentation](https://learn.mechanic.dev/)
* [Task library](https://tasks.mechanic.dev/)
* [Mechanic on the Shopify App Store](https://apps.shopify.com/mechanic)
* [AI tools and guidance](https://learn.mechanic.dev/ai)
