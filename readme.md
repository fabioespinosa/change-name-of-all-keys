# change-name-of-all-keys

> Change name the key of all attributes of an object given a hash, children as well (handy utility)

## Install

```
$ npm install change-name-of-all-keys
```

## Usage

```js
const changeNameOfAllKeys = require('change-name-of-all-keys');

const original_object = {
    '>': 23,
    and: {
        '>': 44,
        '<': 46,
        or: {
            like: 'bye',
            notlike: 'hello'
        }
    }
};

const hash = {
    or: 'Op.or',
    and: 'Op.and',
    '>': 'Op.gt',
    '<': 'Op.lt',
    '>=': 'Op.gte',
    '<=': 'Op.lte',
    like: 'Op.like',
    notlike: 'Op.notLike',
    '=': 'Op.eq',
    '<>': 'Op.n'
};

appendToAllAttributes(original_object, hash);

//=>
const resulting_object = {
    'Op.gt': 23,
    'Op.and': {
        'Op.gt': 44,
        'Op.lt': 46,
        'Op.or': {
            'Op.like': 'bye',
            'Op.notLike': 'hello'
        }
    }
};
```

## License

MIT © [Fabio Espinosa](http://fabioespinosa.mit.edu)
