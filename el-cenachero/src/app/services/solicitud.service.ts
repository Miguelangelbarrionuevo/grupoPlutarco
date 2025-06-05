import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private apiUrl = `${environment.apiUrl}/trabaja`;  // ✅ usando variable de entorno

  constructor(private http: HttpClient) {}

  enviarSolicitud(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
