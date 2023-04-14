import {createSelector, createSlice} from '@reduxjs/toolkit';

import {cefHistories} from "@/core";


const initialState = cefHistories.map((data, index) => ({id: index + 1, data,}));

const dataCollectorSlice = createSlice({
    name: 'dataCollector',
    initialState,
});

export const {reducer, name} = dataCollectorSlice;

const selectState = createSelector(state => state)

