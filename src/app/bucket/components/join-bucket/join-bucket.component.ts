import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BucketListItemService} from "../../../authentication/services/bucket-list-item.service";
import {MessageService} from "primeng/api";
import {from} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
    selector: 'app-join-bucket',
    templateUrl: './join-bucket.component.html',
    styleUrls: ['./join-bucket.component.css']
})
export class JoinBucketComponent implements OnInit {

    inviteCode: string = '';

    @Input()
    show = false

    @Output()
    onHide = new EventEmitter

    @Output()
    onJoin = new EventEmitter

    constructor(
        private afAuth: AngularFireAuth,
        private bucketListItemService: BucketListItemService,
        private messageService: MessageService
    ) {
    }

    ngOnInit(): void {
    }

    join() {
        from(this.afAuth.idToken).subscribe({
            next: (idToken) => this.bucketListItemService.join(idToken ?? '', {
                inviteCode: this.inviteCode
            }).subscribe(() => {
                this.messageService.add({severity: 'success', detail: 'Successfully joined this item!'});
                this.show = false
                this.onJoin.emit()
                this.inviteCode = ''
            })
        });
    }
}
