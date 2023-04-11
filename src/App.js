import {useEffect} from "react";
import {useDispatch} from "react-redux";

import {coefficientsHistories} from "./coefficientsHistories";
import {Charts} from "@/components";
import {useStatistics,setData} from "@/provider";

const useData = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setData(coefficientsHistories))
    }, [dispatch])
    return useStatistics();
}

function App() {
    const data = useData()

    return data.length ? <Charts data={data}/> : "loading..."
}

export default App;



