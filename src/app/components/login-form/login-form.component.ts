import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { BASE_URL } from '../../app.routes';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
})
export class LoginFormComponent {
  loginForm: FormGroup;
  error: string = '';
  loading: boolean = false;
  isEmailValid: boolean = false;
  isPasswordValid: boolean = false;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.loginForm.get('email')?.valueChanges.subscribe(() => {
      this.isEmailValid = this.loginForm.get('email')?.valid ?? false;
    });

    this.loginForm.get('password')?.valueChanges.subscribe(() => {
      this.isPasswordValid = this.loginForm.get('password')?.valid ?? false;
    });
  }

  async onSubmit(): Promise<void> {
    this.loading = true;
    const { email, password } = this.loginForm.value;

    this.apiService
      .login({ email, password })
      .then((response) => {
        const token = response.token;
        const role = response.role;
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        this.router.navigate([`${BASE_URL}/api/userassessments`]);
      })
      .catch(() => (this.error = 'Invalid email or password'))
      .finally(() => (this.loading = false));
  }
}
