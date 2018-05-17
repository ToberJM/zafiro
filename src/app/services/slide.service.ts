import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { map, catchError, retry, retryWhen, tap, delayWhen } from 'rxjs/operators';
import { GLOBAL } from './global';
import { handleError } from './errores';
@Injectable()
export class SlideService {
    private url: string;
    private value: any[] = [];
    private handleError: any;
    constructor(private _http: HttpClient) {
        this.url = GLOBAL.url;
        this.handleError = handleError;
    }
    getDatos() {
        return this._http.get(this.url + 'api-php/ajax/slide.ajax.php').pipe(
            retryWhen(errors =>
                errors.pipe(
                    // log error message
                    tap(val => console.log(`Value ${val} was too high!`)),
                    // restart in 5 seconds
                    delayWhen(val => timer(val * 5000))
                )
            ),
            catchError(this.handleError) // then handle the error
          );
    }
}
