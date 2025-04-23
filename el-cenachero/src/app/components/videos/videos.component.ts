import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  standalone: false,
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {
  videos = [
    {
      nombre: 'Marisqueria El Cenachero Teatinos',
      url: 'assets/videos/video1.mp4'
    },
    {
      nombre: 'A Mi Manera',
      url: 'assets/videos/video2.mp4'
    },
    {
      nombre: 'Marisqueria El Cenachero Centro',
      url: 'assets/video/video-entrada-centro.MP4'
    }
  ];
}
