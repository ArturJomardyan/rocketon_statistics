import {CalendarFilled, ClockCircleFilled, PieChartFilled, SignalFilled, StarFilled} from "@ant-design/icons";

export const getCardData = (data) => {
    return [
        {
            title: "All Count",
            value: data.count,
            icon: <SignalFilled className="fixDataIcon"/>
        },
        {
            title: "Date",
            value: data.dateRange,
            icon: <CalendarFilled className="fixDataIcon"/>
        },
        {
            title: "Time",
            value: data.timeRange,
            icon: <ClockCircleFilled className="fixDataIcon"/>
        },
        {
            title: "Duration",
            value: data.duration,
            icon: <PieChartFilled className="fixDataIcon"/>
        },
        {
            title: "Max Coefficient",
            value: data.maxCoefficient,
            icon: <StarFilled className="fixDataIcon"/>
        }
    ]
}