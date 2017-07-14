import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

    constructor(private router: Router) { }

    accessToken = null;
    username = null;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // not logged in so redirect to login page with the return url and return false
        this.router.navigate(['/get-started']);
        return false;
    }

    login(data){
        this.accessToken = data['authResponse']['accessToken'];
    }
}