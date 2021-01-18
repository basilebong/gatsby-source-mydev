const axios = require('axios');

const DEV_URL = 'https://dev.to/api/articles/me?page_count=1000';

/**
 * Fetch articles from dev.to
 * @param {Object} param0
 * @param {String} param0.apiKey - Personal dev.to API key
 */
module.exports = async ({ apiKey }) => {
  const config = {
    headers: {
      'api-key': apiKey,
    },
  };

  try {
    const data = await axios.get(DEV_URL, config);
    return data.data;
  } catch (error) {
    throw new Error('Unable to fetch data from dev.to. Did you use a valid API key?');
  }
};
