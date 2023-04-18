import {useCallback} from "react";

export const useOnSave = () => useCallback(() => {
}, [])
export const useOnReset = () => useCallback(() => {
}, [])
export const useOnKeyDown = (onSave) => useCallback((e) => e.key === "Enter" && onSave(), [])

export const useOnChange = () => useCallback((e,state,setState) => {
    setState({
        ...state,
        [e.target.name]: e.target.value
    })
}, [])


