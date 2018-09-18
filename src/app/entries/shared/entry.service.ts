import { Entry } from './entry.model';

// angular imports
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EntryService {
    constructor(private http: Http) {

    } // end constructor

    getEntries(): Promise<Entry[]> {
        return this.http.get('/app/entries')
            .toPromise()
            .then(response => response.json().data as Entry[])

    } // end getEntries

} // end class