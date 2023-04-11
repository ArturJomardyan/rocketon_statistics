import dayjs from "dayjs";

export const transformDataForChart = (data) => {
    console.log(data)
    return data?.map(item => ({
        coefficient: item.coefficient,
        explosionTime: dayjs(item.explosionTime).format("hh:mm:ss")
    }))
}