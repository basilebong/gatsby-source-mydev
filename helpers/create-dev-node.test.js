const createDevNodes = require('./create-dev-node');

describe('The createDevNodes function', () => {
  test('adds key to object', () => {
    const node = createDevNodes({
      data: {},
      key: 'test',
      createContentDigest: jest.fn(),
      createNodeId: jest.fn(),
    });

    expect('test' in node).toBeTruthy();
  });

  test('passes the data to the node', () => {
    const data = {
      text: 'Lorem Ipsum',
      number: 5,
      hello: false,
    };

    const node = createDevNodes({
      data,
      key: 'test',
      createContentDigest: jest.fn(),
      createNodeId: jest.fn(),
    });

    expect(node.test).toBe(data);
  });
});
