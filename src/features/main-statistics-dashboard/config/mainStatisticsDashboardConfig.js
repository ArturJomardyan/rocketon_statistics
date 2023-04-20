import {dashboardConfig} from "@/entities/dashboard";

import {All_COUNT, DATE, DURATION, MAX_COEFFICIENT, TIME} from "./constants";

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
            icon: dashboardConfig.ICON_SIGNAL_FILLED
        },
        {
            title: DATE,
            value: data.dateRange,
            icon: dashboardConfig.ICON_CALENDAR_FILLED
        },
        {
            title: TIME,
            value: data.timeRange,
            icon: dashboardConfig.ICON_CLOCK_CIRCLE_FILLED
        },
        {
            title: DURATION,
            value: data.duration,
            icon: dashboardConfig.ICON_PIE_CHART_FILLED
        },
        {
            title: MAX_COEFFICIENT,
            value: data.maxCef,
            icon: dashboardConfig.ICON_STAR_FILLED
        }
    ]
}