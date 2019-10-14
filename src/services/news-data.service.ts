import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoints } from '../utils/endpoints';

import { Observable, forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export default class NewsService {
    constructor(private _http: HttpClient) { }

    getStories(url: string) {
        // make a request to get all items associated with each id
        return this.getStoryIds(url).pipe(
            mergeMap((ids) => forkJoin(ids.map(id => this._http.get(endpoints.getStoryItem(id))))),
        );
    }

    getStoryIds(url: string): Observable<any> {
        // make a http request to get story ids (limit to only 30ids)
        return this._http.get(url, {
            params: {
                orderBy: '"$key"',
                limitToFirst: '30',
            }
        });
    }
}