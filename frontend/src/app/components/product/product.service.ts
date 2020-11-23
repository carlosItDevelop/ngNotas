import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/Products";

  constructor(private snackBar: MatSnackBar, 
              private http: HttpClient) { }

  showOnToastr(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }

}
