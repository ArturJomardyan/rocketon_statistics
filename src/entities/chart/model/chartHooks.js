import {useEffect} from "react";
import {useSelector} from "react-redux";

import {cefHistories,useDispatchOptionalArgsCallback} from "@/core";
import {selectChartById, selectCharts, setCharts} from "./chartsSlice";


const useSetCharts = () => useDispatchOptionalArgsCallback(setCharts,cefHistories)

export const useChartList = () => {
    const func = useSetCharts()

    useEffect(() => {
        func()
    }, [func]);

    return useSelector(selectCharts)
};

export const useChartById = id => useSelector(state => selectChartById(state, id));
