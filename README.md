# delinquent

A port of [not-paid.js][] to NPM. Wraps the logic in a function that you
can call anywhere.

## Usage

```javascript
const delinquent = require('delinquent');
const due_date = new Date('2017-02-27');

delinquent(due_date);
```

## Installation

This package is distributed over NPM!

```bash
yarn add delinquent
# ...or...
npm install delinquent --save
```

[not-paid.js]: https://github.com/kleampa/not-paid
