import {cefHistories, formatDuration, getDurationObj} from "@/core";

/*

/// step 4
[
   {
      "id": 30,
      "data": {
        "average": "63.40",
        "maxDiff": 340,
        "maxTime": "1 h. 51 min. 42 sec."
        }
   },
   {
    "id": 27,
    "data": {
      "average": "76.80",
      "maxDiff": 241,
      "maxTime": "1 h. 13 min. 30 sec."
    }
  },
]
* */
export const finalFunc = (range) => {
    const filteredCefHistories = cefHistories.map(i => i.data.map(item => item.time > range.timeFrom && item.time < range.to))

    return cefHistories.map(item => {
        return {
            id: item.id,
            data: getResObj(item.data, range)
        }
    })
}


/// Step 6
export const getSortedDiffsResultByAverage = (range) => [...finalFunc(range)].sort((a, b) => b.data.averageGamesDiff - a.data.averageGamesDiff)
export const getSortedDiffsResultByMax = (range) => [...finalFunc(range)].sort((a, b) => b.data.maxGamesDiff - a.data.maxGamesDiff)

export const getOneAverageFromAllAverageGamesDiffs = (arr) => {
    const averages = arr.map(obj => +obj.data.averageGamesDiff)

    return (averages.reduce((acc, curr) => acc + curr, 0) / averages.length).toFixed(2)
}

export const getOneAverageFromAllMaxGamesDiff = (arr) => {
    const averages = arr.map(obj => +obj.data.maxGamesDiff)

    return (averages.reduce((acc, curr) => acc + curr, 0) / averages.length).toFixed(2)
}


/* 1 step. EXAMPLE --> range > 50  first and last point also added regardless of the range
{
    "0": {
        "cef": 3.49,
        "time": 1681896207033
    },
    "151": {
        "cef": 51.99,
        "time": 1681899034295
    },
    "225": {
        "cef": 36.24,
        "time": 1681900542274
    }
}
*/
export const getTargetsByRange = (arr, range) => {
    const targets = {}
    targets["0"] = arr.at(0)
    targets[arr.length - 1] = arr.at(-1)

    arr.forEach((el, i) => {
        if (el.cef >= range.from && el.cef <= range.to) targets[i] = el
    })

    return targets
}

// step 2  OUTPUT >> {
//       "averageTimesDiff": "00 h. 21 min. 10 sec.",
//       "averageGamesDiff": "63.40",
//       "maxDiff": 340,
//       "maxTime": "01 h. 51 min. 42 sec."
//     }
export const getAverageAndMaxStatistics = targets => {
    let maxGamesDiff = 0
    let maxTimesDiff = 0
    const gamesCountDiff = []
    const timesDiff = [];
    const targetsCount = Object.keys(targets).length

    const indexes = Object.keys(targets)

    for (let i = 1; i < indexes.length; i++) {
        const twoGamesDiff = indexes[i] - indexes[i - 1]
        const twoTimesDiff = targets[indexes[i]].time - targets[indexes[i - 1]].time

        gamesCountDiff.push(twoGamesDiff)
        timesDiff.push(twoTimesDiff)

        if (twoGamesDiff > maxGamesDiff) {
            maxGamesDiff = twoGamesDiff
            maxTimesDiff = targets[indexes[i]].time - targets[indexes[i - 1]].time
        }
    }

    const {
        hours: maxTimeHours,
        minutes: maxTimeMinutes,
        seconds: maxTimeSeconds
    } = getDurationObj(maxTimesDiff);

    const averageGamesDiff = (gamesCountDiff.reduce((acc, curr) => acc + curr, 0) / gamesCountDiff.length).toFixed(2)
    const averageTimesDiff = (timesDiff.reduce((acc, curr) => acc + curr, 0) / timesDiff.length)

    const {
        hours: averageTimeHours,
        minutes: averageTimeMinute,
        seconds: averageTimeSeconds
    } = getDurationObj(averageTimesDiff)

    const averageTimesDiffFormatted = formatDuration({
        hours: averageTimeHours,
        minutes: averageTimeMinute,
        seconds: averageTimeSeconds
    })
    const maxTimesDiffFormatted = formatDuration({
        hours: maxTimeHours,
        minutes: maxTimeMinutes,
        seconds: maxTimeSeconds
    })

    return {
        count: targetsCount,
        averageTimesDiff: averageTimesDiffFormatted,
        averageGamesDiff,
        maxGamesDiff,
        maxTimesDiff: maxTimesDiffFormatted,
    }
}

// step 3
//     {
//       "average": "76.80",
//       "maxDiff": 241,
//       "maxTime": "1 h. 13 min. 30 sec."
//     };
// call to convert for each cefHistory
const getResObj = (arr, range) => {
    const targets = getTargetsByRange(arr, range);

    return getAverageAndMaxStatistics(targets)
}
