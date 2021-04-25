import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    email:any;

    constructor(private router:Router) {
        this.email = localStorage.getItem('email');
    }


    ngOnInit( ): void {
    }

    logout(){
        localStorage.clear();
        this.router.navigate(['/login']);
    }

}
