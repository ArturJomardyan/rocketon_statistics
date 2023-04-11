import {Chart} from "@/components";


export const Charts = ({data}) => data.map((data, index) => <Chart index={index} data={data}/>)



