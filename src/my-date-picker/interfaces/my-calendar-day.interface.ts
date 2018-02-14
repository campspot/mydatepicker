import { IMyDate } from "./my-date.interface";
import { IMyMarkedDate } from "./my-marked-date.interface";

export interface IMyCalendarDay {
    dateObj: IMyDate;
    monthAbr: string;
    dayNbr: number;
    cmo: number;
    currDay: boolean;
    disabled: boolean;
    markedDate: IMyMarkedDate;
    highlight: boolean;
}