export const timeDiffInMinutes = (timeArr) => {
    let diffArr = [{bet: timeArr[0].bet, time: 0}];
    for (let i = 1; i < timeArr.length; i++) {
        let startTime = new Date('01/01/2023 ' + timeArr[i - 1].time);
        let endTime = new Date('01/01/2023 ' + timeArr[i].time);
        let timeDiffInMs = endTime - startTime;
        let timeDiffInMinutes = Math.round(timeDiffInMs / (1000 * 60));
        diffArr.push({bet: timeArr[i].bet, time: timeDiffInMinutes});
    }
    return diffArr.sort((a, b) => b.time - a.time);
}