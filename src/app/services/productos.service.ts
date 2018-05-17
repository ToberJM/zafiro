import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retryWhen, delayWhen, catchError, tap } from 'rxjs/operators';
import { timer } from 'rxjs';

import { GLOBAL } from './global';
import { handleError } from './errores';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url: string;
  private handleError: any;
  constructor(private _http: HttpClient) {
      this.url = GLOBAL.url;
      this.handleError = handleError;
  }
  getCategorias(item: string, valor: string) {
    return this._http.get(this.url + 'api-php/ajax/categorias.ajax.php' + '?item=' + item + '&valor=' + valor).pipe(
        retryWhen(errors =>
            errors.pipe(
                delayWhen(val => timer(val * 5000))
            )
        ),
        catchError(this.handleError) // then handle the error
      );
    }
    getSubCategorias(item, valor) {
        return this._http.get(this.url + 'api-php/ajax/subCategorias.ajax.php' + '?item=' + item + '&valor=' + valor).pipe(
            retryWhen(errors =>
                errors.pipe(
                    delayWhen(val => timer(val * 5000))
                )
            ),
            catchError(this.handleError) // then handle the error
        );
    }
  getProductos(item: string, valor: string, ordenar: string, base, tope, modo: string) {
    return this._http.get(this.url + 'api-php/ajax/productos.ajax.php' + '?item=' + item + '&valor=' + valor
     + '&ordenar=' + ordenar + '&base=' + base + '&tope=' + tope + '&modo=' + modo).pipe(
        retryWhen(errors =>
            errors.pipe(
                delayWhen(val => timer(val * 5000))
            )
        ),
        catchError(this.handleError) // then handle the error
        );
    }
    getListaProductos(item: string, valor: string, ordenar: string) {
        return this._http.get(this.url + 'api-php/ajax/listaProductos.ajax.php' + '?item=' + item + '&valor=' + valor
         + '&ordenar=' + ordenar).pipe(
            retryWhen(errors =>
                errors.pipe(
                    delayWhen(val => timer(val * 5000))
                )
            ),
            catchError(this.handleError) // then handle the error
            );
        }
}
