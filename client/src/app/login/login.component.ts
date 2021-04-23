import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {User} from '../models/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm:FormGroup;

    constructor(private loginSrvc:LoginService) { 
        this.loginForm = new FormGroup({
            email: new FormControl(''),
            password: new FormControl('')
        })
    }

    ngOnInit(): void {
    }

    login(){
        let user:User = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
        }

        this.loginSrvc.login(user).subscribe( (data) => {
            console.log(data);
        })
    }

}
