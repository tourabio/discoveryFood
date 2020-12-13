import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
//stop the user from consulting paths that he is not allowed to ,by redirecting him to path "/auth"
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService,
    private router: Router) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authService.isAuth) {
        return true;
      } else {

        this.router.navigate(['/auth']);
      }
    }
  }

