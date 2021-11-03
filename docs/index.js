
const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const food = require('./food');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...food,
};