import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
    selector: 'app-register-login',
    templateUrl: './register-login.component.html',
    styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {

    email: string = '';
    password: string = '';

    constructor(public authenticationService: AuthenticationService) {
    }

    ngOnInit(): void {

    }

}
