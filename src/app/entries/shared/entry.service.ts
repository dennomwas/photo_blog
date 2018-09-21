import { Entry } from './entry.model';

// angular imports
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EntryService {
    constructor(private http: Http) {

    } // end constructor

    addComment(entryId: number, comment: string) {
        return this.http.post(`/app/entries/${entryId}/comments`, comment)
            .toPromise();
    }

    getEntries(): Promise<Entry[]> {
        return this.http.get('/app/entries')
            .toPromise()
            .then(response => response.json().data as Entry[])

    } // end getEntries

} // end class