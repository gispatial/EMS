import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService  implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }
}
