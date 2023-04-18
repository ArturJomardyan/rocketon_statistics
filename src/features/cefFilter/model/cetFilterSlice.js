import {createSelector, createSlice} from "@reduxjs/toolkit";

export const cefFilterSlice = createSlice({
    name: "cefFilterSlice",
    initialState: {
        cefFilters: []
    },
    reducers: {
        setData: (state, {payload}) => {
            state.cefFilters[payload.index] = payload.data
        }
    }
});

export const {setData} = cefFilterSlice.actions

const selectState = state => state[cefFilterSlice.name];

const selectCefFilter = createSelector(selectState, state => state.cefFilters);

export const selectCefFilterById = createSelector(
    selectCefFilter,
    (state, id) => id,
    (data, id) => data[id]
);

