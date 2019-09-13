import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  calendarPlugins = [dayGridPlugin];

  calendarEvents = [
    { title: 'event 1', date: '2019-04-01' }
  ];
  
  constructor() {}

  ngOnInit() {
  }
  handleDateClick(arg) { // handler method
    alert(arg.dateStr);
  }
}
