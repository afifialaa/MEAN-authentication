import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {User} from '../models/user';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;

    constructor(private signupSrvc: SignupService) {
        this.signupForm = new FormGroup({
            email: new FormControl(''),
            password: new FormControl('')
        })
    }

    ngOnInit(): void {
    }

    signup(){
        let user:User = {
            email: this.signupForm.value.email,
            password: this.signupForm.value.password,
        }

        this.signupSrvc.signup(user).subscribe( (data) => {
            console.log(data);
        })


    }

}
