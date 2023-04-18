import {Card, Statistic} from "antd";

export const StatisticCard = ({title,value,icon}) => {

   return (
       <Card bordered={false}>
           <Statistic
               title={title}
               value={value}
               valueStyle={{
                   color: '#4d4c4c',
                   fontSize: "15px",
                   fontFamily: 'Roboto, sans-serif',
               }}
               prefix={icon}
           />
       </Card>
   )
}