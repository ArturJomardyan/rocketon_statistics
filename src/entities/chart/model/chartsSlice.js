import {createSelector, createSlice} from "@reduxjs/toolkit";

import {transformCharts} from "../lib";

export const chartsSlice = createSlice({
    name: "chartsSlice",
    initialState: {
        charts: []
    },
    reducers: {
        setCharts: (state, {payload}) => {
            state.charts = transformCharts(payload)
        }
    }
})

export const {name, reducer} = chartsSlice

export const {setCharts} = chartsSlice.actions

const selectChartSlice = state => state.chartsSlice

export const selectCharts = createSelector(selectChartSlice, state => state.charts)

export const selectChartById = createSelector(
    selectCharts,
    (state, id) => id,
    (charts, id) => charts[id]
);
