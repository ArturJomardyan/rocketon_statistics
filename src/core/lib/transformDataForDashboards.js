import {millisecondsToTimeAndDate} from "./timeTransform";

export const transformDataForDashboards = (data) => {
    return data.map(item => ({
        coefficient: item.coefficient,
        explosionTime: millisecondsToTimeAndDate(item.explosionTime)
    }))
}