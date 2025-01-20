// @ts-check

/**
 * The Dictionary class is a data structure that maps keys to arrays of values, enabling efficient storage and retrieval of multiple values per key.
 * @template T 
*/
class Dictionary {
    /** @type {Map<string, T[]>} */
    #items = new Map();

    /**
     * Adds a value to a key in the dictionary. If the key is not in the dictionary, it will be added.
     * @param {string} key - The key to add the value to.
     * @param {...T} values - The values to add to the key.
     */
    add(key, ...values) {
        if (!this.#items.has(key)) {
            this.#items.set(key, []);
        }

        let item = this.#items.get(key) || [];
        item.push(...values);
    }

    /**
     * Returns an array of keys in the dictionary.
     * @returns {string[]} The keys in the dictionary.
     */
    keys() {
        return Array.from(this.#items.keys());
    }

    /**
     * Checks if a key exists in the dictionary.
     * @param {string} key - The key to check.
     * @returns {boolean} true if the key exists, false otherwise.
     */
    exists(key) {
        return this.#items.has(key);
    }

    /**
     * Returns the array of values for the given key.
     * @param {string} key - The key to retrieve the values for.
     * @returns {T[]|undefined} The array of values for the given key, or undefined if the key does not exist in the dictionary.
     */
    get(key) {
        return this.#items.get(key);
    }

    /**
     * Returns the last value associated with the given key in the dictionary.
     * @param {string} key - The key to retrieve the last value for.
     * @returns {T|undefined} The last value associated with the given key, or undefined if the key does not exist in the dictionary.
     */
    getLastValue(key) {
        if (this.#items.has(key)) {
            let values = this.#items.get(key) || [];
            return values[values.length - 1];
        }

        return undefined;
    }

    /**
     * Clears the values associated with the given key in the dictionary, setting it to an empty array.
     * @param {string} key - The key whose values are to be cleared.
     * @returns {void}
     */
    clear(key) {
        this.#items.set(key, []);
    }

    /**
     * The number of keys in the dictionary.
     * @type {number}
     */
    get size() {
        return this.#items.size;
    }

    /**
     * Removes the given key from the dictionary.
     * @param {string} key - The key to remove.
     */
    remove(key) {
        this.#items.delete(key);
    }

    /**
     * Removes all keys from the dictionary.
     */
    removeAll() {
        this.#items.clear();
    }


    /**
     * Calls the given callback function for each value in the dictionary.
     * @param {(key:string, value:T)=>void} callback - The function to call for each value in the dictionary.
     */
    iterateAll(callback) {
        this.#items.forEach((array, key) => {
            for (let i = 0; i < array.length; i++) {
                try {
                    callback(key, array[i]);
                } catch (e) {
                    console.error(e);
                }
            }
        });
    }

    /**
     * Calls the given callback function for each value associated with the given key in the dictionary.
     * @param {string} key - The key to retrieve the values for.
     * @param {(value:T)=>void} callback - The function to call for each value in the dictionary.
     */
    iterate(key, callback) {
        if (this.#items.has(key)) {
            let values = this.#items.get(key) || [];

            for (let i = 0; i < values.length; i++) {
                try {
                    callback(values[i]);
                } catch (e) {
                    console.error(e);
                }
            }
        }
    }

}

export { Dictionary };