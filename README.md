# Dictionary

A simple data structure that maps keys to arrays of values, enabling efficient storage and retrieval of multiple values per key.

## Installation

You can install the package via npm:
`npm install @supercat1337/dictionary`

## Usage

Here is an example usage of the Dictionary class:
```js
import { Dictionary } from '@supercat1337/dictionary';

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

```
## Properties

### size

The number of keys in the dictionary.

## Methods

### add(key, value)

Adds a value to a key in the dictionary. If the key is not in the dictionary, it will be added.

### get(key)

Returns the values associated with a key in the dictionary. If the key is not in the dictionary, it will return an empty array.

### getLastValue(key)

Returns the last value associated with a key in the dictionary. If the key is not in the dictionary, it will return undefined.

### exists(key)

Checks if a key exists in the dictionary.

### clear(key)

Clears the values associated with the given key in the dictionary, setting it to an empty array.

### remove(key)

Removes a key and its associated values from the dictionary.

### removeAll(key)

Removes all keys and their associated values from the dictionary.

### keys()

Returns an array of keys in the dictionary.

### iterateAll(callback)

Calls the given callback function for each value in the dictionary.

### iterate(key, callback)

Calls the given callback function for each value associated with a key in the dictionary.

## License

MIT