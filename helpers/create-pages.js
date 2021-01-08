/**
 * Generate static pages from dev.to articles with Gatsby
 * @param {Object} param0 - options
 * @param {any} param0.createPage - Gatsby createPage
 * @param {any} param0.graphql - Gatsby graphql
 * @param {any} param0.reporter - Gatsby reporter
 * @param {String} param0.template - React component as string
 */
module.exports = async ({
  createPage, graphql, reporter, template,
}) => {
  const result = await graphql(`
      query {
          allMyDev {
          nodes {
              article {
              body_markdown
              canonical_url
              comments_count
              cover_image
              description
              id
              page_views_count
              path
              positive_reactions_count
              public_reactions_count
              published
              published_at
              published_timestamp
              slug
              tag_list
              title
              type_of
              url
              user {
                  github_username
                  name
                  profile_image
                  profile_image_90
                  twitter_username
                  username
                  website_url
              }
          }
        }
      }
    }
  `);
    // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }
  result.data.allMyDev.nodes.forEach(({ article }) => {
    createPage({
      path: `blog/${article.slug}`,
      component: template,
      context: {
        article,
      },
    });
  });
};
