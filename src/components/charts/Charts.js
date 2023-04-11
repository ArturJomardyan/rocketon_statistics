import {Chart, FilteredData, FixData} from "@/components";
import {Column} from "@ant-design/plots";
import {config} from "@/components/charts/lib/config";
import {useDispatch} from "react-redux";
import {transformDataForChart} from "@/components/charts/lib";
import {useEffect} from "react";
import {setNewData, useStatisticsDataById} from "@/provider";


const useChartData = (data, index) => {
    const dispatch = useDispatch()
    const chartData = transformDataForChart(data)

    useEffect(() => {
        dispatch(setNewData({data: {chartData}, index}))
    }, [])

    return useStatisticsDataById(index).chartData
}

export const Charts = ({data}) => {
    const chartData = useChartData(data.rawData, index)

    return data.map((data, index) => {

        return (
            <div key={index} style={{padding: "10px", borderBottom: "2px dotted  #007500"}}>
                <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
                    <FixData index={index} data={data}/>
                    {/*<CoefficientFilter index={index}/>*/}
                    <FilteredData data={data}/>
                </div>
                {
                    chartData ? <Column {...config} data={chartData} style={{marginTop: "15px"}}/> : " ...loading"
                }
            </div>
        )
    })
}



