/**
* It takes a js valid date format...
* "2018-12-30"
* "2018-12-30T20:59"
* "2018-12-30T20:59:00"
* "2018-12-30T20:59:00.000Z"
* "2018-12-30T20:59:00.000+01:00"
* "2018-12-30T20:59:00.000-01:00"
* 1680879549744 ms.
 *
* ...and returns an object with the date's seconds, minutes, hours, day, month, and year.
*
* @example
* splitDate("2018-12-30T20:59:07") OUTPUT => {
*   day: 30,
*   hours: 20,
*   minutes: 59,
*   month: 12,
*   seconds: 7,
*   year: 2018
* }
*/
export const splitDate = date => {
    date = new Date(date);

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return {
        seconds,
        minutes,
        hours,
        day,
        month,
        year
    };
};
