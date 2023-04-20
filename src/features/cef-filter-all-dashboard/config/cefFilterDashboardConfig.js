import {
    ICON_SIGNAL_FILLED,
    ICON_DOT_CHART_OUTLINED,
    ICON_CLOCK_CIRCLE_FILLED,
} from "@/entities/dashboard/config";
import {
    FILTERED_COUNT,
    MAX_EXCEPTION_TIME,
    MAX_EXPECTATION_GAMES_COUNT
} from "@/features/cef-filter-all-dashboard/config/constants";


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