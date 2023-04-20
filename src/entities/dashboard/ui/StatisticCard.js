import {Card, Statistic} from "antd";

export const StatisticCard = ({title,value,icon}) => {

   return (
       <Card bordered={false}>
           <Statistic
               title={title}
               value={value}
               valueStyle={{
                   color: '#7F7F7F',
                   fontSize: "14px",
                   fontFamily: 'Roboto, sans-serif',
               }}
               prefix={icon}
           />
       </Card>
   )
}