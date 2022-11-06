import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {BucketListItemService} from "../../../authentication/services/bucket-list-item.service";
import {AuthenticationService} from "../../../authentication/services/authentication.service";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-create-bucket',
    templateUrl: './create-bucket.component.html',
    styleUrls: ['./create-bucket.component.css']
})
export class CreateBucketComponent {

    title = '';
    description = '';

    @Input()
    show = false

    @Output()
    onHide = new EventEmitter

    @Output()
    onAdd = new EventEmitter

    constructor(
        private afAuth: AngularFireAuth,
        private authenticationService: AuthenticationService,
        private bucketListItemService: BucketListItemService,
        private messageService: MessageService
    ) {
    }

    create() {
        this.bucketListItemService.create(this.authenticationService.getIdToken() ?? '', {
            title: this.title,
            description: this.description
        }).subscribe({
            next: () => {
                this.title = '';
                this.description = '';
                this.show = false;
                this.onAdd.emit();
            },
            error: () => this.messageService.add({severity: 'error', detail: 'Service Unavailable!'})
        })
    }

}
