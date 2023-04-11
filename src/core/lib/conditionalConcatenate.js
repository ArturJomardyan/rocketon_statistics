/**
 Generates a date range string based on the given start and end dates.
 If the start and end dates are the same, it returns only the start date.

 @function
 @param  str1 - The start date.
 @param  str2 - The end date.
 @returns {string} - The date range string. Example: "29.03.23 - 30.03.23"

 @example
 const str1 = "29.03.23"
 const str2 = "30.03.23"
 const dateRange = getDateRange(str1, str2);
 console.log(dateRange); // Output: "29.03.23 - 30.03.23"

 const str1 = "29.03.23"
 const str2 = "29.03.23"
 const dateRange = getDateRange(str1, str2);
 console.log(dateRange); // Output: "29.03.23"
 */
export const conditionalConcatenate = (str1, str2) => str1 === str2 ? str1 : str1 + " - " + str2
