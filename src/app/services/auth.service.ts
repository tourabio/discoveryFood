import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authSubject = new Subject<boolean>();

  constructor() { }
  isAuth = false;

  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            this.emitAuthSubject();
            resolve(true);
          }, 500
        );
      }
    );
  }

  signOut() {
    this.isAuth = false;
    this.emitAuthSubject();
  }

  emitAuthSubject(){
    this.authSubject.next(this.isAuth);
  }

}
