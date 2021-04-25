import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (localStorage.getItem('role') === null ) {
            localStorage.clear();
            this.router.navigate(['/login']);
            return false;
        } else if (localStorage.getItem('role') === 'admin') {
            return true;
        } else if(localStorage.getItem('role') === 'user') {
            this.router.navigate(['/login']);
            return false;
        }else{
            this.router.navigate(['/login']);
            return false;
        }
    }

}
