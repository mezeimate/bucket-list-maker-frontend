import {Component, Input} from '@angular/core';
import {AuthenticationService} from "./authentication/services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bucketListMaker-frontend';
  email: string = '';
  password: string = '';

  constructor(public authenticationService: AuthenticationService) { }

}
