import {useEffect} from "react";
import {useDispatch} from "react-redux";

import {setStatistics, useStatistics} from "./app/slice";
import {coefficientsHistories} from "./coefficientsHistories"
import {Charts} from "./components/charts/Charts";

const useData = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setStatistics(coefficientsHistories))
    }, [dispatch])
    return useStatistics();
}

function App() {
    const data = useData()

    return <Charts charts={data}/>
}

export default App;



