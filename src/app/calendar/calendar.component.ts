import { Component, OnInit } from '@angular/core';
import { CalendarView, collapseAnimation  } from 'angular-calendar';
import { colors } from '../calendar-utils/color';
import { Event } from './event';
import { isSameDay, isSameMonth } from 'date-fns';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CalendarModalComponent } from './calendar-modal/calendar-modal.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  animations: [collapseAnimation]
})
export class CalendarComponent implements OnInit {

  //variables
  view: string = "month";
  viewDate: Date = new Date();
  activeDayIsOpen: boolean = true;
  closeResult: string;
  events: Event[] = [
    {
      title: 'End of the week',
      color: colors.yellow,
      start: new Date(),
      description: 'This is the last day of the week!'
    }
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  //day clicked
  dayClicked({ date, events }: { date: Date; events: Event[] }): void {
    console.log("a day was clicked");
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventClicked({ event }: { event: Event }): void {
    console.log('Event clicked', event);
    this.open(event);
  }

  //modal options
  open(event : Event) {
    const modalRef = this.modalService.open(CalendarModalComponent);
    modalRef.componentInstance.title = event.title;
    modalRef.componentInstance.description = event.description;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
