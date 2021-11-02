
const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const food = require('./food');
const categories = require('./categories');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...food
};