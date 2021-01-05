'use strict';

const axios = require('axios');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  async afterCreate(result, data) {
    axios.post('https://api.netlify.com/build_hooks/5ff47573b22751013c824921');
  },
  async afterUpdate(result, params, data) {
    axios.post('https://api.netlify.com/build_hooks/5ff47573b22751013c824921');
  },
};
