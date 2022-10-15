import { Component, OnInit } from '@angular/core';
import {BucketListItem} from "../../../interfaces/bucket-list-item.interface";
import {AuthenticationService} from "../../../../authentication/services/authentication.service";

@Component({
  selector: 'app-bucket-page',
  templateUrl: './bucket-page.component.html',
  styleUrls: ['./bucket-page.component.css']
})
export class BucketPageComponent implements OnInit {
  bucketListItems: BucketListItem[] = [];

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {

  }

  update() {
  }

  delete() {

  }

}
