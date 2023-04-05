import {Column} from "@ant-design/plots";

import {config} from "./config";
import {FixData} from "../FixData";
import {CoefficientRangeSelector} from "../CoefficientRangeSelector";
// import {FilteredData} from "../FilteredData";

export const Charts = ({charts}) => {
    return (
        charts.map((chart, index) => (
                <div key={index} style={{padding: "10px", borderBottom: "2px dotted  #007500"}}>
                    <div style={{display: "flex",alignItems:"center", gap: "20px"}}>
                        <FixData count={chart.count}
                                 endDate={chart.endDate}
                                 endTime={chart.endTime}
                                 duration={chart.duration}
                                 startDate={chart.startDate}
                                 startTime={chart.startTime}
                                 timeRange={chart.timeRange}
                                 maxCoefficient={chart.maxCoefficient}
                        />
                        <CoefficientRangeSelector index={index}/>
                        {/*<FilteredData/>*/}
                    </div>
                    <Column {...config} data={chart.coefficients} style={{marginTop: "15px"}}/>
                </div>
            )
        )
    )
}