import {conditionalConcatenate, formatDate, formatDuration, formatTime, getDurationObj} from "@/core";


export const transformDataForFixDashboard = (data) => {
    const firstGameExplosionTime = data.at(1).explosionTime;
    const lastGameExplosionTime = data.at(-1).explosionTime;

    const startDate = formatDate(firstGameExplosionTime);
    const endDate = formatDate(lastGameExplosionTime);
    const dateRange = conditionalConcatenate(startDate,endDate);

    const startTime = formatTime(firstGameExplosionTime)
    const endTime = formatTime(lastGameExplosionTime)
    const timeRange = `${startTime} - ${endTime}`

    const count = data.length
    const maxCoefficient = Math.max(...data.map(item => item.coefficient)).toFixed(0)

    const diff = lastGameExplosionTime - firstGameExplosionTime
    const durationObj = getDurationObj(diff);
    const duration = formatDuration(durationObj)

    return {
        duration,
        dateRange,
        timeRange,
        count,
        maxCoefficient,
    }
}

