import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../authentication/services/authentication.service";
import {CreateBucketResponse} from "../interfaces/create-bucket-response.interface";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
    providedIn: 'root'
})
export class BucketService {

    constructor(
        private httpClient: HttpClient,
        private authenticationService: AuthenticationService,
        private afAuth: AngularFireAuth
    ) {
        this.afAuth.authState.subscribe()
    }

    createBucket(title: string, description: string): void {
        this.httpClient.post<CreateBucketResponse>('http://localhost:8080/bucket/create', {
            "title": title,
            "description": description,
            "idToken": this.authenticationService.idToken
        }).subscribe((response) => {
            console.log(response)
        })
    }
}
