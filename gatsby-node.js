/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const createDevNode = require('./helpers/create-dev-node');
const fetchArticlesAsync = require('./helpers/fetch-articles');
const createPagesAsync = require('./helpers/create-pages');

/**
 * Add dev.to source to gatsby
 * @param {Object} param0 - Gatsby options
 * @param {*} param0.actions - Gatsby actions
 * @param {*} param0.createNodeId - Gatsby createNodeId
 * @param {*} param0.createContentDigest - Gatsby createContentDigest
 * @param {Object} param1 - Config options
 * @param {String} param1.apiKey - Personal dev.to apiKey
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

/**
 * Generate static pages
 * @param {Object} param0 - Gatsby options
 * @param {*} param0.actions - Gatsby actions
 * @param {*} param0.graphql - Gatsby graphql
 * @param {*} param0.reporter - Gatsby reporter
 * @param {Object} param1 - Config options
 * @param {String} param1.template - React component as string
 */
exports.createPages = async (
  { actions, graphql, reporter },
  { template = null },
) => {
  const { createPage } = actions;

  if (template) {
    await createPagesAsync({
      template,
      createPage,
      graphql,
      reporter,
    });
  }
};
