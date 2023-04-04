/*
* millisecond to time
* input --> 1679564683000
* output --> {time: '13:44:43', date: '23.03.23'}
*
* */
export const millisecondsToTimeAndDate = (data) => {
    data = new Date(data)
    const hours = data.getHours().toString().padStart(2, '0');
    const minutes = data.getMinutes().toString().padStart(2, '0');
    const seconds = data.getSeconds().toString().padStart(2, '0');
    const date = data.getDate().toString().padStart(2, '0');
    const month = (data.getMonth() + 1).toString().padStart(2, '0');
    const year = data.getFullYear().toString().substring(2);

    return {time: `${hours}:${minutes}:${seconds}`, date: `${date}.${month}.${year}`};
}

/*
* time to millisecond
* input -->  {time: '13:44:43', date: '23.03.23'}
* output --> 1679564683000
* */
export function timeAndDateToMilliseconds(explosionTime) {
    const {time, date} = explosionTime;
    const year = parseInt(date.slice(-2)) + 2000;
    const month = parseInt(date.slice(3, 5)) - 1;
    const day = parseInt(date.slice(0, 2));
    const hour = parseInt(time.slice(0, 2));
    const minute = parseInt(time.slice(3, 5));
    const second = parseInt(time.slice(6, 8));
    const dateObj = new Date(year, month, day, hour, minute, second);
    return +dateObj;
}