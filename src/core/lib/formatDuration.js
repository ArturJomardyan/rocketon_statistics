import {padWithZero} from "@/core";

export const formatDuration = ({hours,minutes,seconds}) => {
   return `${padWithZero(hours)} h. ${padWithZero(minutes)} min. ${padWithZero(seconds)} sec.`
}