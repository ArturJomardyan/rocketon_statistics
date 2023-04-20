import {useState} from "react";
import {Button} from "antd";

import {cefFilterModel} from "@/features/cef-filter";
import * as lib from "../lib";


export const CefFilterDashboard = () => {
    const [state, setState] = useState(false)

    const cefFilterData = cefFilterModel.useSelectCefFilter()

    const sortedByAverage = lib.getSortedDiffsResultByAverage(cefFilterData)
    const sortedByMax = lib.getSortedDiffsResultByMax(cefFilterData)

    const mainAverage = lib.getOneAverageFromAllAverageGamesDiffs(sortedByAverage)
    const mainAverageFromAllMax = lib.getOneAverageFromAllMaxGamesDiff(sortedByAverage)


    return (
        <>
            <Button type="primary"
                    ghost
                    onClick={() => setState(state => !state)}
            >
                {state ? "Sort By max games diff" : "Sort By average games diff"}
            </Button>
            <h1>Average diff From all averages: {mainAverage} </h1>
            <h1>Average diff From all maxes: {mainAverageFromAllMax} </h1>
            {
                state ? <pre>
            {
                JSON.stringify(sortedByAverage, null, 2)
            }
        </pre> : <pre>
            {
                JSON.stringify(sortedByMax, null, 2)
            }
        </pre>

            }
        </>
    )
}