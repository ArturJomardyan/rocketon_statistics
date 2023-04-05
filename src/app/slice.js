import {createSlice} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";

import {millisecondsToTimeAndDate, transformData} from "../core";

export const rocketonStatisticsSlice = createSlice({
    name: "rocketonStatistics",
    initialState: [],
    reducers: {
        setStatistics(state, {payload}) {
            return payload.map(item => transformData(item));
        },
        setCoefficientRange(state, {payload}) {
            const {index, from, to} = payload

            const newArr = require(`../coefficientsHistories/coefficientsHistory_${index + 1}.json`)
            const filteredArr = newArr.filter(item => item.coefficient > from && item.coefficient < to)
            state[index] = transformData(filteredArr)
            state[index].coefficients = filteredArr.map(item => ({
                    coefficient: item.coefficient,
                    explosionTime: millisecondsToTimeAndDate(item.explosionTime).time
                }
            ));
        }
    }
})


export const {setStatistics, setCoefficientRange} = rocketonStatisticsSlice.actions

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
