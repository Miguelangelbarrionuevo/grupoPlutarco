import { Component } from '@angular/core';
import { SolicitudService } from '../../services/solicitud.service';

@Component({
  selector: 'app-trabaja-con-nosotros',
  standalone: false ,
  templateUrl: './trabaja-con-nosotros.component.html',
  styleUrls: ['./trabaja-con-nosotros.component.css']
})
export class TrabajaConNosotrosComponent {
    form = {
    nombre: '',
    apellidos: '',
    correo: '',
    mensaje: ''
  };

  archivoSeleccionado!: File;

  constructor(private solicitudService: SolicitudService) {}

  onFileSelected(event: any) {
    this.archivoSeleccionado = event.target.files[0];
  }

  enviarSolicitud() {
    const formData = new FormData();
    formData.append('nombre', this.form.nombre);
    formData.append('apellidos', this.form.apellidos);
    formData.append('correo', this.form.correo);
    formData.append('mensaje', this.form.mensaje);
    formData.append('cv', this.archivoSeleccionado);

    this.solicitudService.enviarSolicitud(formData).subscribe({
      next: () => alert('¡Solicitud enviada correctamente!'),
      error: () => alert('❌ Error al enviar la solicitud.')
    });
  }
}
