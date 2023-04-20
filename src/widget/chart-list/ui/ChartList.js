import {Chart, chartModel} from "@/entities/chart";
import {MainStatisticsDashboard} from "@/features/main-statistics-dashboard";

export const ChartList = () => {
    const chartList = chartModel.useChartList();

    return (
        <>

            {
                chartList.length ? (
                    chartList.map((item, index) =>
                        <div key={index}>
                            <MainStatisticsDashboard id={item.id}/>
                            <Chart data={item.data}/>
                        </div>
                    )

                ) : "...loading"
            }
        </>
    )
}

