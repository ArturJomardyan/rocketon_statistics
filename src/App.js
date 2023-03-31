import {Column} from '@ant-design/plots';
import {Typography} from 'antd';

import {data, filter, timeDiffInMinutes} from "./data"

const {Text} = Typography;

const config = {
    xField: 'time',
    yField: 'bet',
    xAxis: {
        label: {
            autoRotate: false,
        },
    },
    columnStyle: {
        fill: 'green',
        lineWidth: 550,
        opacity: 0.2
    },
    animation: {
        // Configuration of the first animation
        appear: {
            animation: 'wave-in', // Effects of the first animation
            duration: 1500, // Duration of the first animation
        },
    },
    width: 100,
    slider: {
        start: 0,
        end: Infinity,
    },
};

function App() {
    return data.map(item => {
            const {time} = timeDiffInMinutes(item)[0];
            return <div style={{padding: "10px", borderBottom: "2px dotted  #007500"}}>
                <Text code={true} strong style={{fontSize: "15px"}}>
                    Count :: {item.length} / Coefficient > {filter} / Max expectation time :: {time} min.
                </Text>
                <Column {...config} data={item} style={{marginTop: "15px"}}/>
            </div>
        }
    );
}

export default App;
