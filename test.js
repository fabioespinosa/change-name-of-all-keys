import test from 'ava';
import changeNameOfAllKeys from '.';

const convertion_operator = {
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

const original_object_2 = {
    '>': 23,
    and: [
        {
            '>': 44,
            '<': 46,
            or: {
                like: 'bye',
                notlike: 'hello'
            }
        },
        { like: '%hola%' },
        { like: '%hello' }
    ]
};

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

const resulting_object_2 = {
    'Op.gt': 23,
    'Op.and': [
        {
            'Op.gt': 44,
            'Op.lt': 46,
            'Op.or': {
                'Op.like': 'bye',
                'Op.notLike': 'hello'
            }
        },
        { 'Op.like': '%hola%' },
        { 'Op.like': '%hello' }
    ]
};

test('change name to all attributes', t => {
    t.deepEqual(
        changeNameOfAllKeys(original_object, convertion_operator),
        resulting_object
    );
});

test('change name to all attributes including array', t => {
    t.deepEqual(
        changeNameOfAllKeys(original_object_2, convertion_operator),
        resulting_object_2
    );
});
