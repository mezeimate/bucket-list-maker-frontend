import {Component, OnInit} from '@angular/core';
import {BucketListItem} from "../../../interfaces/bucket-list-item.interface";
import {AuthenticationService} from "../../../../authentication/services/authentication.service";
import {BucketListItemService} from "../../../../authentication/services/bucket-list-item.service";
import {CreateBucketListItem} from "../../../interfaces/create-bucket-list-item.interface";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
    selector: 'app-bucket-page',
    templateUrl: './bucket-page.component.html',
    styleUrls: ['./bucket-page.component.css']
})
export class BucketPageComponent implements OnInit {

    bucketListItems: BucketListItem[] = []
    bucketListItem!: CreateBucketListItem
    show = false

    constructor(
        public authenticationService: AuthenticationService,
        private bucketListItemService: BucketListItemService,
        private afAuth: AngularFireAuth
    ) {
        this.query()
    }

    query(): void {
        this.afAuth.authState.subscribe(u => {
            if (u) {
                u.getIdToken().then((idToken) => this.bucketListItemService.query({
                    idToken: idToken
                }).subscribe(bucketListQueryResponse => this.bucketListItems = bucketListQueryResponse.data))
            }
        })
    }

    ngOnInit(): void {
    }

    read(item: BucketListItem) {
        console.log(item)
    }

    delete() {
    }
}
