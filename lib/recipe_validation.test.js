const assert = require('node:assert/strict');
const {validateRecipe} = require('./recipe_validation');
const base = () => ({
  name: 'Example recipe',
  description: '',
  resources: [
    {
      key: 'task',
      type: 'task',
      config: {name: 'Example task', script: '', options: {}},
    },
  ],
  inputs: [],
  bindings: [],
});
validateRecipe(base());
assert.throws(() => validateRecipe({...base(), revision: ''}), /revision/);
const rejects = (change, message) => {
  const recipe = base();
  change(recipe);
  assert.throws(() => validateRecipe(recipe), message);
};
rejects((r) => {
  r.resources[0].config.unexpected_setting = true;
}, /unsupported resource setting/);
rejects((r) => {
  r.inputs = [{key: 'name', label: 'x'.repeat(201)}];
}, /label/);
rejects((r) => {
  r.resources.push({key: 'form', type: 'form', config: {name: 'Example'}});
}, /Connect each form/);
rejects((r) => {
  r.resources.push({
    key: 'source',
    type: 'task',
    config: {name: 'Source', script: '', options: {}},
  });
  r.bindings = [
    {
      resource: 'task',
      path: ['options', 'topic'],
      source: {resource: 'source', output: 'topic'},
    },
  ];
}, /Invalid resource output/);
rejects((r) => {
  r.inputs = [{key: 'topic', label: 'Topic'}];
  r.bindings = [
    {
      resource: 'task',
      path: ['subscriptions_template'],
      source: {input: 'topic'},
    },
  ];
}, /must reference recipe resources/);
rejects((r) => {
  r.resources.push({
    key: 'webhook',
    type: 'webhook',
    config: {name: 'Incoming'},
  });
  r.bindings = [
    {
      resource: 'task',
      path: ['options', 'id'],
      source: {resource: 'webhook', output: 'id'},
    },
  ];
}, /Invalid resource output/);
rejects((r) => {
  r.resources.push({
    key: 'form',
    type: 'form',
    config: {name: 'Example', webhookId: 'shop-specific-token'},
  });
}, /unsupported resource setting/);
const connected = base();
connected.resources.push({
  key: 'webhook',
  type: 'webhook',
  config: {name: 'Incoming'},
});
connected.bindings = [
  {
    resource: 'task',
    path: ['options', 'topic'],
    source: {resource: 'webhook', output: 'topic'},
  },
];
validateRecipe(connected);
console.log('Recipe connection and setting checks passed.');

const cartRecipe = base();
cartRecipe.resources.push({
  key: 'cart',
  type: 'form',
  config: {name: 'Cart answers', destination: 'cart'},
});
validateRecipe(cartRecipe);
cartRecipe.resources.push({
  key: 'incoming',
  type: 'webhook',
  config: {name: 'Requests'},
});
cartRecipe.bindings.push({
  resource: 'cart',
  path: ['webhookId'],
  source: {resource: 'incoming', output: 'id'},
});
assert.throws(
  () => validateRecipe(cartRecipe),
  /Cart forms do not use a webhook/,
);
const orderRecipe = base();
orderRecipe.resources.push({
  key: 'order',
  type: 'form',
  config: {
    name: 'Order help',
    surface: 'order_status',
    placements: ['order_status'],
    showRequestStatus: true,
    availability: {rules: [{type: 'product', value: null}]},
  },
});
orderRecipe.resources.push({
  key: 'incoming',
  type: 'webhook',
  config: {name: 'Requests'},
});
orderRecipe.inputs = [
  {key: 'product', label: 'Product', type: 'product', required: true},
];
orderRecipe.bindings = [
  {
    resource: 'order',
    path: ['webhookId'],
    source: {resource: 'incoming', output: 'id'},
  },
  {
    resource: 'order',
    path: ['availability', 'rules', 0, 'value'],
    source: {input: 'product'},
  },
];
assert.throws(
  () => validateRecipe(orderRecipe),
  /unsupported resource setting/,
);
