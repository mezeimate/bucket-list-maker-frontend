import {Component, OnInit} from '@angular/core';
import {BucketListItem} from "../../../interfaces/bucket-list-item.interface";
import {AuthenticationService} from "../../../../authentication/services/authentication.service";
import {BucketListItemService} from "../../../../authentication/services/bucket-list-item.service";
import {CreateBucketListItem} from "../../../interfaces/create-bucket-list-item.interface";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {MessageService} from "primeng/api";

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
        private afAuth: AngularFireAuth,
        private messageService: MessageService
    ) {
        this.query()
    }

    query(): void {
        this.afAuth.authState.subscribe(u => {
            if (u) {
                u.getIdToken().then((idToken) => this.bucketListItemService.query({
                    idToken: idToken
                }).subscribe({
                    next: bucketListQueryResponse => this.bucketListItems = bucketListQueryResponse.data,
                    error: () => this.messageService.add({severity: 'error', detail: 'Service Unavailable!'})
                }))
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
