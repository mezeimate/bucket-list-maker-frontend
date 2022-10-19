import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BucketListItemService} from "../../../authentication/services/bucket-list-item.service";
import {AuthenticationService} from "../../../authentication/services/authentication.service";

@Component({
    selector: 'app-create-bucket',
    templateUrl: './create-bucket.component.html',
    styleUrls: ['./create-bucket.component.css']
})
export class CreateBucketComponent implements OnInit {

    title = ''
    description = ''
    @Output() onHide = new EventEmitter
    @Input() show = false

    constructor(
        private bucketListItemService: BucketListItemService,
        private authenticationService: AuthenticationService
    ) {
    }

    ngOnInit(): void {
    }

    create() {
        this.bucketListItemService.create({
            title: this.title,
            description: this.description,
            idToken: this.authenticationService.idToken
        }).subscribe(() => {
            this.show = false
        })
        this.title = ''
        this.description = ''
    }

}
