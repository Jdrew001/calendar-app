import { CalendarEvent } from 'angular-calendar';

export class Event implements CalendarEvent {
    id?: string | number;    
    start: Date;
    end?: Date;
    title: string;
    color?;
    actions?;
    allDay?: boolean;
    cssClass?: string;
    resizable?: { beforeStart?: boolean; afterEnd?: boolean; };
    draggable?: boolean;
    meta?: any;
    description?: string;
}