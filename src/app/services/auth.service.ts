import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  id: number;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  // Datos ficticios de usuarios válidos
  private validUsers: User[] = [
    { id: 1, username: 'admin', email: 'admin@company.com' },
    { id: 2, username: 'usuario1', email: 'usuario1@company.com' },
    { id: 3, username: 'demo', email: 'demo@company.com' }
  ];

  // Contraseñas ficticias (en un proyecto real, esto iría en el backend)
  private validCredentials = [
    { username: 'admin', password: 'admin123' },
    { username: 'usuario1', password: 'pass123' },
    { username: 'demo', password: 'demo123' }
  ];

  constructor() {
    // Verificar si hay un usuario guardado en localStorage (solo en el navegador)
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const savedUser = localStorage.getItem('currentUser');
      if (savedUser) {
        this.currentUserSubject.next(JSON.parse(savedUser));
      }
    }
  }

  login(username: string, password: string): boolean {
    const credentials = this.validCredentials.find(
      cred => cred.username === username && cred.password === password
    );

    if (credentials) {
      const user = this.validUsers.find(u => u.username === username);
      if (user) {
        this.currentUserSubject.next(user);
        if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return true;
      }
    }
    return false;
  }

  logout(): void {
    this.currentUserSubject.next(null);
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.removeItem('currentUser');
    }
  }

  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
