import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BucketListQueryResponse} from "../../bucket/interfaces/bucket-list-query.interface";
import {BucketQueryRequest} from "../../bucket/interfaces/bucket-query-request.interface";

const baseURL = 'http://localhost:8080/bucket';

@Injectable({
    providedIn: 'root'
})
export class BucketListItemService {

    constructor(private httpClient: HttpClient) { }

    query(data: BucketQueryRequest) {
        return this.httpClient.post<BucketListQueryResponse>(`${baseURL}/query`, data);
    }

    read(id: string){
        return this.httpClient.get<null>(`${baseURL}/${id}`);
    }

    // create(data){
    //     return this.httpClient.post(`${baseURL}/create`, data);
    // }
    //
    // update(id, data): Observable<any> {
    //     return this.httpClient.put(`${baseURL}/modify/${id}`, data);
    // }
    //
    // delete(id): Observable<any> {
    //     return this.httpClient.delete(`${baseURL}/${id}`);
    // }
}
