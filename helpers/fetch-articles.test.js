require('dotenv').config();

const fetchArticlesAsync = require('./fetch-articles');

const { DEV_API_KEY } = process.env;

describe('Does fetchArticles', () => {
  let articles;

  beforeAll(async () => {
    const devArticles = await fetchArticlesAsync({ apiKey: DEV_API_KEY });
    articles = devArticles;
  });

  test('returns a response', () => {
    const devArticles = { ...articles };
    expect(devArticles).toBeDefined();
  });

  test.each([
    ['slug'],
    ['body_markdown'],
    ['canonical_url'],
    ['cover_image'],
    ['comments_count'],
    ['description'],
    ['id'],
    ['page_views_count'],
    ['path'],
    ['public_reactions_count'],
    ['positive_reactions_count'],
    ['published'],
    ['published_at'],
    ['published_timestamp'],
    ['tag_list'],
    ['title'],
    ['type_of'],
    ['url'],
    ['user'],
  ])('return articles with the property %s', (property) => {
    const devArticles = { ...articles };
    expect(devArticles[0]).toHaveProperty(property);
  });
});
