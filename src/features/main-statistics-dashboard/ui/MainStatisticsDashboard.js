import {StatisticsCardsCollection} from "@/entities/dashboard";

import * as lib from '../lib'

export const MainStatisticsDashboard = ({id}) => {
    const data = lib.getMainStatisticsBlockData(id);

    return <StatisticsCardsCollection data={data}/>
}