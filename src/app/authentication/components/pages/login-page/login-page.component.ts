import {Component} from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

    email = '';
    password = '';
    displayName = '';
    registration = false;
    registerPassword = '';

    constructor(
        public authenticationService: AuthenticationService
    ) {
    }

}
