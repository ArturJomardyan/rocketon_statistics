import {Card, Statistic} from 'antd';
import {CalendarFilled, ClockCircleFilled, PieChartFilled, SignalFilled, StarFilled,} from '@ant-design/icons';

import './style.css'
import {getDateRange} from "../core/lib/getDateRange";


export const FilteredData = props => {
    return (
        <div className="containerFixData">
            {
                getFixData(props).map(item => {
                    return <Card bordered={false}>
                        <Statistic
                            title={item.title}
                            value={item.value}
                            valueStyle={{
                                color: '#32452e',
                                fontSize: "16px",
                                fontFamily: 'Roboto Condensed, sans-serif',
                            }}
                            prefix={item.icon}
                        />
                    </Card>
                })
            }
        </div>
    )
}

const getFixData = (data) => {
    return [
        {
            title: "Filtered Count",
            value: data.count,
            icon: <SignalFilled className="fixDataIcon"/>
        },
        {
            title: "Filtered Date",
            value: getDateRange(data.startDate, data.endDate),
            icon: <CalendarFilled className="fixDataIcon"/>
        },
        {
            title: "Filtered Time",
            value: `${data.startTime} - ${data.endTime}`,
            icon: <ClockCircleFilled className="fixDataIcon"/>
        },
        {
            title: "Max expectation time",
            value: data.duration,
            icon: <PieChartFilled className="fixDataIcon"/>
        },
        {
            title: "Max expectation games count",
            value: data.maxCoefficient,
            icon: <StarFilled className="fixDataIcon"/>
        }
    ]
}
