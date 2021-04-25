import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {User} from '../../models/user';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;
    errMsg:string;

    constructor(private signupSrvc: SignupService, private router:Router) {
        this.errMsg = '';
        this.signupForm = new FormGroup({
            email: new FormControl('', {validators: [
                Validators.required,
                Validators.email,
                Validators.minLength(8)
            ], updateOn: 'blur'}),
            password: new FormControl('', {validators: [
                Validators.required,
                Validators.minLength(8)
            ], updateOn: 'blur'}),
            confirmPassword: new FormControl('', {validators: [
                Validators.required,
                Validators.minLength(8)
            ], updateOn: 'blur'})
        })
    }

    // convenience getter for easy access to form fields
    get f() { return this.signupForm.controls; }

    ngOnInit(): void {
    }

    clearForm(){
        this.signupForm.reset();
    }

    signup(){
        let user:User = {
            email: this.signupForm.value.email,
            password: this.signupForm.value.password,
        }

        this.signupSrvc.signup(user).subscribe( 
            (data) => {
                this.errMsg = '';
                localStorage.setItem('token', data.token);
                localStorage.setItem('email', user.email);
                this.router.navigate(['/user']);
            },
            (error) => {
                this.clearForm();
                this.errMsg = error.error.msg;
            }
        )
    }

}
