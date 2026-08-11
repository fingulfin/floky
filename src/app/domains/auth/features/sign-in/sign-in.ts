import { Component, inject, signal } from '@angular/core';
import {
  email,
  form,
  FormField,
  required,
  submit,
} from '@angular/forms/signals';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDivider } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { LocalStorage } from '@/app/core/local-storage/local-storage';
import { environment } from '@/environments/environment';
import { response } from 'express';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.html',
  imports: [
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    FormField,
    MatDivider,
  ],
})
export default class AuthSignIn {
  // Dependencies
  private router = inject(Router);
  private http = inject(HttpClient);
  private storage = inject(LocalStorage);

  // State
  protected signInFormModel = signal({
    email: 'hughes.brian@company.com',
    password: 'Secure-Password-123$%^',
  });
  protected signInForm = form(this.signInFormModel, (form) => {
    required(form.email, { message: 'You must enter an email address' });
    email(form.email, { message: 'You must enter a valid email address' });

    required(form.password, { message: 'You must enter a password' });
  });
  protected authError = signal<string | null>(null);

  signIn(event: Event) {
    event.preventDefault();
    this.authError.set(null);

    submit(this.signInForm, async () => {
      try {
        const response = await this.http
          .post<{ token: string }>(environment.apiUrl, {
            email: this.signInFormModel().email,
            password: this.signInFormModel().password,
          })
          .toPromise();

        if (response?.token) {
          this.storage.setItem('auth_token', response.token);
          this.router.navigateByUrl('/admin/modules');
        }
      } catch (error) {
        console.error('Login failed:', error);
        if (error instanceof HttpErrorResponse) {
          this.authError.set((error.error as { error?: string })?.error ?? 'Login failed');
        } else {
          this.authError.set("este es ");
        }
      }
    });
  }
}
