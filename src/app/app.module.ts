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
import {LoginPageComponent} from './authentication/components/pages/login-page/login-page.component';
import {RegisterLoginComponent} from './authentication/components/register-login/register-login.component';
import {BucketPageComponent} from './bucket/components/pages/bucket-page/bucket-page.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TableModule} from "primeng/table";
import {RippleModule} from "primeng/ripple";
import {Router} from "@angular/router";

@NgModule({
    declarations: [
        AppComponent,
        CreateBucketComponent,
        LoginPageComponent,
        RegisterLoginComponent,
        BucketPageComponent
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
        RippleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(public router: Router) {
        this.router.navigate(['auth']);
    }
}
