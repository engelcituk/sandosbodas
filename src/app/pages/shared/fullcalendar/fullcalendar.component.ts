import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import '../../../../../node_modules/fullcalendar/dist/locale/es';


import * as moment from 'moment';

@Component({
  selector: 'app-fullcalendar',
  templateUrl: './fullcalendar.component.html',
  styles: []
})
export class FullcalendarComponent implements OnInit {

  @Input()
  set configurations(config: any) {
    if (config) {
      this.defaultConfigurations = config;
    }
  }
  @Input() eventData: any;

  defaultConfigurations: any;

  calendarEvents = [
    { title: 'event 1', date: '2019-09-05' }
  ];

  constructor() {
    this.defaultConfigurations = {
      lang: 'es',
      editable: true,
      eventLimit: true,
      titleFormat: 'MMM D YYYY',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      views: {
        agenda: {
          eventLimit: 2
        }
      },
      allDaySlot: false,
      slotDuration: moment.duration('00:15:00'),
      slotLabelInterval: moment.duration('01:00:00'),
      firstDay: 1,
      selectable: true,
      selectHelper: true,
      events: this.eventData,

      dayClick: (date, jsEvent, activeView) => {
        this.diaClick(date, jsEvent, activeView);
      }
    };
  }

  ngOnInit() {
    $('#agenda').fullCalendar(
      this.defaultConfigurations
    );
  }

  diaClick(date, jsEvent, view) {
    alert('Clicked on: ' + date.format());

    alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

    alert('Current view: ' + view.name);

    // change the day's background color just for fun
    $(this).css('background-color', 'red');
  }

}
