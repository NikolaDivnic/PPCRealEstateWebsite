import { Injectable } from '@angular/core';
import { supabase } from './supabase.service'; 
import { Router } from '@angular/router'; // Import Router

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {} // Inject Router

  async signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
  
    if (error) {
      console.error('Error logging in with Google:', error);
    } else {
      console.log('User logged in with Google:', data);
      this.router.navigate(['/user-ads']); // Redirect after successful login
    }
  }
  

  async signInWithFacebook() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'facebook'
    })
  
    if (error) {
      console.error('Error logging in with Facebook:', error);
    } else {
      console.log('User logged in with Facebook:', data);
      this.router.navigate(['/user-ads']); // Redirect after successful login
    }
  }

  async signInWithEmail(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if (error) {
      console.error('Error logging in with email:', error);
      return 'Neispravan e-mail ili lozinka';
    } else {
      console.log('User logged in with email:', data);
      this.router.navigate(['/user-ads']); // Redirect after successful login
      return null;
    }
  }
  
}
