import history1 from "./Racekton_betList_1.json"
import history2 from "./Racketon_BetList _2.json"
import history3 from "./Racketon_betList_3.json"
import history4 from "./Racekton_betList_4.json"
import history5 from "./Racekton_betList_5.json"
import history6 from "./Racekton_betList_6.json"
import history7 from "./rocketon_7.json"
import history8 from "./rocketon_8.json"

const histories = [history1, history2, history3, history4, history5, history6,history7,history8]

export const filter = 100
export const data = histories.map(history => history.filter(x => x.data > filter).map(item => ({
    bet: item.data,
    time: item.explosionTime.time
})))

export function timeDiffInMinutes(timeArr) {
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








