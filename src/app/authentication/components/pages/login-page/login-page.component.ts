import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";
import {RegistrationService} from "../../../services/registration.service";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    email: string = '';
    password: string = '';
    displayName: string = '';


    constructor(
        public authenticationService: AuthenticationService,
        public registrationService: RegistrationService,
    ) {
    }

    ngOnInit(): void {
    }

}
