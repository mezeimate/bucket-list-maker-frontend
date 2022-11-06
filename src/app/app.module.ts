import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {environment} from "../environments/environment";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {ButtonModule} from 'primeng/button';
import {HttpClientModule} from "@angular/common/http";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {AccordionModule} from 'primeng/accordion';
import {PanelModule} from 'primeng/panel';
import {MenuModule} from 'primeng/menu';
import {CreateBucketComponent} from './bucket/components/create-bucket/create-bucket.component';
import {JoinBucketComponent} from './bucket/components/join-bucket/join-bucket.component';
import {LoginPageComponent} from './authentication/components/pages/login-page/login-page.component';
import {BucketPageComponent} from './bucket/components/pages/bucket-page/bucket-page.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TableModule} from "primeng/table";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {MessageModule} from "primeng/message";
import {KeyFilterModule} from "primeng/keyfilter";
import {InputMaskModule} from "primeng/inputmask";
import {ModifyBucketComponent} from "./bucket/components/modify-bucket/modify-bucket.component";
import {CheckboxModule} from "primeng/checkbox";
import {ToggleButtonModule} from "primeng/togglebutton";
import {PasswordModule} from "primeng/password";
import {ChipModule} from "primeng/chip";
import {SplitButtonModule} from "primeng/splitbutton";
import {ModifyProfileComponent} from "./authentication/components/modify-profile/modify-profile.component";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {FileUploadModule} from "primeng/fileupload";
import {ConfirmDialogModule} from "primeng/confirmdialog";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {ImageModule} from "primeng/image";

firebase.initializeApp(environment.firebase);

@NgModule({
    declarations: [
        AppComponent,
        CreateBucketComponent,
        LoginPageComponent,
        BucketPageComponent,
        JoinBucketComponent,
        ModifyBucketComponent,
        ModifyProfileComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireDatabaseModule,
        FormsModule,
        ButtonModule,
        CardModule,
        InputTextModule,
        AccordionModule,
        PanelModule,
        MenuModule,
        TableModule,
        ReactiveFormsModule,
        RippleModule,
        DialogModule,
        InputTextareaModule,
        ToastModule,
        MessageModule,
        KeyFilterModule,
        InputMaskModule,
        CheckboxModule,
        ToggleButtonModule,
        PasswordModule,
        ChipModule,
        SplitButtonModule,
        ConfirmPopupModule,
        FileUploadModule,
        ConfirmDialogModule,
        ImageModule,
    ],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor() {
    }
}
