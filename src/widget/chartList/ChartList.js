import {getMainStatisticsData} from "@/entities/dashboard/lib";
import {getMainStatisticsConfig} from "@/entities/dashboard/config";
import {StatisticsCardsCollection} from "@/entities/dashboard";

import {Chart, chartModel} from "@/entities/chart";

export const ChartList = () => {
    const chartList = chartModel.useChartList();

    return chartList.length ? (
        chartList.map((item, index) =>
            <div key={index}>
                <MainStatisticsBlock id={item.id}/>
                {/*<CefFilter/>*/}
                {/*<StatisticsCardsCollection/>*/}
                <Chart data={item.data}/>
            </div>
        )

    ) : "...loading"
}

export const MainStatisticsBlock = ({id}) => {
    const mainStatisticsData = getMainStatisticsData(id);
    const data = getMainStatisticsConfig(mainStatisticsData);

    return <StatisticsCardsCollection data={data}/>
}