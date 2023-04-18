import {
    DATE,
    DURATION,
    All_COUNT,
    FILTERED_COUNT,
    MAX_EXCEPTION_TIME,
    MAX_EXPECTATION_GAMES_COUNT, TIME,
    ICON_SIGNAL_FILLED,
    ICON_CALENDAR_FILLED,
    ICON_PIE_CHART_FILLED,
    ICON_DOT_CHART_OUTLINED,
    ICON_CLOCK_CIRCLE_FILLED,
    ICON_STAR_FILLED, MAX_COEFFICIENT,
} from "./constants";


/**
 * @param {Object} data - The data object containing the statistics.
 * @param {number} data.maxExpectationGamesCount - The maximum expectation games count.
 * @param {string} data.maxExpectationTime - The maximum expectation time.
 * @param {number} data.count - The filtered count.
 *
 * @returns {Array} - An array of objects containing the statistics.
 */
export const getExpectationStatisticsConfig = (data) => {
    return [
        {
            title: MAX_EXPECTATION_GAMES_COUNT,
            value: data.maxExpectationGamesCount,
            icon: ICON_DOT_CHART_OUTLINED
        },
        {
            title: MAX_EXCEPTION_TIME,
            value: data.maxExpectationTime,
            icon: ICON_CLOCK_CIRCLE_FILLED
        },
        {
            title: FILTERED_COUNT,
            value: data.count,
            icon: ICON_SIGNAL_FILLED
        }
    ]
}

/**
 * @param {Object} data - The data object containing the main statistics.
 * @param {number} data.count - The count for all items.
 * @param {string} data.dateRange - The date range.
 * @param {string} data.timeRange - The time range.
 * @param {string} data.duration - The duration.
 * @param {number} data.maxCef - The maximum coefficient.
 *
 * @returns {Array} - An array of objects containing the main statistics.
 */
export const getMainStatisticsConfig = (data) => {

    return [
        {
            title: All_COUNT,
            value: data.count,
            icon: ICON_SIGNAL_FILLED
        },
        {
            title: DATE,
            value: data.dateRange,
            icon: ICON_CALENDAR_FILLED
        },
        {
            title: TIME,
            value: data.timeRange,
            icon: ICON_CLOCK_CIRCLE_FILLED
        },
        {
            title: DURATION,
            value: data.duration,
            icon: ICON_PIE_CHART_FILLED
        },
        {
            title: MAX_COEFFICIENT,
            value: data.maxCef,
            icon: ICON_STAR_FILLED
        }
    ]
}