import {useEffect} from "react";
import {useDispatch} from "react-redux";

import {coefficientsHistories} from "../core/api/coefficientsHistories";

import {setData, useStatistics} from "@/app/provider";
import {Charts} from "@/components";

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



