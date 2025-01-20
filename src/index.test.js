// @ts-check

import test from 'ava';
import { Dictionary } from './index.js';

test('exists()', t => {
    const dictionary = new Dictionary();
    dictionary.add('key', 'value');
    t.true(dictionary.exists('key'));
});

test('keys()', t => {
    const dictionary = new Dictionary();
    dictionary.add('key', 'value');
    dictionary.add('key2', 'value');

    t.deepEqual(dictionary.keys(), ['key', 'key2']);
});

test('get()', t => {
    const dictionary = new Dictionary();
    dictionary.add('key', 'value');
    dictionary.add('key', 'value2');

    t.deepEqual(dictionary.get('key'), ['value', 'value2']);
});

test('getLastValue()', t => {
    const dictionary = new Dictionary();
    dictionary.add('key', 'value');
    dictionary.add('key', 'value2');

    t.deepEqual(dictionary.getLastValue('key'), 'value2');
});

test('getLastValue() returns undefined if key does not exist', t => {
    const dictionary = new Dictionary();
    t.deepEqual(dictionary.getLastValue('key'), undefined);
});

test('clear()', t => {
    const dictionary = new Dictionary();
    dictionary.add('key', 'value');
    dictionary.add('key', 'value2');

    dictionary.clear('key');
    t.deepEqual(dictionary.get('key'), []);
});

test('size', t => {
    const dictionary = new Dictionary();
    dictionary.add('key', 'value');
    dictionary.add('key', 'value2');

    t.is(dictionary.size, 1);
});

test('size 2', t => {
    const dictionary = new Dictionary();
    dictionary.add('key', 'value');
    dictionary.add('key', 'value2');

    dictionary.add('key2', 'value2');

    t.is(dictionary.size, 2);
});

test('remove', t => {
    const dictionary = new Dictionary();
    dictionary.add('key', 'value');
    dictionary.add('key', 'value2');

    dictionary.remove('key');

    t.false(dictionary.exists('key'));
});

test('removeAll', t => {
    const dictionary = new Dictionary();
    dictionary.add('key', 'value');
    dictionary.add('key', 'value2');

    dictionary.add('key2', 'value2');

    dictionary.removeAll();

    t.is(dictionary.size, 0);
});

test('iterateAll()', t => {
    const dictionary = new Dictionary();
    dictionary.add('key', 'value');
    dictionary.add('key', 'value2');

    dictionary.add('key2', 'value3');

    const result = [];
    dictionary.iterateAll((key, value) => {
        result.push([key, value]);
    });

    t.deepEqual(result, [['key', 'value'], ['key', 'value2'], ['key2', 'value3']]);
});

test('iterateAll() when callback throws does not crash', t => {
    const dictionary = new Dictionary();
    dictionary.add('key', 'value');
    dictionary.add('key', 'value2');

    dictionary.add('key2', 'value3');
    
    t.notThrows(() => {
        dictionary.iterateAll((key, value) => {
            throw new Error('should not be called');
        });            
    });

});

test('iterate()', t => {
    const dictionary = new Dictionary();
    dictionary.add('key', 'value');
    dictionary.add('key', 'value2');

    const result = [];
    dictionary.iterate('key', (value) => {
        result.push(value);
    });

    t.deepEqual(result, ['value', 'value2']);
});

test('iterate() when callback throws does not crash', t => {
    const dictionary = new Dictionary();
    dictionary.add('key', 'value');
    dictionary.add('key', 'value2');

    t.notThrows(() => {
        dictionary.iterate('key', (value) => {
            throw new Error('should not be called');
        });            
    });

});
