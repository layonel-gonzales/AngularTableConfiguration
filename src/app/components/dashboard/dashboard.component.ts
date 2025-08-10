import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataService, Employee } from '../../services/data.service';
import { TableConfigService, ColumnConfig } from '../../services/table-config.service';
import { TableConfigComponent } from '../table-config/table-config.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, TableConfigComponent],
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
        </div>

        <!-- CONTROLES Y FILTRO EN UNA LÍNEA -->
        <div style="background: #f8f9fa; padding: 15px; margin: 15px 0; border: 1px solid #ddd; border-radius: 8px; display: flex; align-items: center; gap: 20px;">
          <!-- Botones a la izquierda (uno arriba del otro) -->
          <div style="display: flex; flex-direction: column; gap: 5px;">
            <button 
              class="mini-btn" 
              (click)="resetUserConfig()" 
              title="Restablecer mi configuración"
              style="background: #fff; border: 1px solid #ddd; border-radius: 4px; padding: 6px 8px; font-size: 14px; cursor: pointer; transition: all 0.2s;">
              🔄
            </button>
            <button 
              class="mini-btn" 
              (click)="toggleConfig()"
              title="Configurar Columnas"
              style="background: #fff; border: 1px solid #ddd; border-radius: 4px; padding: 6px 8px; font-size: 14px; cursor: pointer; transition: all 0.2s;">
              ⚙️
            </button>
          </div>
          
          <!-- Filtro después de los botones -->
          <div style="position: relative; display: flex; align-items: center;">
            <input 
              type="text" 
              placeholder="🔍 Buscar empleados..." 
              [(ngModel)]="globalFilter"
              style="padding: 10px 15px; font-size: 16px; width: 250px; border: 1px solid #ccc; border-radius: 4px; outline: none; transition: border-color 0.3s;"
            />
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
                <tr *ngFor="let employee of filteredEmployees">
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
  globalFilter: string = '';

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

  get filteredEmployees(): Employee[] {
    if (!this.globalFilter.trim()) {
      return this.employees;
    }
    const filter = this.globalFilter.trim().toLowerCase();
    return this.employees.filter(emp =>
      this.visibleColumns.some(col => {
        // Obtener el valor formateado para mostrar
        const displayValue = this.getEmployeeValue(emp, col.key);
        const searchValue = String(displayValue ?? '').toLowerCase();
        return searchValue.includes(filter);
      })
    );
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
