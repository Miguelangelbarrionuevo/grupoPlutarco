import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  standalone: false,
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent implements AfterViewInit {
  videos = [
    {
      nombre: 'Marisquería El Cenachero Teatinos',
      url: 'assets/video/videoentradaTeatinos.mp4',
      ruta: '/restaurante-teatinos'
    },
    {
      nombre: 'A Mi Manera',
      url: 'assets/video/video-entrada-amimanera.mp4',
      ruta: '/restaurante-manera'
    },
    {
      nombre: 'Marisquería El Cenachero Centro',
      url: 'assets/video/videoentradacentro.mp4',
      ruta: '/restaurante-centro'
    }
  ];

  @ViewChildren('videoPlayer') videoPlayers!: QueryList<ElementRef<HTMLVideoElement>>;

  ngAfterViewInit(): void {
    const players = this.videoPlayers.toArray();
    let loaded = 0;

    // Esperar a que los tres vídeos estén cargados
    players.forEach(player => {
      player.nativeElement.muted = true;

      player.nativeElement.onloadeddata = () => {
        loaded++;
        if (loaded === players.length) {
          // Todos los vídeos están listos, ahora iniciar juntos
          setTimeout(() => {
            players.forEach(p => {
              p.nativeElement.currentTime = 0;
              p.nativeElement.play();
            });
          }, 300); // Pequeño delay para sincronía
        }
      };
    });
  }
}
