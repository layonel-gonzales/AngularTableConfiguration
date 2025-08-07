import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataService, Employee } from '../../services/data.service';
import { TableConfigService, ColumnConfig } from '../../services/table-config.service';
import { TableConfigComponent } from '../table-config/table-config.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TableConfigComponent],
  template: `
    <div class="dashboard-container">
      <header class="dashboard-header">
        <div class="header-content">
          <h1>Panel de Control</h1>
          <div class="user-info">
            <span *ngIf="currentUser">Bienvenido, {{ currentUser.username }}</span>
            <button class="logout-btn" (click)="logout()">Cerrar Sesión</button>
          </div>
        </div>
      </header>

      <main class="dashboard-main">
        <div class="table-controls">
          <div class="table-header">
            <h2>Lista de Empleados</h2>
            <small class="user-config-info" *ngIf="currentUser">
              Configuración para: <strong>{{ currentUser.username }}</strong>
            </small>
          </div>
          <div class="controls-buttons">
            <button class="reset-btn" (click)="resetUserConfig()" title="Restablecer mi configuración">
              <span class="reset-icon">🔄</span>
              Restablecer
            </button>
            <button class="config-btn" (click)="toggleConfig()">
              <span class="config-icon">⚙️</span>
              Configurar Columnas
            </button>
          </div>
        </div>

        <app-table-config 
          *ngIf="showConfig"
          [columns]="columns"
          (configChanged)="onConfigChanged($event)"
          (closeConfig)="toggleConfig()">
        </app-table-config>

        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th *ngFor="let column of visibleColumns">{{ column.label }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let employee of employees">
                <td *ngFor="let column of visibleColumns">
                  {{ getEmployeeValue(employee, column.key) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  `,
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  private authService = inject(AuthService);
  private dataService = inject(DataService);
  private tableConfigService = inject(TableConfigService);
  private router = inject(Router);

  currentUser = this.authService.getCurrentUser();
  employees: Employee[] = [];
  columns: ColumnConfig[] = [];
  showConfig = false;

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return;
    }

    this.loadData();
    this.loadColumnConfig();
  }

  get visibleColumns(): ColumnConfig[] {
    return this.columns.filter(col => col.visible);
  }

  loadData(): void {
    this.dataService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  loadColumnConfig(): void {
    const userId = this.currentUser?.id;
    this.columns = this.tableConfigService.getColumnConfig(userId);
  }

  onConfigChanged(updatedColumns: ColumnConfig[]): void {
    this.columns = updatedColumns;
    const userId = this.currentUser?.id;
    this.tableConfigService.saveColumnConfig(updatedColumns, userId);
  }

  toggleConfig(): void {
    this.showConfig = !this.showConfig;
  }

  resetUserConfig(): void {
    const userId = this.currentUser?.id;
    this.tableConfigService.resetColumnConfig(userId);
    this.loadColumnConfig(); // Recargar la configuración por defecto
  }

  getEmployeeValue(employee: Employee, key: string): any {
    const value = (employee as any)[key];
    
    // Formatear salario
    if (key === 'salary') {
      return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR'
      }).format(value);
    }
    
    return value;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
