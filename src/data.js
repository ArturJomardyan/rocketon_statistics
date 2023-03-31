import history1 from "./coefficientsLists/coefficientsList_1.json"
import history2 from "./coefficientsLists/coefficientsList_2.json"
import history3 from "./coefficientsLists/coefficientsList_3.json"
import history4 from "./coefficientsLists/coefficientsList_4.json"
import history5 from "./coefficientsLists/coefficientsList_5.json"
import history6 from "./coefficientsLists/coefficientsList_6.json"
import history7 from "./coefficientsLists/coefficientsList_7.json"
import history8 from "./coefficientsLists/coefficientsList_8.json"

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








