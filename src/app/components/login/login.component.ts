import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="login-container">
      <div class="login-card">
        <h2>Iniciar Sesión</h2>
        
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="username">Usuario</label>
            <input 
              type="text" 
              id="username" 
              formControlName="username" 
              placeholder="Ingrese su usuario"
              [class.error]="loginForm.get('username')?.invalid && loginForm.get('username')?.touched">
            <div *ngIf="loginForm.get('username')?.errors?.['required'] && loginForm.get('username')?.touched" 
                 class="error-message">
              El usuario es requerido
            </div>
          </div>

          <div class="form-group">
            <label for="password">Contraseña</label>
            <input 
              type="password" 
              id="password" 
              formControlName="password" 
              placeholder="Ingrese su contraseña"
              [class.error]="loginForm.get('password')?.invalid && loginForm.get('password')?.touched">
            <div *ngIf="loginForm.get('password')?.errors?.['required'] && loginForm.get('password')?.touched" 
                 class="error-message">
              La contraseña es requerida
            </div>
          </div>

          <div *ngIf="errorMessage" class="error-message general-error">
            {{ errorMessage }}
          </div>

          <button type="submit" [disabled]="loginForm.invalid || isLoading" class="login-btn">
            {{ isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión' }}
          </button>
        </form>

        <div class="demo-credentials">
          <h4>Credenciales de demo:</h4>
          <ul>
            <li><strong>admin</strong> / admin123</li>
            <li><strong>usuario1</strong> / pass123</li>
            <li><strong>demo</strong> / demo123</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm: FormGroup;
  errorMessage = '';
  isLoading = false;

  constructor() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';

      const { username, password } = this.loginForm.value as { username: string; password: string };
      
      // Simular delay de autenticación
      setTimeout(() => {
        const success = this.authService.login(username, password);
        
        if (success) {
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Usuario o contraseña incorrectos';
        }
        
        this.isLoading = false;
      }, 1000);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
