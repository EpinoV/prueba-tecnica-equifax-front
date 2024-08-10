import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8086/prueba-tecnica-equifax/api/v1/private';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(`${this.apiUrl}/allData`);
  }

  newData(data: { nombre: string; email: string; celular: string; rut: string }) {
    return this.http.post(`${this.apiUrl}/newData`, data);
  }

}
