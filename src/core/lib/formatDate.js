import dayjs from "dayjs";

export const formatDate = (ms) => dayjs(ms).format("DD.MM.YY")