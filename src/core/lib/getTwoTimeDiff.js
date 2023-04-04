import {prefixOneDigitWithZero} from "./prefixOneDigitWithZero";

export const getTwoTimeDiff = (time1, time2) => {
    const diffInMs = time2 - time1
    const diffInSec = Math.floor(diffInMs / 1000); // 1 sec = 1000 ms
    const diffInMinutes = Math.floor(diffInSec / 60);

    const seconds = prefixOneDigitWithZero(diffInSec % 60);
    const minutes = Math.floor(diffInMinutes % 60);
    const hours = Math.floor(diffInMinutes / 60);

    const hourStr = `${hours}h.`;
    const minuteStr = `${prefixOneDigitWithZero(minutes)}min.`;
    const secondStr = `${seconds}sec.`

    return `${hourStr}${minuteStr}${secondStr}`;
}