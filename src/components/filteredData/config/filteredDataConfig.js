import {ClockCircleFilled, DotChartOutlined, SignalFilled} from "@ant-design/icons";

export const cardData = (data) => {
    return [
        {
            title: "Max Expectation Games Count",
            value: data.maxExpectationGamesCount,
            icon: <DotChartOutlined className="fixDataIcon"/>
        },
        {
            title: "Max Exception Time",
            value: data.time,
            icon: <ClockCircleFilled className="fixDataIcon"/>
        },
        {
            title: "filtered Count",
            value: data.count,
            icon: <SignalFilled className="fixDataIcon"/>
        }
    ]
}