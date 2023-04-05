import {Button, Input} from "antd";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setCoefficientRange} from "../app/slice";


export const CoefficientRangeSelector = ({index}) => {
    const [state, setState] = useState({from: 0, to: Infinity})
    const dispatch = useDispatch();

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    };

    const onClick = () => {
        dispatch(setCoefficientRange({index, from: state.from, to: state.to}))
    }

    return (
        <div style={{width: "350px", height: "32px", display: "flex", gap: "15px"}}>
            From:<Input name="from" onChange={onChange}/>
            To:<Input name="to" onChange={onChange}/>
            <Button onClick={onClick}>Save</Button>
        </div>
    )
}