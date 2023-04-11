import { configureStore } from "@reduxjs/toolkit";

import {rocketonStatisticsSlice } from "./slice";

export const store = configureStore({
    reducer: {
        [rocketonStatisticsSlice.name]: rocketonStatisticsSlice.reducer,
    }
});

