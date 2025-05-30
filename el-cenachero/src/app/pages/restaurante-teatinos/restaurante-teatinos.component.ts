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
  { imagen: '/assets/img/img-platos/fritura.jpeg', nombre: 'PLATOS.FRITURA' },
  { imagen: '/assets/img/img-platos/gambasCocidas.jpeg', nombre: 'PLATOS.GAMBAS' },
  { imagen: '/assets/img/img-platos/matrimonio.jpeg', nombre: 'PLATOS.MATRIMONIO' },
  { imagen: '/assets/img/img-platos/conchas.jpeg', nombre: 'PLATOS.CONCHAS' },
  { imagen: '/assets/img/img-platos/ostras.jpeg', nombre: 'PLATOS.OSTRAS' },
  { imagen: '/assets/img/img-platos/pulpogallega.jpeg', nombre: 'PLATOS.PULPO' },
  { imagen: '/assets/img/img-platos/tostaAtun.jpeg', nombre: 'PLATOS.ATUN' },
  { imagen: '/assets/img/img-platos/gratinada.jpeg', nombre: 'PLATOS.PEREGRINA' }
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


 imagenes: string[] = [
    'assets/img/img-teatinos/teatinos2.jpeg',
        'assets/img/img-teatinos/teatinos3.jpeg',
    'assets/img/img-teatinos/teatinos4.jpeg',
    'assets/img/img-teatinos/teatinos5.jpeg',
    'assets/img/img-teatinos/teatinos1.jpeg',
        'assets/img/img-teatinos/teatinos6.jpeg',

  ];
  imagenActual: string = this.imagenes[0];
  private index = 0;
  private intervalo: any;

  ngOnInit(): void {
    this.intervalo = setInterval(() => {
      this.index = (this.index + 1) % this.imagenes.length;
      this.imagenActual = this.imagenes[this.index];
    }, 4000); 
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

}
