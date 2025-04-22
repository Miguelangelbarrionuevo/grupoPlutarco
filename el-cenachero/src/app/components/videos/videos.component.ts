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
      nombre: 'Restaurante 1',
      url: 'assets/videos/video1.mp4'
    },
    {
      nombre: 'Restaurante 2',
      url: 'assets/videos/video2.mp4'
    },
    {
      nombre: 'Restaurante 3',
      url: 'assets/videos/video3.mp4'
    }
  ];
}
