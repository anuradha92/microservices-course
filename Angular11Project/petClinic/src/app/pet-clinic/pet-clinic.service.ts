import { Injectable } from '@angular/core';
import { PetClinicModel } from './pet-clinic.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PetClinicService {
  private productsUrl = 'api/products/';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<PetClinicModel[]> {
    return this.http.get<PetClinicModel[]>(this.productsUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createProduct(product: PetClinicModel): Observable<PetClinicModel> {
    product.id = null;
    return this.http.post<PetClinicModel>(this.productsUrl, product).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  editProduct(product: PetClinicModel): Observable<any> {
    return this.http.put(this.productsUrl + product.id, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.productsUrl + id);
  }
}
