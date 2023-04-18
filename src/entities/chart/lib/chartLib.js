import {formatTime} from "@/core";

export const transformCharts = (data) => {
    return data.map(item => ({
        id: item.id,
        data: item.data.map(item => ({
            cef: item.cef,
            time: formatTime(item.time)
        }))
    }));
};