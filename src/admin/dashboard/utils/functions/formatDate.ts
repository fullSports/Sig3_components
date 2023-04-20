import { arrayDaysPTBR, arrayMonthsPTBR } from "../../utils/arrayCalendario";

export function formatDate(date: string){
    const dateSplited = date.split("/").map(Number);
    const currentData = new Date(0 + dateSplited[2], dateSplited[1] -1, dateSplited[0]);
    const weekDay = String(arrayDaysPTBR[currentData.getDay()]);
    const month = String(arrayMonthsPTBR[currentData.getMonth()]);
    const year = String(currentData.getFullYear());

    const day = String(currentData.getDate());
    return (weekDay + ", " + day + " de " + month + " de " + year);
}