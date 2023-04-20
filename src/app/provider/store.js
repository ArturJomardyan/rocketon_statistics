import {configureStore} from "@reduxjs/toolkit";

import {chartModel} from "@/entities/chart";
import {cefFilterModel} from "@/features/cef-filter-all";

export const store = configureStore({
    reducer: {
        [chartModel.name]: chartModel.reducer,
        [cefFilterModel.name]: cefFilterModel.reducer,
    }
});

