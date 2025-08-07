import { Injectable } from '@angular/core';

export interface ColumnConfig {
  key: string;
  label: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  
  setCookie(name: string, value: string, days: number = 30): void {
    if (typeof document !== 'undefined') {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
  }

  getCookie(name: string): string | null {
    if (typeof document === 'undefined') {
      return null;
    }
    
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  }

  deleteCookie(name: string): void {
    if (typeof document !== 'undefined') {
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class TableConfigService {
  private readonly COOKIE_BASE_NAME = 'tableColumnConfig';
  
  constructor(private cookieService: CookieService) {}

  // Método auxiliar para generar el nombre de cookie específico del usuario
  private getCookieName(userId: number | string): string {
    return `${this.COOKIE_BASE_NAME}_user_${userId}`;
  }

  // Configuración por defecto de las columnas
  getDefaultColumns(): ColumnConfig[] {
    return [
      { key: 'id', label: 'ID', visible: true },
      { key: 'name', label: 'Nombre', visible: true },
      { key: 'email', label: 'Email', visible: true },
      { key: 'department', label: 'Departamento', visible: true },
      { key: 'position', label: 'Cargo', visible: false },
      { key: 'salary', label: 'Salario', visible: false }
    ];
  }

  getColumnConfig(userId?: number | string): ColumnConfig[] {
    if (!userId) {
      return this.getDefaultColumns();
    }

    const cookieName = this.getCookieName(userId);
    const savedConfig = this.cookieService.getCookie(cookieName);
    
    if (savedConfig) {
      try {
        return JSON.parse(savedConfig);
      } catch (error) {
        console.error('Error parsing column config from cookie:', error);
      }
    }
    
    return this.getDefaultColumns();
  }

  saveColumnConfig(columns: ColumnConfig[], userId?: number | string): void {
    if (!userId) {
      console.warn('No user ID provided, configuration will not be saved');
      return;
    }

    const cookieName = this.getCookieName(userId);
    this.cookieService.setCookie(cookieName, JSON.stringify(columns));
  }

  resetColumnConfig(userId?: number | string): void {
    if (!userId) {
      console.warn('No user ID provided, configuration will not be reset');
      return;
    }

    const cookieName = this.getCookieName(userId);
    this.cookieService.deleteCookie(cookieName);
  }

  // Método adicional para obtener información de todas las configuraciones guardadas
  getAllUserConfigs(): { userId: string, hasConfig: boolean }[] {
    if (typeof document === 'undefined') {
      return [];
    }

    const configs: { userId: string, hasConfig: boolean }[] = [];
    const cookies = document.cookie.split(';');
    
    cookies.forEach(cookie => {
      const trimmedCookie = cookie.trim();
      if (trimmedCookie.startsWith(this.COOKIE_BASE_NAME + '_user_')) {
        const userId = trimmedCookie.split('=')[0].replace(this.COOKIE_BASE_NAME + '_user_', '');
        configs.push({ userId, hasConfig: true });
      }
    });

    return configs;
  }
}
