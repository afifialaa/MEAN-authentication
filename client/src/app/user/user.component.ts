import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {User} from '../models/user';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    email:any;

    constructor(private route: ActivatedRoute) {
        this.email = localStorage.getItem('email');
    }


    ngOnInit( ): void {
    }

}
