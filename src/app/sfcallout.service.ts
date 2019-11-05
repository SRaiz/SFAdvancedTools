import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
        const observbl = this.http.get(requestUrl, {
            headers: {
                Authorization: sessionStorage.getItem('tokenType') + ' ' + sessionStorage.getItem('accessToken'),
                'Content-Type': 'application/json'
            }
        });
        observbl.subscribe((response: any) => console.log(response));
    }
}
