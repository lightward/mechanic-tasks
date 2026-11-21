const util = require('./util');

util.formatJsonFiles();
util.buildDocs();
require('./recipes').buildRecipes();
