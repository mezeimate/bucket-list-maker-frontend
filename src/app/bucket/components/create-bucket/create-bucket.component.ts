import {Component, OnInit} from '@angular/core';
import {BucketService} from "../../services/bucket.service";

@Component({
    selector: 'app-create-bucket',
    templateUrl: './create-bucket.component.html',
    styleUrls: ['./create-bucket.component.css']
})
export class CreateBucketComponent implements OnInit {

    title: string = '';
    description: string = '';

    constructor(
        public bucketService: BucketService
    ) {
    }

    ngOnInit(): void {
    }

}
