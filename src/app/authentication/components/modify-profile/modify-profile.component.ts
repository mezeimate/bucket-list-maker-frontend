import {Component, EventEmitter, Injectable, Input, Output} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Profile} from "../../../bucket/interfaces/profile.interface";
import {FileUpload} from "primeng/fileupload";
import {getDownloadURL, getStorage, ref, uploadBytes} from "@angular/fire/storage";
import {from} from "rxjs";

@Component({
    selector: 'app-modify-profile',
    templateUrl: './modify-profile.component.html',
    styleUrls: ['./modify-profile.component.css']
})
@Injectable({
    providedIn: 'root'
})
export class ModifyProfileComponent {

    @Input()
    public showDialog = false;

    public readonly profile: Profile;

    public images: any[] = [];

    @Output()
    public onUpdate = new EventEmitter;

    @Output()
    public onHide = new EventEmitter;

    public uploadedFiles: any[] = [];

    constructor(
        public authenticationService: AuthenticationService
    ) {
        const u = this.authenticationService.getLocalUser();
        this.profile = {
            displayName: u.displayName ?? '',
            photoURL: u.photoURL ?? ''
        }
    }

    public updateProfile() {
        if (this.uploadedFiles.length) {
            const storage = getStorage();
            const url = 'images/' + this.authenticationService.getLocalUser().uid + '/' + this.uploadedFiles[0].name;
            const storageRef = ref(storage, url);

            from(uploadBytes(storageRef, this.uploadedFiles[0])).subscribe(() => {
                from(getDownloadURL(storageRef)).subscribe((url) => {
                    this.profile.photoURL = url;
                    this.authenticationService.setProfile(this.profile);
                    this.uploadedFiles = [];
                });
            })
        } else {
            this.authenticationService.setProfile(this.profile);
        }
    }

    public onBasicUploadAuto(event: FileUpload) {
        this.uploadedFiles.push(event.files[0]);
    }
}
