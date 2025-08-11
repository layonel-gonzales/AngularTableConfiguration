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

        <!-- CONTROLES Y FILTRO RESPONSIVO -->
        <div class="controls-filter-container">
          <!-- Botones de control -->
          <div class="control-buttons">
            <button 
              class="control-btn reset-btn" 
              (click)="resetUserConfig()" 
              title="Restablecer mi configuración">
              🔄
            </button>
            <button 
              class="control-btn config-btn" 
              (click)="toggleConfig()"
              title="Configurar Columnas">
              ⚙️
            </button>
          </div>
          
          <!-- Filtro responsivo que ocupa el resto del espacio -->
          <div class="filter-container">
            <div class="filter-input-wrapper">
              <span class="filter-icon">🔍</span>
              <input 
                type="text" 
                class="filter-input"
                placeholder="Buscar empleados..." 
                [(ngModel)]="globalFilter"
                (input)="onFilterChange()"
              />
            </div>
          </div>
        </div>

        <app-table-config 
          *ngIf="showConfig"
          [columns]="columns"
          (configChanged)="onConfigChanged($event)"
          (closeConfig)="toggleConfig()">
        </app-table-config>

        <!-- SECCIÓN DE TABLA CON POSICIÓN RELATIVA PARA PAGINACIÓN FIJA -->
        <div class="table-section">
          <!-- CONTENEDOR DE TABLA CON SCROLL HORIZONTAL -->
          <div class="table-wrapper">
            <div class="table-container">
              <div class="table-scroll-container">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th *ngFor="let column of visibleColumns">{{ column.label }}</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr *ngFor="let employee of paginatedEmployees">
                        <td *ngFor="let column of visibleColumns">
                          {{ getEmployeeValue(employee, column.key) }}
                        </td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- PAGINACIÓN SEPARADA Y FIJA EN MÓVILES -->
          <div class="pagination-wrapper" *ngIf="totalItems > 0">
            <div class="pagination-container">
              <!-- Primera línea: Botones izquierda, Selector derecha -->
              <div class="pagination-top-row">
                <!-- Navegación de páginas (IZQUIERDA) -->
                <div class="page-navigation" *ngIf="totalPages > 1">
                  <!-- Botón anterior -->
                  <button 
                    class="page-btn page-btn-nav" 
                    [disabled]="currentPage === 1"
                    (click)="previousPage()"
                    title="Página anterior">
                    ⟨
                  </button>

                  <!-- Números de página -->
                  <ng-container *ngFor="let pageNum of pageNumbers">
                    <button 
                      *ngIf="typeof pageNum === 'number'"
                      class="page-btn"
                      [class.active]="pageNum === currentPage"
                      (click)="goToPage(pageNum)"
                      [title]="'Página ' + pageNum">
                      {{ pageNum }}
                    </button>
                    <span *ngIf="typeof pageNum === 'string'" class="page-dots">{{ pageNum }}</span>
                  </ng-container>

                  <!-- Botón siguiente -->
                  <button 
                    class="page-btn page-btn-nav" 
                    [disabled]="currentPage === totalPages"
                    (click)="nextPage()"
                    title="Página siguiente">
                    ⟩
                  </button>
                </div>

                <!-- Selector de elementos por página (DERECHA) -->
                <div class="page-size-selector">
                  <label>Mostrar:</label>
                  <select [(ngModel)]="itemsPerPage" (change)="changePageSize(itemsPerPage)" class="page-size-select">
                    <option *ngFor="let size of pageSizeOptions" [value]="size">{{ size }}</option>
                  </select>
                </div>
              </div>

              <!-- Segunda línea: Información de resultados (IZQUIERDA) -->
              <div class="pagination-bottom-row">
                <div class="pagination-info">
                  <span>Mostrando {{ startItem }} - {{ endItem }} de {{ totalItems }} empleados</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SECCIÓN DE FUNCIONALIDADES DE LA DEMO -->
        <section class="features-section">
          <div class="features-container">
            <h2 class="features-title">🚀 Funcionalidades de esta Demo</h2>
            <div class="features-grid">
              
              <!-- Funcionalidad destacada: Configuración por usuario -->
              <div class="feature-card featured">
                <div class="feature-icon">👤</div>
                <h3>Configuración Personalizada por Usuario</h3>
                <p>
                  <strong>Capacidad única de seleccionar y guardar configuración de columnas por usuario.</strong>
                  Cada usuario puede personalizar qué columnas ver y el sistema recordará sus preferencias 
                  automáticamente usando cookies del navegador.
                </p>
                <ul>
                  <li>✅ Mostrar/Ocultar columnas específicas</li>
                  <li>✅ Configuración persistente por usuario</li>
                  <li>✅ Restaurar configuración por defecto</li>
                </ul>
              </div>

              <!-- Filtro global -->
              <div class="feature-card">
                <div class="feature-icon">🔍</div>
                <h3>Filtro Global Inteligente</h3>
                <p>
                  <strong>Capacidad de filtrar información desde un solo textbox con búsqueda en todas las columnas.</strong>
                  Sistema de búsqueda avanzado que encuentra coincidencias en tiempo real.
                </p>
                <ul>
                  <li>✅ Búsqueda en todas las columnas simultáneamente</li>
                  <li>✅ Filtrado en tiempo real</li>
                  <li>✅ Interfaz responsiva que ocupa todo el espacio</li>
                </ul>
              </div>

              <!-- Paginación -->
              <div class="feature-card">
                <div class="feature-icon">📄</div>
                <h3>Paginación Vanguardista</h3>
                <p>
                  <strong>Sistema de paginación moderno con diseño de vanguardia.</strong>
                  Implementación avanzada con controles intuitivos y optimización móvil.
                </p>
                <ul>
                  <li>✅ Diseño moderno con efectos visuales</li>
                  <li>✅ Navegación inteligente de páginas</li>
                  <li>✅ Optimizada para dispositivos móviles</li>
                  <li>✅ Selector dinámico de elementos por página</li>
                </ul>
              </div>

              <!-- Responsividad -->
              <div class="feature-card">
                <div class="feature-icon">📱</div>
                <h3>Diseño Totalmente Responsivo</h3>
                <p>
                  Adaptación perfecta a cualquier dispositivo con scroll horizontal 
                  independiente para tablas con muchas columnas.
                </p>
                <ul>
                  <li>✅ Scroll horizontal independiente</li>
                  <li>✅ Paginación fija en móviles</li>
                  <li>✅ Controles adaptables</li>
                </ul>
              </div>

              <!-- Persistencia -->
              <div class="feature-card">
                <div class="feature-icon">💾</div>
                <h3>Persistencia de Datos</h3>
                <p>
                  Sistema de almacenamiento local que mantiene las preferencias 
                  del usuario entre sesiones.
                </p>
                <ul>
                  <li>✅ Configuraciones guardadas en cookies</li>
                  <li>✅ Persistencia por usuario</li>
                  <li>✅ Recuperación automática</li>
                </ul>
              </div>

              <!-- Autenticación -->
              <div class="feature-card">
                <div class="feature-icon">🔐</div>
                <h3>Sistema de Autenticación</h3>
                <p>
                  Manejo de usuarios con autenticación simple y gestión de sesiones.
                </p>
                <ul>
                  <li>✅ Login/Logout funcional</li>
                  <li>✅ Gestión de sesiones</li>
                  <li>✅ Protección de rutas</li>
                </ul>
              </div>

            </div>

            <!-- Pie de sección -->
            <div class="features-footer">
              <p>
                <strong>💡 Demo Técnica:</strong> Esta aplicación demuestra capacidades avanzadas 
                de Angular con componentes standalone, gestión de estado, y diseño responsivo moderno.
              </p>
            </div>
          </div>
        </section>
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

  // Propiedades de paginación
  currentPage: number = 1;
  itemsPerPage: number = 5;
  pageSizeOptions: number[] = [5, 10, 15, 20];

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

  get paginatedEmployees(): Employee[] {
    const filtered = this.filteredEmployees;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return filtered.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
  }

  get totalItems(): number {
    return this.filteredEmployees.length;
  }

  get startItem(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endItem(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }

  get pageNumbers(): (number | string)[] {
    const total = this.totalPages;
    const current = this.currentPage;
    const delta = 2; // Número de páginas a mostrar alrededor de la actual
    
    const range = [];
    const rangeWithDots: (number | string)[] = [];

    for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
      range.push(i);
    }

    if (current - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (current + delta < total - 1) {
      rangeWithDots.push('...', total);
    } else if (total > 1) {
      rangeWithDots.push(total);
    }

    return rangeWithDots.filter((v, i, a) => a.indexOf(v) === i && v !== 1 || i === 0);
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

  // Métodos de paginación
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  changePageSize(size: number): void {
    this.itemsPerPage = size;
    this.currentPage = 1; // Resetear a la primera página
  }

  onFilterChange(): void {
    this.currentPage = 1; // Resetear a la primera página cuando se filtren los datos
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
