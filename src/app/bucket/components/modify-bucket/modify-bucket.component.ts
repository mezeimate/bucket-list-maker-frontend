import {Component, EventEmitter, Injectable, Input, Output} from '@angular/core';
import {from} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {BucketListItemService} from "../../../authentication/services/bucket-list-item.service";
import {BucketListItem} from "../../interfaces/bucket-list-item.interface";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
    selector: 'app-modify-bucket',
    templateUrl: './modify-bucket.component.html',
    styleUrls: ['./modify-bucket.component.css'],
    providers: [ConfirmationService]
})
@Injectable({
    providedIn: 'root'
})
export class ModifyBucketComponent {

    @Input()
    show = false;

    @Input()
    bucketListItem!: BucketListItem;

    @Output()
    onUpdate = new EventEmitter;

    @Output()
    onHide = new EventEmitter;

    constructor(
        private afAuth: AngularFireAuth,
        private bucketListItemService: BucketListItemService,
        private confirmationService: ConfirmationService,
        private messageService: MessageService
    ) {
    }

    putItem() {
        from(this.afAuth.idToken).subscribe({
            next: (idToken) => this.bucketListItemService.update(idToken ?? '', {
                title: this.bucketListItem.title,
                description: this.bucketListItem.description,
                complete: this.bucketListItem.complete
            }, this.bucketListItem.documentId).subscribe(
                () => {
                    this.show = false
                    this.onUpdate.emit()
                }
            )
        });
    }

    // deleteItem(event: Event) {
    //     this.confirmationService.confirm({
    //         target: event.target as EventTarget,
    //         message: "Are you sure that you want to delete this item?",
    //         icon: "pi pi-exclamation-triangle",
    //         accept: () => {
    //             from(this.afAuth.idToken).subscribe({
    //                 next: (idToken) => this.bucketListItemService.delete(idToken ?? '',
    //                     this.bucketListItem.documentId).subscribe(() => {
    //                     this.show = false
    //                     this.onUpdate.emit()
    //                 })
    //             });
    //         }
    //     });
    // }

    deleteItem() {
        this.confirmationService.confirm({
            message: 'Do you want to delete this item?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                from(this.afAuth.idToken).subscribe({
                    next: (idToken) => this.bucketListItemService.delete(idToken ?? '',
                        this.bucketListItem.documentId).subscribe(() => {
                        this.show = false
                        this.onUpdate.emit()
                    })
                });
                this.messageService.add({severity:'info', summary:'Confirmed', detail:'Item deleted'});
            }
        });
    }

}
