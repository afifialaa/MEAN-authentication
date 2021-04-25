import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {User} from '../../models/user'

@Injectable({
    providedIn: 'root'
})
export class SignupService {

    constructor(private httpClient:HttpClient) { }

    signup(user:User){
        return this.httpClient.post<any>(environment.signupURL, user);
    }
}
