/**
 * Calculates differences between consecutive items in an array.
 *
 * @example
 * const inputArray = [7, 12, 42, 45, 56];
 * const result = getMaxDiff(inputArray);
 * 12 - 7 = 5
 * 42 - 12 = 30
 * 45 - 42 = 3
 * 56 - 45 = 11
 * console.log(result); // Output: [5,30,3,11]
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {number[]} arr - The array of numbers, differences between consecutive elements in the array.
 * @throws {TypeError} - If input is not an array or contains non-numeric values.
 * @throws {RangeError} - If input array has less than 2 elements.
 */
export const getConsecutiveDiffs = arr => {
    let diffArray = [];
    for (let i = 1; i < arr.length; i++) diffArray.push(arr[i] - arr[i - 1]);
    return diffArray;
}

