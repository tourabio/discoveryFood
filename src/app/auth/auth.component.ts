import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authStatus: boolean;
  correctFields:boolean;
  registerForm:FormGroup;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.correctFields=true;
    this.authStatus = false;
    this.registerForm = new FormGroup({
      username : new FormControl('', Validators.required),
      password : new FormControl('', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]),
    });
  }

  onSignIn() {
    if(this.username.value=="admin" && this.password.value=="Admin@123"){
      this.correctFields = true;
      this.authStatus = true;
    this.authService.signIn().then(
      () => {
        console.log('Sign in successful!');
         
        this.router.navigate(['foods']);
      },
    );
  }else{
    this.correctFields = false;
  }
  }

 /* onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }*/

  get username(){
    return this.registerForm.get('username');
  }

  get password(){
    return this.registerForm.get('password');
  }
}
