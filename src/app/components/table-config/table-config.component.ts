import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnConfig } from '../../services/table-config.service';

@Component({
  selector: 'app-table-config',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="config-overlay" (click)="onOverlayClick($event)">
      <div class="config-modal">
        <div class="config-header">
          <h3>Configurar Columnas</h3>
          <button class="close-btn" (click)="closeConfig.emit()">×</button>
        </div>
        
        <div class="config-content">
          <p>Selecciona las columnas que deseas mostrar en la tabla:</p>
          
          <div class="column-list">
            <div *ngFor="let column of localColumns; let i = index" class="column-item">
              <label class="checkbox-label">
                <input 
                  type="checkbox" 
                  [checked]="column.visible" 
                  (change)="toggleColumn(i)">
                <span class="checkmark"></span>
                {{ column.label }}
              </label>
            </div>
          </div>
        </div>
        
        <div class="config-footer">
          <button class="btn btn-secondary" (click)="resetColumns()">Restablecer</button>
          <button class="btn btn-primary" (click)="saveConfig()">Guardar</button>
        </div>
      </div>
    </div>
  `,
  styleUrl: './table-config.component.css'
})
export class TableConfigComponent {
  @Input() columns: ColumnConfig[] = [];
  @Output() configChanged = new EventEmitter<ColumnConfig[]>();
  @Output() closeConfig = new EventEmitter<void>();

  localColumns: ColumnConfig[] = [];

  ngOnInit(): void {
    this.localColumns = [...this.columns];
  }

  toggleColumn(index: number): void {
    this.localColumns[index].visible = !this.localColumns[index].visible;
  }

  saveConfig(): void {
    this.configChanged.emit([...this.localColumns]);
    this.closeConfig.emit();
  }

  resetColumns(): void {
    this.localColumns = this.localColumns.map(col => ({ ...col, visible: true }));
  }

  onOverlayClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.closeConfig.emit();
    }
  }
}
