import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  position: string;
  salary: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // Datos ficticios de empleados
  private employees: Employee[] = [
    {
      id: 1,
      name: 'Ana García',
      email: 'ana.garcia@company.com',
      department: 'Desarrollo',
      position: 'Senior Developer',
      salary: 65000
    },
    {
      id: 2,
      name: 'Carlos López',
      email: 'carlos.lopez@company.com',
      department: 'Marketing',
      position: 'Marketing Manager',
      salary: 55000
    },
    {
      id: 3,
      name: 'María Rodríguez',
      email: 'maria.rodriguez@company.com',
      department: 'Recursos Humanos',
      position: 'HR Specialist',
      salary: 45000
    },
    {
      id: 4,
      name: 'Juan Martínez',
      email: 'juan.martinez@company.com',
      department: 'Desarrollo',
      position: 'Junior Developer',
      salary: 40000
    },
    {
      id: 5,
      name: 'Laura Sánchez',
      email: 'laura.sanchez@company.com',
      department: 'Finanzas',
      position: 'Financial Analyst',
      salary: 50000
    },
    {
      id: 6,
      name: 'Pedro González',
      email: 'pedro.gonzalez@company.com',
      department: 'Ventas',
      position: 'Sales Representative',
      salary: 42000
    },
    {
      id: 7,
      name: 'Carmen Torres',
      email: 'carmen.torres@company.com',
      department: 'Desarrollo',
      position: 'Tech Lead',
      salary: 75000
    },
    {
      id: 8,
      name: 'David Ruiz',
      email: 'david.ruiz@company.com',
      department: 'Marketing',
      position: 'Content Creator',
      salary: 38000
    },
    {
      id: 9,
      name: 'Isabel Moreno',
      email: 'isabel.moreno@company.com',
      department: 'Recursos Humanos',
      position: 'HR Manager',
      salary: 60000
    },
    {
      id: 10,
      name: 'Roberto Jiménez',
      email: 'roberto.jimenez@company.com',
      department: 'Finanzas',
      position: 'CFO',
      salary: 95000
    }
  ];

  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }

  getEmployeeById(id: number): Observable<Employee | undefined> {
    const employee = this.employees.find(emp => emp.id === id);
    return of(employee);
  }
}
