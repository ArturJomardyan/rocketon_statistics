import {StatisticCard} from "./StatisticCard";

import '../style2.css'

export const StatisticsCardsCollection = ({data}) => {

    return <div className="cardCollection">
        {
            data.length ? data.map(item => (
                <StatisticCard value={item.value} title={item.title} icon={item.icon}/>
            )) : "...loading"
        }
    </div>
}

