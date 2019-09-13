import { Component, OnInit } from '@angular/core';
import { EventoModel } from '../../../models/evento.model';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { EventosService } from './../../../services/eventos.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';


import Swal from 'sweetalert2';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styles: []
})
export class AgendaComponent implements OnInit {
  // evento = new EventoModel();
  fecha: any;
  eventos: EventoModel[] = [];
  evento: EventoModel = new EventoModel();

  cargando = false;
  private mdlSampleIsOpen;

  constructor(private router: Router, private eventoService: EventosService) { }

  ngOnInit() {
    this.cargando = true;
    this.cargarCalendario();
    this.eventoService.getEventos().subscribe(respuesta => {
        this.eventos = respuesta;
        this.cargando = false;
      });
  }
  cargarCalendario() {
    setTimeout(() => {
      $('#calendar').fullCalendar({
        header: {
          right: 'prev,next today',
          center: 'title',
          left: 'month,agendaWeek,agendaDay'
        },
        navLinks: true,
        editable: true,
        eventLimit: true,
        events: 'https://api.myjson.com/bins/1g3mht',  // request to load current events

        dayClick: (date) => {
          this.fecha = date.format();
          this.diaClick(date, this.fecha);
          console.log(date.format());
        },
        eventClick: (event) => {
          console.log('hiciste clic', event);
        }

      });
    }, 100);
  }

  diaClick(date, fecha) {
    if (moment().format('YYYY-MM-DD') === date.format('YYYY-MM-DD') || date.isAfter(moment())) {
      // This allows today and future date
        // this.router.navigateByUrl(`/agenda/nuevo/${fecha}`);
      this.evento.fechaEvento = fecha;
      this.openModal(true);
    } else {
      // Else part is for past dates
      console.log('no puedes crear eventos para dias pasados a hoy');
    }
  }

  deleteEvento(evento: EventoModel, indice: number) {

    Swal.fire({
      title: '¿Está seguro ?',
      text: `Seguro de borrar el evento "${ evento.title}"`,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true,
    }).then ( respuesta => {
      if (respuesta.value) {
        this.eventos.splice(indice, 1); // borro de la tabla
        this.eventoService.deleteEvento(evento.id).subscribe();
      }
    });
  }
  openModalEditar(evento: EventoModel) {
    const id = evento.id;
    this.eventoService.getEvento(evento.id, evento.fechaEvento).subscribe((respuesta: EventoModel) => {
      this.evento = respuesta;
      this.evento.id = id;
    });
    this.openModal(true);
  }
  private openModal(open: boolean): void {
    this.mdlSampleIsOpen = open;
  }
  guardarEvento(form: NgForm) {

    // console.log(form);
    // console.log(this.evento);
    if (form.invalid) {
      console.log('formulario invalido');
      return;
    }
    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      type: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;


    if (this.evento.id) { // si tiene id el evento lo edito
      peticion = this.eventoService.actualizarEvento(this.evento);
    } else {
      this.evento.start = this.evento.fechaEvento + 'T' + this.getHour();
      peticion = this.eventoService.crearEvento(this.evento);
    }

    peticion.subscribe(respuesta => {
      Swal.fire({
        title: this.evento.title,
        text: 'Se actualizó correctamente',
        type: 'success'
      });

    });
  }
  getHour() {
    const date = new Date();
    const segundos = date.getSeconds();
    const minutos = date.getMinutes();
    const hora = date.getHours();

    return hora + ':' + minutos + ':' + segundos;

  }
}

