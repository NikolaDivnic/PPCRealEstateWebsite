import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;
  loginErrorMessage: string | null = null; 

  constructor(private authService: AuthService) { }

  signInWithGoogle() {
    this.authService.signInWithGoogle();
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook();
  }

  async signInWithEmail() {
    this.loginErrorMessage = await this.authService.signInWithEmail(this.email, this.password);
  }
  
}
