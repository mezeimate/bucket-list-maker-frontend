import {Component, OnInit} from '@angular/core';
import {BucketListItem} from "../../../interfaces/bucket-list-item.interface";
import {AuthenticationService} from "../../../../authentication/services/authentication.service";
import {BucketListItemService} from "../../../../authentication/services/bucket-list-item.service";
import {BucketQueryRequest} from "../../../interfaces/bucket-query-request.interface";

@Component({
    selector: 'app-bucket-page',
    templateUrl: './bucket-page.component.html',
    styleUrls: ['./bucket-page.component.css']
})
export class BucketPageComponent implements OnInit {

    bucketListItems: BucketListItem[] = [];
    queryRequest: BucketQueryRequest = {idToken: this.authenticationService.idToken}

    constructor(
        public authenticationService: AuthenticationService,
        private bucketListItemService: BucketListItemService
    ) {
        this.bucketListItemService.query(this.queryRequest)
            .subscribe(bucketListQueryResponse => this.bucketListItems = bucketListQueryResponse.data)
    }

    ngOnInit(): void {
    }

    read(item: BucketListItem) {
        console.log(item)
    }

    update() {
    }

    delete() {
    }

}
