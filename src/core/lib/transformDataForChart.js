export const transformDataForChart = (newArr) => {
    return newArr.map(item => ({
        coefficient: item.coefficient,
        explosionTime: item.explosionTime.time
    }))
}