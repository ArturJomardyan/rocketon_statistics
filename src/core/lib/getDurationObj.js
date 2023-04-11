import dayjs from "dayjs";

let duration = require('dayjs/plugin/duration')
dayjs.extend(duration)

export const getDurationObj = ms => {
    const duration = dayjs.duration(ms);

    const seconds = duration.seconds();
    const minutes = duration.minutes();
    const hours = duration.hours();
    const days = duration.days();
    const months = duration.months()
    const years = duration.years()

    return {
        seconds,
        minutes,
        hours,
        days,
        months,
        years
    }
}