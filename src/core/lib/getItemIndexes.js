/**
 * Returns an array of indexes in the input array where the items are greater than the given item.
 * the first and last indexes of the passed array are also added regardless of the comparison
 *
 * @param {Array} arr - The input array.
 * @param {any} item - The item to compare against.
 * @returns {Array} - An array of indexes where the items are greater than the given item.
 *
 * @example
 * const arr = [1, 3, 5, 7, 9];
 * const item = 4;
 * const indexes = getItemIndexes(arr, item);
 * console.log(indexes); // Output: [0, 2, 4, 5]
 *
 * @function
 */
export const getIndexesGreaterThan = (arr, item) => {
    const indexes = [0];
    arr.forEach((el, i) => el > item && indexes.push(i))
    indexes.push(arr.length)

    return indexes
}