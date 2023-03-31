import {Column} from "@ant-design/plots";

import {config} from "./config";
import {FixData} from "./FixData";
import {FilteredData} from "./FiltredData";

export const Charts = props => {
    return (
        props.data.map(item => (
                <>
                    <FixData/>
                    <FilteredData/>
                    <Column {...config} data={item} style={{marginTop: "15px"}}/>
                </>
            )
        )
    )
}