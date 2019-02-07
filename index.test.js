const delinquent = require('./index');

test('opacity', () => {
  delinquent(new Date('2017-02-27'));

  const body = document.getElementsByTagName("BODY")[0];

  expect(body.style.opacity).toBe('0');
});
