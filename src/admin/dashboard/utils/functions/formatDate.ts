import { arrayDaysPTBR, arrayMonthsPTBR } from '../../utils/arrayCalendario';

export function formatDate(date: any){
    let dateSplited = date.split('/').map(Number);
    let currentData = new Date(0 + dateSplited[2], dateSplited[1] -1, dateSplited[0]);
    let weekDay = String(arrayDaysPTBR[currentData.getDay()]);
    let month = String(arrayMonthsPTBR[currentData.getMonth()]);
    let year = String(currentData.getFullYear())

    let day = String(currentData.getDate())
    return (weekDay + ", " + day + " de " + month + " de " + year)
}