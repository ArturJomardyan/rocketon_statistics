import {useState} from "react";
import {Button, Input} from "antd";

import {cefHistories} from "@/core";
import {useOnChange, useOnKeyDown, useOnReset, useOnSave} from "./model";


export const CefFilter = ({id}) => {
    const arr = cefHistories.find(item => item.id = id)

    const initialState = {from: 1, to: arr.length}
    const [state, setState] = useState(initialState)

    const onChange = useOnChange(state,setState);
    const onSave = () => useOnSave()
    const onReset = () => useOnReset()
    const handleKeyDown = () => useOnKeyDown(onSave)

    return (
        <div style={{width: "380px", height: "32px", display: "flex", gap: "10px", alignItems: "center"}}>
            From:<Input name="from" onKeyDown={handleKeyDown} value={state.from === initialState.from ? '' : state.from}
                        onChange={onChange}/>
            <Input name="to" onKeyDown={(e) => handleKeyDown(e)} value={state.to === initialState.to ? '' : state.to}
                   onChange={onChange}/>
            <Button onClick={onSave}>Save</Button>
            <Button onClick={onReset}>Reset</Button>
        </div>
    )
}




