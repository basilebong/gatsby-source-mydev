Add your dev.to posts to your gatsby site!

## Install

```bash
npm i gatsby-source-mydev
```

## How to use

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-mydev`,
      options: {
        apiKey: `myApiKey15535186`,
      },
    },
  ],
}
```

**Note: It is recommended to use a .env file to store the API key.**

## How to query


```graphql
query MyQuery {
  allMyDev {
    nodes {
      article {
        slug
        body_markdown
        canonical_url
        cover_image
        comments_count
        description
        id
        page_views_count
        path
        public_reactions_count
        positive_reactions_count
        published
        published_at
        published_timestamp
        tag_list
        title
        type_of
        url
        user {
          github_username
          name
          profile_image
          twitter_username
          profile_image_90
          username
          website_url
        }
      }
    }
  }
}
```

## Additional information 

- [How to generate a DEV API key](https://docs.dev.to/api/#section/Authentication)
- [Detailed article on how to use the plugin](https://dev.to/basilebong/easily-add-your-dev-posts-to-any-gatsby-site-3fhe)

## Author

- [Basile Bong](https://basilebong.com)