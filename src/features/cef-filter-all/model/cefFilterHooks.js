import {useSelector} from "react-redux";
import {useDispatchOptionalArgsCallback} from "@/core";

import {selectCefFilters, setCefFilter} from "./cetFilterSlice";

export const useSetCefFilter = (payload) => useDispatchOptionalArgsCallback(setCefFilter, payload)
export const useSelectCefFilter = () => useSelector(selectCefFilters)
