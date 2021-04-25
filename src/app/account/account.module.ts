import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        AccountRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        LoginComponent,
        SignupComponent
    ]
})
export class AccountModule { }
