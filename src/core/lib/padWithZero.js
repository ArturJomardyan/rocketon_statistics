/**
 Prefixes a single-digit number with a leading zero to ensure it always has two digits.
 @function
 @param {number} time - The number to be prefixed with zero.
 @returns {string} - The number with a leading zero if it is a single-digit number.

 @example
 const time1 = 5;
 const time2 = 12;
 const timeStr1 = padWithZero(time1);
 const timeStr2 = padWithZero(time2);
 console.log(timeStr1); // Output: "05"
 console.log(timeStr2); // Output: "12"
 */
export const padWithZero = time => time < 10 ? "0" + time : "" + time;