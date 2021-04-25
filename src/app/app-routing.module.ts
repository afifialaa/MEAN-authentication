import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AdminGuard} from './guards/admin.guard';
import {AuthGuard} from './guards/auth.guard';

/* Components */
import {SignupComponent} from './account/signup/signup.component';
import {LoginComponent} from './account/login/login.component';
import {UserComponent} from './user/user.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'user', canActivate: [AuthGuard], component: UserComponent},
    {path: 'admin', canActivate: [AuthGuard, AdminGuard], component: AdminComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: '**', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
