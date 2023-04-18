import {cefHistories, conditionalConcatenate, formatDate, formatDuration, formatTime, getDurationObj} from "@/core";


const getFirstAndLastTime = (data) => {
    const startTime = formatTime(data.at(0).time)
    const endTime = formatTime(data.at(-1).time)

    return {
        startTime,
        endTime,
    }
}

const getFirstAndLastDate = (data) => {
    const startDate = formatDate(data.at(0).time)
    const endDate = formatDate(data.at(-1).time)

    return {
        startDate,
        endDate,
    }
}

export const getCount = (data) => data.length

export const getDateRange = (data) => {
    const {startDate, endDate} = getFirstAndLastDate(data)

    return conditionalConcatenate(startDate, endDate)
}

export const getTimeRange = (data) => {
    const {startTime, endTime} = getFirstAndLastTime(data)

    return conditionalConcatenate(startTime, endTime)
}

export const getDuration = (data) => {
    const startTime = data.at(0).time
    const endTime = data.at(-1).time

    const diff = endTime - startTime
    const {hours, minutes, seconds} = getDurationObj(diff)

    return formatDuration({hours, minutes, seconds})
}

export const getMaxCef = (data) => {
    const cefArr = data.map(game => game.cef)

    return Math.max(...cefArr)
}

export const getMainStatisticsData = (id) => {
    const {data} = cefHistories.find(history => history.id === id)

    const count = getCount(data);
    const dateRange = getDateRange(data);
    const timeRange = getTimeRange(data);
    const duration = getDuration(data);
    const maxCef = getMaxCef(data);

    return {
        count,
        dateRange,
        timeRange,
        duration,
        maxCef
    }
}
