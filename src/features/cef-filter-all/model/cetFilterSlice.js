import {createSelector, createSlice} from "@reduxjs/toolkit";

export const cefFilterInitialState = {
    from: 1,
    to: 1000000,
    timeFrom:1,
    timeTo:24
};

export const cefFilterSlice = createSlice({
    name: "cefFilterSlice",
    initialState: {
        cefFilters: cefFilterInitialState
    },
    reducers: {
        setCefFilter: (state, {payload}) => {
            state.cefFilters = payload
        }
    }
});

export const {name, reducer} = cefFilterSlice

export const {setCefFilter} = cefFilterSlice.actions

const selectState = state => state[cefFilterSlice.name];

export const selectCefFilters = createSelector(selectState, state => state.cefFilters);


