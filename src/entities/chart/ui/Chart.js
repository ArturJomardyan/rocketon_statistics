import {Column} from "@ant-design/plots";

import {config} from "../config";

export const Chart = ({data}) => {

    return <Column {...config} data={data} style={{marginTop: "15px"}}/>
}

