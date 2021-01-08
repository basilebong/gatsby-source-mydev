/**
 * Create dev.to node meta
 * @param {Object} param0
 * @param {*} param0.data - The data from dev.to
 * @param {*} param0.key - Name of the data key
 * @param {*} param0.createNodeId - Gatsby createNodeId function
 * @param {*} param0.createContentDigest - Gatsby createContentDigest
 */
module.exports = ({
  data, key, createNodeId, createContentDigest,
}) => {
  const nodeMeta = {
    id: createNodeId(data.id),
    parent: '__SOURCE__',
    children: [],
    internal: {
      type: 'myDev',
      contentDigest: createContentDigest(data),
    },
  };

  nodeMeta[key] = data;

  return nodeMeta;
};
