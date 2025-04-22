import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-catering',
  standalone: false,
  templateUrl: './catering.component.html',
  styleUrl: './catering.component.css'
})
export class CateringComponent implements OnInit, OnDestroy {
  imagenes: string[] = [
    'assets/img/catering-principal.jpeg',
    'assets/img/catering-secundaria.jpeg',
    'assets/img/catering-tercero.jpeg',
    'assets/img/catering-cuarto.jpeg'

  ];
  indiceActual = 0;
  intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.indiceActual = (this.indiceActual + 1) % this.imagenes.length;
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}