import {createSlice} from "@reduxjs/toolkit";

export const rocketonStatisticsSlice = createSlice({
    name: "rocketonStatistics",
    initialState: [{}, {}, {}],
    reducers: {
        addStatistics(state, {payload}) {

        }
    }
});

const payload = [
    [
        {
            "data": 2.21,
            "explosionTime": 1680273945623,
        }
    ],
    [
        {
            "data": 35.85,
            "explosionTime": 1680273945623,
        }
    ]
]
//Payload [Array(614), Array(378), Array(614), Array(2053), Array(385), Array(2947), Array(384), Array(3198)]

// OutPut
const obj1 = {
    "data": 2.21,
    "explosionTime": 1680273945623,
}

const obj = {
    date: "",
    endTime: "",
    startTime: "",
    count: null,
    maxCoefficient: null,
    filteredData: {
        count: null,
        startTime: "",
        endTime: "",
        coefficient: null,
        maxExpectationTime: "",
        maxExpectationGamesCount: "",
    }
}
