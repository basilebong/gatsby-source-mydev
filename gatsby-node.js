/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const createDevNode = require('./helpers/create-dev-node');
const fetchArticlesAsync = require('./helpers/fetch-articles');

/**
 * Add dev.to source to gatsby
 * @param {Object} param0
 * @param {any} param0.actions - Gatsby actions
 * @param {any} param0.createNodeId - Gatsby createNodeId
 * @param {any} param0.createContentDigest - Gatsby createContentDigest
 * @param {Object} param1
 * @param {string} param1.apiKey - Personal dev.to apiKey
 * @returns {void}
 */
exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }, { apiKey }) => {
  const { createNode } = actions;

  // Download data from a remote API.
  const articles = await fetchArticlesAsync({ apiKey });
  articles.map((a) => createNode({
    ...createDevNode({
      data: a, key: 'article', createNodeId, createContentDigest,
    }),
  }));

  return false;
};
