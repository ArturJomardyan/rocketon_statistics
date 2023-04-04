export const transformDataForChart = (newArr, filter = 0) => {
    return newArr.filter(item => item.coefficient > filter).map(item => ({
        coefficient: item.coefficient,
        explosionTime: item.explosionTime.time
    }))
}