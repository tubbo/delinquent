# delinquent

A port of @kleampa's [not-paid.js][] to NPM. Wraps the logic in a function that you
can call anywhere.

## Usage

```javascript
const delinquent = require('delinquent');
const due_date = new Date('2017-02-27');

delinquent(due_date);
```

You can optionally pass a number of days before the site is fully
transparent. The default is `60`.

```javascript
const delinquent = require('delinquent');
const due_date = new Date('2017-02-27');
const deadline = 90

delinquent(due_date, deadline);
```

## Installation

This package is distributed over NPM!

```bash
yarn add delinquent
# ...or...
npm install delinquent --save
```

[not-paid.js]: https://github.com/kleampa/not-paid
[kleampa]: https://github.com/kleampa
