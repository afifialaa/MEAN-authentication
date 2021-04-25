import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BearerTokenInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const token = localStorage.getItem("token");
		const headers = new HttpHeaders().set("Authorization", "Bearer " + token);

		const clone = request.clone({
			headers: headers
		})

    	return next.handle(clone);
    }
}
