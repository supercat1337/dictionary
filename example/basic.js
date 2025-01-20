// @ts-check

import { Dictionary } from "../dist/dictionary.esm.js";

const dictionary = new Dictionary();
dictionary.add('key', 'value');
dictionary.add('key', 'value2');
// same as dictionary.add('key', 'value', 'value2');

dictionary.add('key2', 'value3');

console.log(dictionary.getLastValue('key')); // 'value2'
console.log(dictionary.get('key')); // ['value', 'value2']
console.log(dictionary.keys()); // ['key', 'key2']
console.log(dictionary.size); // 2

dictionary.clear('key');
console.log(dictionary.get('key')); // []

dictionary.remove('key');
console.log(dictionary.get('key')); // undefined

dictionary.removeAll();
console.log(dictionary.size); // 0

dictionary.add('key', 'value', 'value2');
dictionary.add('key2', 'value3');

dictionary.iterateAll((key, value) => {
    console.log(key, value);
});
// "key", "value"
// "key", "value2"
// "key2", "value3"