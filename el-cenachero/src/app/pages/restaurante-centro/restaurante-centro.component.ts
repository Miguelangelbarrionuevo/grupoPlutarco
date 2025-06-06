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
  { imagen: '/assets/img/img-platos/bogavante.jpeg', nombre: 'PLATOS.BOGAVANTE' },
  { imagen: '/assets/img/img-platos/carabinero.jpeg', nombre: 'PLATOS.CARABINEROS' },
  { imagen: '/assets/img/img-platos/fideostostados.jpeg', nombre: 'PLATOS.FIDEOS' },
  { imagen: '/assets/img/img-platos/quisquillas.jpeg', nombre: 'PLATOS.QUISQUILLAS' },
  { imagen: '/assets/img/img-platos/ostras2.jpeg', nombre: 'PLATOS.OSTRAS' },
  { imagen: '/assets/img/img-platos/tostaatun2.jpeg', nombre: 'PLATOS.ATUN' },
  { imagen: '/assets/img/img-platos/gazpachuelo.jpeg', nombre: 'PLATOS.GAZPACHUELO' },
  { imagen: '/assets/img/img-platos/zamburillas.jpeg', nombre: 'PLATOS.ZAMBURILLAS' }
];

  

  reserva = {
    nombre: '',
    correo: '',
    telefono: '',
    fecha: '',
    hora: '',
    comensales:'' ,
    mensaje_opcional: '' ,
    id_restaurante: 3,
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
    'assets/img/img-centro/centro1.jpeg',
        'assets/img/img-centro/centro2.jpeg',
    'assets/img/img-centro/centro3.jpeg',
    'assets/img/img-centro/centro4.jpeg',
    'assets/img/img-centro/centro5.jpeg',
        'assets/img/img-centro/centro6.jpeg',

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
