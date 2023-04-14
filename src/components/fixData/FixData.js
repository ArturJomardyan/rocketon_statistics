import {useDispatch} from "react-redux";
import {useEffect} from "react";

import '../style.css'
import {ContainerStatistics} from "@/components";
import {getCardData} from "./config";
import {transformDataForFixDashboard} from "./lib";
import {setNewData, useStatisticsDataById} from "@/app/provider";


const useData = (data, index) => {
    const dispatch = useDispatch()
    const fixData = transformDataForFixDashboard(data);

    useEffect(() => {
        dispatch(setNewData({data: {fixData}, index}))
    }, [])

    return useStatisticsDataById(index).fixData
}

export const FixData = ({data, index}) => {
    const fixData = useData(data.rawData, index);

    return fixData ? <ContainerStatistics data={getCardData(fixData)}/> : "...loading"
}


