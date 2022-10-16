import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BucketListQueryResponse} from "../../bucket/interfaces/bucket-list-query.interface";
import {BucketQueryRequest} from "../../bucket/interfaces/bucket-query-request.interface";
import {CreateBucketListItemResponse} from "../../bucket/interfaces/create-bucket-list-item-response.interface";
import {CreateBucketListItemRequest} from "../../bucket/interfaces/create-bucket-list-item-request.interface";

const baseURL = 'http://localhost:8080/bucket';

@Injectable({
    providedIn: 'root'
})
export class BucketListItemService {

    constructor(private httpClient: HttpClient) {
    }

    query(data: BucketQueryRequest) {
        return this.httpClient.post<BucketListQueryResponse>(`${baseURL}/query`, data);
    }

    read(id: string) {
        return this.httpClient.get<null>(`${baseURL}/${id}`);
    }

    create(data: CreateBucketListItemRequest) {
        return this.httpClient.post<CreateBucketListItemResponse>(`${baseURL}/create`, data);
    }

    //
    // update(id, data): Observable<any> {
    //     return this.httpClient.put(`${baseURL}/modify/${id}`, data);
    // }
    //
    // delete(id): Observable<any> {
    //     return this.httpClient.delete(`${baseURL}/${id}`);
    // }
}
