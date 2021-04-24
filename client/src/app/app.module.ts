import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

import {AccountModule} from './account/account.module';

import { BearerTokenInterceptor } from './interceptors/bearer-token.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UserComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        AccountModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BearerTokenInterceptor,
            multi: true
        }

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
