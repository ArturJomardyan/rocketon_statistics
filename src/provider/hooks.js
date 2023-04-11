import {useSelector} from "react-redux";
import {selectStatisticsData, selectStatisticsDataById} from "./slice";


export const useStatistics = () => useSelector(selectStatisticsData)
export const useStatisticsDataById = id => useSelector(state => selectStatisticsDataById(state,id))

