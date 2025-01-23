import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  uploadOrders(fileData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/upload-orders`, fileData);
  }

  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/list-orders`);
  }
}
