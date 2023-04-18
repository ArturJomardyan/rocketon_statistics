import { useMemo } from "react";

import { createOptionalArgsCallback } from "../lib";

/**
 * If provided argument to hook that argument will be passed to callback function,
 * and no matter what argument is provided to callback.
 * If argument is not provided to hook, argument provided to callback will be passed to callback function
 *
 * @example
 * const Component1 = () => {
 *     const param = 1;
 *     const log = useOptionalArgsCallback(
 *       console.log,
 *       param
 *     );
 *     log() // 1
 *     log(2) // 1
 *
 *     return null;
 * };
 *
 * const Component2 = () => {
 *     const log = useOptionalArgsCallback(console.log);
 *     log() // undefined
 *     log(2) // 2
 *
 *     return null;
 * };
 *
 * @param {function} callback
 * @param {any} hookArgs
 * @returns {function(*): *}
 */
export const useOptionalArgsCallback = (callback, hookArgs) =>
    useMemo(() => createOptionalArgsCallback(callback, hookArgs), [callback, hookArgs]);
