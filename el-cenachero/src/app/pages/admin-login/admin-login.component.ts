import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-admin-login',
  standalone: false,
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  email = '';
  password = '';
  error: any;

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post<any>(`${environment.apiUrl}/admin/login`, {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/admin/reservas']);
      },
      error: () => {
        alert('Credenciales incorrectas');
      }
    });
  }
}
