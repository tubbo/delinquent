const delinquent = require('./index');

test('opacity', () => {
  document.body.innerHTML = '<h1 id="title">welcome to nginx</h1>';
  delinquent(new Date('2017-02-27'));

  expect(document.getElementById('title').style.opacity).not.toBe(100);
});
