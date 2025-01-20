/**
 * The Dictionary class is a data structure that maps keys to arrays of values, enabling efficient storage and retrieval of multiple values per key.
 * @template T
*/
export class Dictionary<T> {
    /**
     * Adds a value to a key in the dictionary. If the key is not in the dictionary, it will be added.
     * @param {string} key - The key to add the value to.
     * @param {...T} values - The values to add to the key.
     */
    add(key: string, ...values: T[]): void;
    /**
     * Returns an array of keys in the dictionary.
     * @returns {string[]} The keys in the dictionary.
     */
    keys(): string[];
    /**
     * Checks if a key exists in the dictionary.
     * @param {string} key - The key to check.
     * @returns {boolean} true if the key exists, false otherwise.
     */
    exists(key: string): boolean;
    /**
     * Returns the array of values for the given key.
     * @param {string} key - The key to retrieve the values for.
     * @returns {T[]|undefined} The array of values for the given key, or undefined if the key does not exist in the dictionary.
     */
    get(key: string): T[] | undefined;
    /**
     * Returns the last value associated with the given key in the dictionary.
     * @param {string} key - The key to retrieve the last value for.
     * @returns {T|undefined} The last value associated with the given key, or undefined if the key does not exist in the dictionary.
     */
    getLastValue(key: string): T | undefined;
    /**
     * Clears the values associated with the given key in the dictionary, setting it to an empty array.
     * @param {string} key - The key whose values are to be cleared.
     * @returns {void}
     */
    clear(key: string): void;
    /**
     * The number of keys in the dictionary.
     * @type {number}
     */
    get size(): number;
    /**
     * Removes the given key from the dictionary.
     * @param {string} key - The key to remove.
     */
    remove(key: string): void;
    /**
     * Removes all keys from the dictionary.
     */
    removeAll(): void;
    /**
     * Calls the given callback function for each value in the dictionary.
     * @param {(key:string, value:T)=>void} callback - The function to call for each value in the dictionary.
     */
    iterateAll(callback: (key: string, value: T) => void): void;
    /**
     * Calls the given callback function for each value associated with the given key in the dictionary.
     * @param {string} key - The key to retrieve the values for.
     * @param {(value:T)=>void} callback - The function to call for each value in the dictionary.
     */
    iterate(key: string, callback: (value: T) => void): void;
    #private;
}
//# sourceMappingURL=dictionary.esm.d.ts.map