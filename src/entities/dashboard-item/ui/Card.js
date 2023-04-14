import {Statistic} from "antd";

export const Card = ({title,value,icon}) => {
   return (
       <Card bordered={false}>
           <Statistic
               title={title}
               value={value}
               valueStyle={{
                   color: '#32452e',
                   fontSize: "16px",
                   fontFamily: 'Roboto Condensed, sans-serif',
               }}
               prefix={icon}
           />
       </Card>
   )
}