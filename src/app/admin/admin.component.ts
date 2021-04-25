import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    email:any;
    constructor(private router:Router) {
        this.email = localStorage.getItem('email');
    }

    ngOnInit(): void {
    }

    logout(){
        localStorage.clear();
        this.router.navigate(['/login']);
    }

}
