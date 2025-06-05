import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private apiUrl = `${environment.apiUrl}/reservas`;  // ✅ ahora configurable

  constructor(private http: HttpClient) {}

  enviarReserva(reserva: any): Observable<any> {
    return this.http.post(this.apiUrl, reserva);
  }
}
