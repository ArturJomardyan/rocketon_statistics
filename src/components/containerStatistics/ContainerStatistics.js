import {Card, Statistic} from "antd";



export const ContainerStatistics = ({data}) =>{

    return (
        <div className="containerFixData">
            {
                data.chartData.map(item => {
                    return (
                        <Card bordered={false}>
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
                    )
                })
            }
        </div>
    )
}