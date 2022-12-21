import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  BASE_URL: string = environment.BASE_URL;

  constructor(public http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const headers: HttpHeaders = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}` || ''
    );
    return this.http.get<Product[]>(`${this.BASE_URL}/products`, { headers });
  }
}
