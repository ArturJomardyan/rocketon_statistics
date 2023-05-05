import React, {useState} from "react";
import {Button, Input,TimePicker} from "antd";

import {cefFilterInitialState, useSetCefFilter} from "./model";



export const CefFilter = () => {
    const [state, setState] = useState(cefFilterInitialState)
    const setSetCefFilter = useSetCefFilter()
    const onSave = () => setSetCefFilter(state)
    const handleKeyDown = (e) => e.key === "Enter" && onSave()

    const onReset = () => {
        setState(cefFilterInitialState)
        setSetCefFilter(cefFilterInitialState)
    }

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const onChangeTime = (e) => {
        console.log(e[0]["$H"],e[0])
        setState({
            ...state,
            timeFrom:e[0]["$H"],
            timeTo:e[1]["$H"],
        })
    }
    console.log(state)
    return (
        <div className="flex gap-[10px] m-[20px]">
            From: <Input name="from"
                         className="w-[90px]"
                         onChange={onChange}
                         onKeyDown={handleKeyDown}
                         value={state.from}
        />
            To: <Input name="to"
                       className="w-[90px]"
                       onChange={onChange}
                       onKeyDown={handleKeyDown}
                       value={state.to === cefFilterInitialState.to ? "" : state.to}
        />
            Time Range: <TimePicker.RangePicker onChange={onChangeTime}/>
            <Button onClick={onSave}>Save</Button>
            <Button onClick={onReset}>Reset</Button>
        </div>
    )
}




