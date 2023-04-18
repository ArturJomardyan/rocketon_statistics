import {configureStore} from "@reduxjs/toolkit";

import {chartModel} from "@/entities/chart";

export const store = configureStore({
    reducer: {
        [chartModel.name]: chartModel.reducer,
    }
});

