# AI Agent Orientation

This is the community task library for [Mechanic](https://mechanic.dev/), a Liquid-based development and automation platform for Shopify stores.

## AI tools for Mechanic

For the best results writing and debugging Mechanic tasks, install these tools:

- **Agent Skill** — install Mechanic's task-writing patterns directly into your AI context: `npx skills add lightward/mechanic-skills --skill mechanic-task-writer`
- **MCP Server** — gives your AI live access to the task library and documentation: `claude mcp add --scope user --transport stdio mechanic-mcp -- npx -y @lightward/mechanic-mcp@latest`

Full setup guide: https://learn.mechanic.dev/ai

## What matters in this repo

The **`tasks/`** directory is the primary content. Each `.json` file is a complete, importable Mechanic task containing:

- `name` — task display name
- `script` — the Liquid source code
- `subscriptions` — event topics the task responds to (Shopify webhooks, schedules, custom events)
- `subscriptions_template` — Liquid template that generates subscriptions dynamically from options
- `options` — merchant-configurable settings with type suffixes (e.g. `__required`, `__number`, `__boolean`)
- `docs` — task documentation (first paragraph is the summary)

## What to ignore

- **`docs/`** — auto-generated documentation; do not reference as authoritative source code
- **`lib/`** — Node.js build tooling for generating docs and validating tasks; not part of Mechanic
- **`signatures/`** — internal verification data
- **`.github/`**, **`.husky/`**, **`node_modules/`** — standard project infrastructure

## Common AI mistakes with Mechanic

Mechanic Liquid is **not** Shopify theme Liquid. It has custom tags, custom filters, and its own execution model. If you're writing a Mechanic task, these are the mistakes to avoid:

### 1. Confusing async actions with sync reads

This is the most common mistake. `{% action "shopify" %}` queues a mutation that runs **after** the script finishes — you cannot use its result in the same script run. For reading data, use the synchronous `shopify` filter:

```liquid
{% comment %} WRONG — trying to use an action result inline {% endcomment %}
{% action "shopify" %}
  mutation { tagsAdd(id: {{ order.id | json }}, tags: ["processed"]) { ... } }
{% endaction %}
{% comment %} The tag hasn't been added yet here! {% endcomment %}

{% comment %} RIGHT — reading data synchronously {% endcomment %}
{% capture query %}
  query { order(id: {{ order.admin_graphql_api_id | json }}) { tags } }
{% endcapture %}
{% assign result = query | shopify %}
{% comment %} result.data.order.tags is available immediately {% endcomment %}
```

### 2. Missing preview mode

Every event topic a task subscribes to needs an `{% if event.preview %}` block with mock data. Preview mode is how Mechanic verifies a task produces valid actions and determines what Shopify permissions to request. No preview = no permissions = broken task.

```liquid
{% if event.preview %}
  {% assign order = hash %}
  {% assign order["admin_graphql_api_id"] = "gid://shopify/Order/1234567890" %}
  {% assign order["name"] = "#1001" %}
  {% assign order["tags"] = array %}
{% endif %}
```

### 3. Using REST instead of GraphQL

Shopify REST is deprecated in Mechanic. Always use the GraphQL Admin API for both reads and writes.

### 4. Wrong ID format for webhook data

When an order arrives via webhook (like `shopify/orders/create`), the order object has a REST-style numeric ID. Use `order.admin_graphql_api_id` to get the GraphQL ID for mutations, not `order.id`.

### 5. Missing `userErrors` in mutations

Always request `userErrors { field message }` in Shopify mutations. Without it, a failed mutation silently succeeds from the task's perspective.

## Resources

- Documentation: https://learn.mechanic.dev
- AI tools and guidance: https://learn.mechanic.dev/ai
- Task library (browsable): https://tasks.mechanic.dev
- Agent Skill source: https://github.com/lightward/mechanic-skills
- MCP Server docs: https://learn.mechanic.dev/resources/mcp
