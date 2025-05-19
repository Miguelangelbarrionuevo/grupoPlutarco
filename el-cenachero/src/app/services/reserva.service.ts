import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private apiUrl = 'http://127.0.0.1:8000/api/reservas'; 

  constructor(private http: HttpClient) {}

  enviarReserva(reserva: any): Observable<any> {
    return this.http.post(this.apiUrl, reserva);
  }
}
