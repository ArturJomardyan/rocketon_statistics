import {createSelector, createSlice} from "@reduxjs/toolkit";

export const rocketonStatisticsSlice = createSlice({
    name: "rocketonStatistics",
    initialState: {
        data: []
    },
    reducers: {
        setData: (state, {payload}) => {
            state.data = payload.map(arr => ({rawData: arr}))
        },
        setNewData: (state, {payload}) => {
            state.data[payload.index] = {...state.data[payload.index], ...payload.data}
        },
    }
});

export const {setData,setNewData} = rocketonStatisticsSlice.actions

const selectState = state => state[rocketonStatisticsSlice.name];

export const selectStatisticsData = createSelector(selectState, state => state.data);

export const selectStatisticsDataById = createSelector(
    selectStatisticsData,
    (state, id) => id,
    (data, id) => data[id]
);




