export const transformDataForChart = data => data.map(item => ({
    coefficient: item.coefficient,
    explosionTime: item.explosionTime.time
}))