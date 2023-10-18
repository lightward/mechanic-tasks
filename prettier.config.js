const shopifyPrettierConfig = require('@shopify/prettier-config');

const config = {
  ...shopifyPrettierConfig,
  overrides: [
    {
      files: '*.json',
      options: {
        parser: 'json-stringify',
      },
    },
  ],
};

module.exports = config;
