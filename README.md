# mechanic-tasks

All of the tasks included here work with [Mechanic](https://usemechanic.com), a programming and automation tool for Shopify.

**For a list of all tasks and their documentation, see [docs/README.md](./docs/README.md).** Each task documentation page links to the corresponding JSON export for the task, located in [tasks/](./tasks/) (see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks)).

To learn about contributing to this task repository, see [CONTRIBUTING.md](./CONTRIBUTING.md).

### More resources

* [Official website](https://usemechanic.com/)
* [Documentation](https://docs.usemechanic.com/)
* [Mechanic on the Shopify App Store](https://apps.shopify.com/mechanic)

### Building the docs

Building the docs requires node >=12.10.0, and yarn.

```sh
yarn          # install dependencies
npm run build # compile docs
npm run test  # apply sanity checks
```
