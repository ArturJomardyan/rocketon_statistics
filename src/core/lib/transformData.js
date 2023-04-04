import {getTwoTimeDiff} from "./getTwoTimeDiff";
import {transformDataForChart} from "./transformDataForChart";
import {transformDataForDashboards} from "./transformDataForDashboards";

export const transformData = (arr) => {
    const duration = getTwoTimeDiff(arr.at(1).explosionTime, arr.at(-1).explosionTime)

    const dashboardData = transformDataForDashboards(arr)

    const startDate = dashboardData.at(1).explosionTime.date
    const startTime = dashboardData.at(1).explosionTime.time
    const endTime = dashboardData.at(-1).explosionTime.time
    const endDate = dashboardData.at(-1).explosionTime.date

    const count = dashboardData.length
    const maxCoefficient = Math.max(...dashboardData.map(item => item.coefficient))

    const filter = 50
    const coefficients = transformDataForChart(dashboardData,filter)

    return {
        duration,
        startDate,
        endDate,
        startTime,
        endTime,
        count,
        maxCoefficient,
        coefficients
    }
}



