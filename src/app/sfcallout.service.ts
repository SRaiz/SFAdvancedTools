import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SfcalloutService {

    constructor( private http: HttpClient ) { }

    createQuery( objectName: string, queryFields: string[] ): string {
        let queryString = 'SELECT ';
        if (queryFields.length > 0) {
            queryString += queryFields.join(', ');
        }
        queryString += ' FROM ' + objectName;
        return queryString;
    }

    getRequestToSf(queryString: string) {

        const requestUrl = sessionStorage.getItem('instanceUrl') + '/services/data/v46.0/query?q=' + queryString;

        // -- Send the get request to the URL. An observable is returned which is converted to IUserInfo interface --//
        const observbl = this.http.get( requestUrl, {
                                    headers: {
                                        Authorization: sessionStorage.getItem('tokenType') + ' ' + sessionStorage.getItem('accessToken'),
                                        'Content-Type': 'application/json'
                                    }
                                }).pipe( catchError(this.errorHandler));
        return observbl;
    }

    errorHandler(error: HttpErrorResponse) {
        console.log(error.message || 'Service Error');
        return throwError(error);
    }
}
