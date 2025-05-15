import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';

@Component({
  selector: 'app-restaurante-teatinos',
  standalone: false,
  templateUrl: './restaurante-teatinos.component.html',
  styleUrls: ['./restaurante-teatinos.component.css'] // usa "styleUrls" en plural
})
export class RestauranteTeatinosComponent {
  mostrarFormulario = false;

  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  platos = [
    { imagen: '/assets/img/img-platos/fritura.jpeg', nombre: 'Fritura Variada' },
    { imagen: '/assets/img/img-platos/gambasCocidas.jpeg', nombre: 'Gambas Cocidas' },
    { imagen: '/assets/img/img-platos/matrimonio.jpeg', nombre: 'Matrimonio' },
    { imagen: '/assets/img/img-platos/conchas.jpeg', nombre: 'Conchas Finas' },
    { imagen: '/assets/img/img-platos/ostras.jpeg', nombre: 'Ostras' },
    { imagen: '/assets/img/img-platos/pulpogallega.jpeg', nombre: 'Pulpo A La Gallega' },
    { imagen: '/assets/img/img-platos/tostaAtun.jpeg', nombre: 'Tosta De Atun' },
    { imagen: '/assets/img/img-platos/gratinada.jpeg', nombre: 'Peregrina Gratinada' }
  ];
  

  reserva = {
    nombre: '',
    correo: '',
    telefono: '',
    fecha: '',
    hora: '',
    comensales:'',
    mensaje_opcional: '',
    id_restaurante: 1, // ID del restaurante Teatinos
    mesa: null
  };

  constructor(private reservaService: ReservaService) {}

  enviarReserva() {
    this.reservaService.enviarReserva(this.reserva).subscribe({
      next: (response) => {
        console.log('Reserva enviada con éxito:', response);
        alert('¡Reserva enviada con éxito!');
        this.mostrarFormulario = false;
      },
      error: (error) => {
        console.error('Error al enviar reserva:', error);
        alert('Hubo un error al enviar la reserva.');
      }
    });
  }

  verCarta() {
    window.open('/assets/pdf/carta-teatinos.pdf', '_blank');
  }

  scrollDerecha() {
    this.carousel.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }

  scrollIzquierda() {
    this.carousel.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }
}
