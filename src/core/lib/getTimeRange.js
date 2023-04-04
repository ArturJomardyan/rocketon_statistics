import {millisecondsToTimeAndDate} from "./timeTransform";

export const getTimeRange = (data) => {
    return {
        startTime: `${millisecondsToTimeAndDate(data[0].explosionTime).time}/${millisecondsToTimeAndDate(data[0].explosionTime).date}`,
        endTime: `${millisecondsToTimeAndDate(data.at(-1).explosionTime).time}/${millisecondsToTimeAndDate(data.at(-1).explosionTime).date}`
    }
}