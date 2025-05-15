import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
 @Input() facebookUrl: string = 'https://www.facebook.com/elcenacheromarisqueria/';
  @Input() instagramUrl: string = 'https://www.instagram.com/elcenacheromarisqueria/';
@Input() tiktokUrl: string = 'https://www.tiktok.com/@elcenacheromarisqueria/';
}
