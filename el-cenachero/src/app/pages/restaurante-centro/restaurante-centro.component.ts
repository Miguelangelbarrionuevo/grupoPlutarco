import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';

@Component({
  selector: 'app-restaurante-centro',
  standalone: false,
  templateUrl: './restaurante-centro.component.html',
  styleUrl: './restaurante-centro.component.css'
})
export class RestauranteCentroComponent {
  mostrarFormulario = false;

  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  platos = [
    { imagen: '/assets/img/img-platos/bogavante.jpeg', nombre: 'Bogavante' },
    { imagen: '/assets/img/img-platos/carabinero.jpeg', nombre: 'Carabineros' },
    { imagen: '/assets/img/img-platos/fideostostados.jpeg', nombre: 'Fideos Tostados ' },
    { imagen: '/assets/img/img-platos/quisquillas.jpeg', nombre: 'Quisquillas Plancha' },
    { imagen: '/assets/img/img-platos/ostras2.jpeg', nombre: 'Ostras' },
    { imagen: '/assets/img/img-platos/tostaatun2.jpeg', nombre: 'Tosta De Atun' },
    { imagen: '/assets/img/img-platos/gazpachuelo.jpeg', nombre: 'Gazpachuelo' },
    { imagen: '/assets/img/img-platos/zamburillas.jpeg', nombre: 'Zamburillas ' }
  ];
  

  reserva = {
    nombre: '',
    correo: '',
    telefono: '',
    fecha: '',
    hora: '',
    comensales:'' ,
    mensaje_opcional: '' ,
    id_restaurante: 3, // ID del restaurante Teatinos
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