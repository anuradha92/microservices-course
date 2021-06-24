import { Injectable } from '@angular/core';
import { PetOwnerModel } from './pet-owner.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PetOwnerService {
  private productsUrl = 'api/products/';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<PetOwnerModel[]> {
    return this.http.get<PetOwnerModel[]>(this.productsUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createProduct(product: PetOwnerModel): Observable<PetOwnerModel> {
    product.id = null;
    return this.http.post<PetOwnerModel>(this.productsUrl, product).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  editProduct(product: PetOwnerModel): Observable<any> {
    return this.http.put(this.productsUrl + product.id, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.productsUrl + id);
  }
}
