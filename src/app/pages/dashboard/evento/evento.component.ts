import { Component, OnInit } from '@angular/core';
import { EventosService } from './../../../services/eventos.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import Swal from 'sweetalert2';

import { EventoModel } from './../../../models/evento.model';



@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styles: []
})
export class EventoComponent implements OnInit {

  evento: EventoModel = new EventoModel();
  id: any;

  constructor(private eventoService: EventosService, private route: ActivatedRoute) {
    this.evento.fechaEvento = this.route.snapshot.paramMap.get('fecha');

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const fecha = this.route.snapshot.paramMap.get('fecha');

    if (id !== 'nuevo') {
      this.eventoService.getEvento(id, fecha ).subscribe( (respuesta: EventoModel) => {
        this.evento = respuesta;
        this.evento.id = id;
        this.evento.fechaEvento = fecha;

      });
    }
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
