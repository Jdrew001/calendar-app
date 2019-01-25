import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { CalendarModalComponent } from './calendar-modal/calendar-modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [CalendarComponent, CalendarModalComponent],
  imports: [
    CommonModule, CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgbModule.forRoot()
  ],
  entryComponents:[CalendarModalComponent],
  exports: [CalendarComponent, CalendarModalComponent]
})
export class AppCalendarModule { }
