/**
 * If provided argument to hook that argument will be passed to callback function,
 * and no matter what argument is provided to callback.
 * If argument is not provided to hook, argument provided to callback will be passed to callback function
 *
 * @example
 *  const param = 1;
 *  const log = useOptionalArgsCallback(
 *    console.log,
 *    param
 *  );
 *  log() // 1
 *  log(2) // 1
 *
 *  const log = useOptionalArgsCallback(console.log);
 *  log() // undefined
 *  log(2) // 2
 * @param callback
 * @param arg1
 * @returns {function(*): *}
 */
export const createOptionalArgsCallback = (callback, arg1) => arg2 => callback(arg1 || arg2);
