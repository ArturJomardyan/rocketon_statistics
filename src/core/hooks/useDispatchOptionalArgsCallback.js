import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { useOptionalArgsCallback } from "./useOptionalArgsCallback";

/**
 * If provided argument to hook that argument will be passed to action creator,
 * and no matter what argument is provided to callback.
 * If argument is not provided to hook than argument provided to callback will be passed to action creator
 * @example
 * const Component1 = () => {
 *     const param = 1;
 *     const dispatchAction = useDispatchOptionalArgsCallback(
 *       payload => {type: 'action', payload},
 *       param
 *     );
 *     dispatchAction() // dispatch({type: 'action', payload: 1})
 *     dispatchAction(2) // dispatch({type: 'action', payload: 1})
 *
 *     return null;
 * };
 *
 * const Component1 = () => {
 *     const dispatchAction = useDispatchOptionalArgsCallback(
 *       payload => {type: 'action', payload},
 *     );
 *     dispatchAction(1) // dispatch({type: 'action', payload: 1})
 *     dispatchAction(2) // dispatch({type: 'action', payload: 2})
 *
 *     return null;
 * };
 *
 * @param action
 * @param arg
 * @returns {function(*): *}
 */
export const useDispatchOptionalArgsCallback = (action, arg) => {
    const dispatch = useDispatch();

    const callback = useCallback(arg => dispatch(action(arg)), [action, dispatch]);

    return useOptionalArgsCallback(callback, arg);
};
