import {Component} from '@angular/core';
import {first} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AuthenticationService} from "../../../../authentication/services/authentication.service";
import {BucketListItemService} from "../../../../authentication/services/bucket-list-item.service";
import {MenuItem, MessageService} from "primeng/api";
import {BucketListItem} from "../../../interfaces/bucket-list-item.interface";

@Component({
    selector: 'app-bucket-page',
    templateUrl: './bucket-page.component.html',
    styleUrls: ['./bucket-page.component.css']
})
export class BucketPageComponent {

    public bucketListItems: BucketListItem[] = [];

    public showAddPanel = false;
    public showJoinPanel = false;
    public showModifyPanel = false;
    public showModifyProfilePanel = false;
    public bucketListItem!: BucketListItem
    items: MenuItem[] = [
        {
            label: "Profile",
            command: () => {
                this.showModifyProfilePanel = true
            }
        },
        {
            label: "Sign out"
        }
    ];

    constructor(
        public authenticationService: AuthenticationService,
        private afAuth: AngularFireAuth,
        private bucketListItemService: BucketListItemService,
        private messageService: MessageService
    ) {
        this.afAuth.authState.pipe(first()).subscribe(() => this.queryAction());
    }

    queryAction(): void {
        this.bucketListItemService.query(this.authenticationService.getIdToken() ?? '', {}).subscribe({
            next: (bucketListQueryResponse) => this.bucketListItems = bucketListQueryResponse,
            error: () => this.messageService.add({severity: 'error', detail: 'Service Unavailable!'})
        })
    }

    modifyAction(bucketListItem: BucketListItem): void {
        this.showModifyPanel = true;
        this.bucketListItemService.read(this.authenticationService.getIdToken() ?? '', bucketListItem.documentId).subscribe({
            next: (bucketListItem) => this.bucketListItem = bucketListItem,
            error: () => this.messageService.add({severity: 'error', detail: 'Service Unavailable!'})
        })
    }

    public showModifyProfile() {
        this.showModifyProfilePanel = true;
    }

    public hideModifyProfile() {
        this.showModifyProfilePanel = false;
    }
}
