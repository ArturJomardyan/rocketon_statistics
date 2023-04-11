import dayjs from "dayjs";

export const formatTime = (ms) => dayjs(ms).format("HH:mm:ss")