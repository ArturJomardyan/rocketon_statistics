import {Column} from "@ant-design/plots";

import {config} from "./config";
import {FixData} from "../FixData";

export const Charts = ({charts}) => {
    return (
        charts.map(chart => (
                <div style={{padding: "10px", borderBottom: "2px dotted  #007500"}}>
                    <FixData count={chart.count}
                             endDate={chart.endDate}
                             endTime={chart.endTime}
                             duration={chart.duration}
                             startDate={chart.startDate}
                             startTime={chart.startTime}
                             timeRange={chart.timeRange}
                             maxCoefficient={chart.maxCoefficient}
                    />
                    <Column {...config} data={chart.coefficients} style={{marginTop: "15px"}}/>
                </div>
            )
        )
    )
}