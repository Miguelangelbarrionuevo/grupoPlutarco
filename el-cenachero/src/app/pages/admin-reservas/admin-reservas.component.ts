import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-admin-reservas',
  standalone: false,
  templateUrl: './admin-reservas.component.html',
  styleUrl: './admin-reservas.component.css'
})
export class AdminReservasComponent implements OnInit {
  reservas: any[] = [];
  filtro: 'todas' | 'futuras' | 'pasadas' = 'todas';
  restauranteIdSeleccionado: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  seleccionarRestaurante(id: number) {
    this.restauranteIdSeleccionado = id;
    this.filtro = 'todas';
    this.obtenerReservas();
  }

  obtenerReservas() {
    if (!this.restauranteIdSeleccionado) return;

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const hoy = new Date().toISOString().split('T')[0];
    let url = `${environment.apiUrl}/admin/reservas`;

    if (this.filtro === 'futuras') {
      url += '?futuras=1';
    }

    this.http.get<any[]>(url, { headers }).subscribe({
      next: (data) => {
        const soloRestaurante = data.filter(r => r.restaurante?.id === this.restauranteIdSeleccionado);

        if (this.filtro === 'pasadas') {
          this.reservas = soloRestaurante.filter(r => r.fecha < hoy);
        } else {
          this.reservas = soloRestaurante;
        }
      },
      error: () => alert(' Error al obtener reservas')
    });
  }

  cargarTodas() {
    this.filtro = 'todas';
    this.obtenerReservas();
  }

  cargarFuturas() {
    this.filtro = 'futuras';
    this.obtenerReservas();
  }

  cargarPasadas() {
    this.filtro = 'pasadas';
    this.obtenerReservas();
  }

  eliminarReserva(id: number) {
    const confirmacion = confirm('¿Estás seguro de eliminar esta reserva?');
    if (!confirmacion) return;

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const url = `${environment.apiUrl}/admin/reservas/${id}`;

    this.http.delete(url, { headers }).subscribe({
      next: () => {
        alert('✅ Reserva eliminada correctamente');
        this.obtenerReservas();
      },
      error: () => alert(' Error al eliminar la reserva')
    });
  }
}
