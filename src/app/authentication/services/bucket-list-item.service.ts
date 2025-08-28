import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CreateBucketListItemResponse} from "../../bucket/interfaces/create-bucket-list-item-response.interface";
import {CreateBucketListItemRequest} from "../../bucket/interfaces/create-bucket-list-item-request.interface";
import {BucketQueryRequest} from "../../bucket/interfaces/bucket-query-request.interface";
import {ModifyBucketListItemRequest} from "../../bucket/interfaces/modifyBucketListItemRequest";
import {JoinBucketListItemRequest} from "../../bucket/interfaces/join-request.interface";
import {BucketListItem} from "../../bucket/interfaces/bucket-list-item.interface";

const baseURL = 'https://prod--bucketlistmakerservice--zw6v5p9k8vc6.code.run/bucket';

@Injectable({
    providedIn: 'root'
})
export class BucketListItemService {

    constructor(
        private httpClient: HttpClient
    ) {
    }

    public query(idToken: string, data: BucketQueryRequest) {
        return this.httpClient.post<BucketListItem[]>(`${baseURL}/query`, data, this.makeOptions(idToken));
    }

    public read(idToken: string, id: string) {
        return this.httpClient.get<BucketListItem>(`${baseURL}/get/${id}`, this.makeOptions(idToken));
    }

    public create(idToken: string, data: CreateBucketListItemRequest) {
        return this.httpClient.post<CreateBucketListItemResponse>(`${baseURL}/create`, data, this.makeOptions(idToken));
    }

    public update(idToken: string, data: ModifyBucketListItemRequest, id: string) {
        return this.httpClient.patch<BucketListItem>(`${baseURL}/modify/${id}`, data, this.makeOptions(idToken));
    }

    public join(idToken: string, data: JoinBucketListItemRequest) {
        return this.httpClient.post(`${baseURL}/join`, data, this.makeOptions(idToken));
    }

    public delete(idToken: string, id: string) {
        return this.httpClient.delete(`${baseURL}/delete/${id}`, this.makeOptions(idToken));
    }

    private makeOptions(idToken: string) {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'SessionIdToken': idToken
            })
        };
    }

}
