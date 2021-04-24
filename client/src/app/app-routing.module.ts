import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import {SignupComponent} from './account/signup/signup.component';
import {LoginComponent} from './account/login/login.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'user', component: UserComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: '**', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
