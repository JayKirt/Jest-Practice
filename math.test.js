const { add } = require('./math');

test('addition of 1 and 2 should return 3', () => {
  expect(add(1, 2)).toBe(3);
});