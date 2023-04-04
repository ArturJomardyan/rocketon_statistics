import {createSlice} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";

import {transformData} from "../core";

export const rocketonStatisticsSlice = createSlice({
    name: "rocketonStatistics",
    initialState: [],
    reducers: {
        setStatistics(state, {payload}) {
           return payload.map(item => transformData(item)).sort((a, b) => b.count - a.count);
        }
    }
});

export const {setStatistics} = rocketonStatisticsSlice.actions

export const useStatistics = () => useSelector(state => state[rocketonStatisticsSlice.name])

// Payload [Array(614), Array(378), Array(614), Array(2053), Array(385), Array(2947), Array(384), Array(3198)]
// const payload = [
//     [
//         {
//             "data": 2.21,
//             "explosionTime": 1680273945623,
//         }
//     ],
//     [
//         {
//             "data": 35.85,
//             "explosionTime": 1680273945623,
//         }
//     ]
// ]

// const obj = {
//     fixInfoDashboard: {
//         timeRange: "",
//         count: null,
//         maxCoefficient: null,
//     },
//     filteredInfoDashboard: {
//         date: "",
//         startTime: "",
//         endTime: "",
//         count: null,
//         coefficient: null,
//         sign: "",
//         maxExpectationTime: "",
//         maxExpectationGamesCount: "",
//     },
//     data: [
//         {
//             coefficient: null,
//             time: "12:52:36"
//         }
//     ]
// }
