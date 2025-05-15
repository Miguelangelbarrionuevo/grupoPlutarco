import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';

@Component({
  selector: 'app-restaurante-manera',
  standalone: false,
  templateUrl: './restaurante-manera.component.html',
  styleUrl: './restaurante-manera.component.css'
})
export class RestauranteManeraComponent {
  mostrarFormulario = false;

  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  platos = [
    { imagen: '/assets/img/img-platos/flamenquin.jpeg', nombre: 'Flamenquin' },
    { imagen: '/assets/img/img-platos/jamonAsado.jpeg', nombre: 'Jamon Asado' },
    { imagen: '/assets/img/img-platos/croquetas.jpeg', nombre: 'Croquetas Pedro Ximenes ' },
    { imagen: '/assets/img/img-platos/cachopo.jpeg', nombre: 'Cachopo De Ternera' },
    { imagen: '/assets/img/img-platos/jamonMontes.jpeg', nombre: 'Plato de los Montes' },
    { imagen: '/assets/img/img-platos/pinchoGamba.jpeg', nombre: 'Pincho de gamba' },
    { imagen: '/assets/img/img-platos/berenjenas.jpeg', nombre: 'Berenjenas' },
  ];
  

  reserva = {
    nombre: '',
    correo: '',
    telefono: '',
    fecha: '',
    hora: '',
    comensales: '',
    mensaje_opcional: '',
    id_restaurante: 2, // ID del restaurante Teatinos
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