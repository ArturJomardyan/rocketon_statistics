// import {useState} from "react";
// import {Button, Input} from "antd";
// import {useDispatch} from "react-redux";
//
// import {useStatisticsDataById} from '@/provider/hooks';
// import {reset, setFilter} from "@/provider/slice";
//
//
// export const CoefficientFilter = ({index}) => {
//     const arr = useStatisticsDataById(index)
//     const initialState = {from: 1, to: arr.length}
//     const [state, setState] = useState(initialState)
//
//     const dispatch = useDispatch();
//
//     const onChange = (e) => {
//         setState({
//             ...state,
//             [e.target.name]: e.target.value
//         })
//     };
//
//     const handleKeyDown = (e) => {
//         if (e.key === "Enter") onSave();
//     };
//
//     const onSave = () => {
//         const targetIndexes = []
//
//         if (state.from === "") state.from = initialState.from
//         if (state.to === "") state.to = initialState.to
//
//         const filteredArr = arr.filter((item, index) => {
//             if (item.coefficient >= state.from && item.coefficient <= state.to) {
//                 targetIndexes.push(index)
//                 return true
//             }
//             return false
//         }).map(item => ({
//             coefficient: item.coefficient,
//             explosionTime: (item.explosionTime).time
//         }))
//         dispatch(setFilter({index, targetIndexes, data: filteredArr}))
//     }
//
//     const onReset = () => {
//         const resetArr = arr.map(item => ({
//             coefficient: item.coefficient,
//             explosionTime: (item.explosionTime).time
//         }))
//         setState(initialState)
//         dispatch(reset({index, data: resetArr}))
//     }
//
//     return (
//         <div style={{width: "380px", height: "32px", display: "flex", gap: "10px", alignItems: "center"}}>
//             From:<Input name="from" onKeyDown={handleKeyDown} value={state.from === initialState.from ? '' : state.from}
//                         onChange={onChange}/>
//             <Input name="to" onKeyDown={handleKeyDown} value={state.to === initialState.to ? '' : state.to}
//                    onChange={onChange}/>
//             <Button onClick={onSave}>Save</Button>
//             <Button onClick={onReset}>Reset</Button>
//         </div>
//     )
// }