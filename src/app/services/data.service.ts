import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  position: string;
  salary: number;
  hireDate: string;
  status: 'Activo' | 'Inactivo' | 'Vacaciones' | 'Licencia';
  location: string;
  phone: string;
  experience: number; // años de experiencia
  skills: string[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // Datos ficticios de empleados con información ampliada
  private employees: Employee[] = [
    {
      id: 1,
      name: 'Ana García',
      email: 'ana.garcia@company.com',
      department: 'Desarrollo',
      position: 'Senior Developer',
      salary: 65000,
      hireDate: '2019-03-15',
      status: 'Activo',
      location: 'Madrid, España',
      phone: '+34 612 345 678',
      experience: 8,
      skills: ['Angular', 'TypeScript', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      name: 'Carlos López',
      email: 'carlos.lopez@company.com',
      department: 'Marketing',
      position: 'Marketing Manager',
      salary: 55000,
      hireDate: '2020-01-20',
      status: 'Activo',
      location: 'Barcelona, España',
      phone: '+34 623 456 789',
      experience: 6,
      skills: ['SEO', 'Google Analytics', 'Content Strategy', 'Social Media']
    },
    {
      id: 3,
      name: 'María Rodríguez',
      email: 'maria.rodriguez@company.com',
      department: 'Recursos Humanos',
      position: 'HR Specialist',
      salary: 45000,
      hireDate: '2021-06-10',
      status: 'Vacaciones',
      location: 'Valencia, España',
      phone: '+34 634 567 890',
      experience: 4,
      skills: ['Recruitment', 'Employee Relations', 'Payroll', 'Training']
    },
    {
      id: 4,
      name: 'Juan Martínez',
      email: 'juan.martinez@company.com',
      department: 'Desarrollo',
      position: 'Junior Developer',
      salary: 40000,
      hireDate: '2023-09-01',
      status: 'Activo',
      location: 'Sevilla, España',
      phone: '+34 645 678 901',
      experience: 2,
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Git']
    },
    {
      id: 5,
      name: 'Laura Sánchez',
      email: 'laura.sanchez@company.com',
      department: 'Finanzas',
      position: 'Financial Analyst',
      salary: 50000,
      hireDate: '2020-11-05',
      status: 'Activo',
      location: 'Bilbao, España',
      phone: '+34 656 789 012',
      experience: 5,
      skills: ['Excel Avanzado', 'SAP', 'Financial Modeling', 'Power BI']
    },
    {
      id: 6,
      name: 'Pedro González',
      email: 'pedro.gonzalez@company.com',
      department: 'Ventas',
      position: 'Sales Representative',
      salary: 42000,
      hireDate: '2022-02-14',
      status: 'Activo',
      location: 'Málaga, España',
      phone: '+34 667 890 123',
      experience: 3,
      skills: ['CRM', 'Salesforce', 'Negotiation', 'Lead Generation']
    },
    {
      id: 7,
      name: 'Carmen Torres',
      email: 'carmen.torres@company.com',
      department: 'Desarrollo',
      position: 'Tech Lead',
      salary: 75000,
      hireDate: '2018-07-22',
      status: 'Activo',
      location: 'Madrid, España',
      phone: '+34 678 901 234',
      experience: 10,
      skills: ['Architecture', 'Docker', 'Kubernetes', 'AWS', 'Team Leadership']
    },
    {
      id: 8,
      name: 'David Ruiz',
      email: 'david.ruiz@company.com',
      department: 'Marketing',
      position: 'Content Creator',
      salary: 38000,
      hireDate: '2023-04-18',
      status: 'Licencia',
      location: 'Granada, España',
      phone: '+34 689 012 345',
      experience: 2,
      skills: ['Adobe Creative Suite', 'Video Editing', 'Copywriting', 'Canva']
    },
    {
      id: 9,
      name: 'Isabel Moreno',
      email: 'isabel.moreno@company.com',
      department: 'Recursos Humanos',
      position: 'HR Manager',
      salary: 60000,
      hireDate: '2019-12-03',
      status: 'Activo',
      location: 'Zaragoza, España',
      phone: '+34 690 123 456',
      experience: 7,
      skills: ['Team Management', 'Conflict Resolution', 'HRIS', 'Performance Management']
    },
    {
      id: 10,
      name: 'Roberto Jiménez',
      email: 'roberto.jimenez@company.com',
      department: 'Finanzas',
      position: 'CFO',
      salary: 95000,
      hireDate: '2017-01-10',
      status: 'Activo',
      location: 'Madrid, España',
      phone: '+34 601 234 567',
      experience: 15,
      skills: ['Strategic Planning', 'Budget Management', 'Tax Planning', 'Investment Analysis']
    },
    {
      id: 11,
      name: 'Sofía Delgado',
      email: 'sofia.delgado@company.com',
      department: 'Diseño',
      position: 'UX/UI Designer',
      salary: 52000,
      hireDate: '2021-08-25',
      status: 'Activo',
      location: 'Barcelona, España',
      phone: '+34 612 345 789',
      experience: 4,
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping']
    },
    {
      id: 12,
      name: 'Miguel Herrera',
      email: 'miguel.herrera@company.com',
      department: 'IT Support',
      position: 'System Administrator',
      salary: 48000,
      hireDate: '2020-05-12',
      status: 'Activo',
      location: 'Valencia, España',
      phone: '+34 623 456 890',
      experience: 6,
      skills: ['Linux', 'Windows Server', 'Network Security', 'VMware']
    },
    {
      id: 13,
      name: 'Elena Vargas',
      email: 'elena.vargas@company.com',
      department: 'Marketing',
      position: 'Digital Marketing Specialist',
      salary: 46000,
      hireDate: '2022-10-08',
      status: 'Activo',
      location: 'Murcia, España',
      phone: '+34 634 567 901',
      experience: 3,
      skills: ['Google Ads', 'Facebook Ads', 'Email Marketing', 'Analytics']
    },
    {
      id: 14,
      name: 'Fernando Castro',
      email: 'fernando.castro@company.com',
      department: 'Desarrollo',
      position: 'Full Stack Developer',
      salary: 58000,
      hireDate: '2021-03-22',
      status: 'Inactivo',
      location: 'Salamanca, España',
      phone: '+34 645 678 012',
      experience: 5,
      skills: ['Vue.js', 'Python', 'Django', 'PostgreSQL']
    },
    {
      id: 15,
      name: 'Cristina Rueda',
      email: 'cristina.rueda@company.com',
      department: 'Ventas',
      position: 'Sales Manager',
      salary: 62000,
      hireDate: '2019-09-16',
      status: 'Activo',
      location: 'Córdoba, España',
      phone: '+34 656 789 123',
      experience: 8,
      skills: ['Team Leadership', 'B2B Sales', 'Client Relations', 'Market Analysis']
    },
    {
      id: 16,
      name: 'Alberto Mendoza',
      email: 'alberto.mendoza@company.com',
      department: 'Calidad',
      position: 'QA Engineer',
      salary: 44000,
      hireDate: '2022-07-11',
      status: 'Activo',
      location: 'Santander, España',
      phone: '+34 667 890 234',
      experience: 3,
      skills: ['Selenium', 'Test Automation', 'JIRA', 'API Testing']
    },
    {
      id: 17,
      name: 'Patricia Romero',
      email: 'patricia.romero@company.com',
      department: 'Finanzas',
      position: 'Accountant',
      salary: 41000,
      hireDate: '2023-01-30',
      status: 'Activo',
      location: 'Toledo, España',
      phone: '+34 678 901 345',
      experience: 2,
      skills: ['Accounting Software', 'Tax Returns', 'Auditing', 'Excel']
    },
    {
      id: 18,
      name: 'Javier Ortega',
      email: 'javier.ortega@company.com',
      department: 'Operaciones',
      position: 'Operations Manager',
      salary: 67000,
      hireDate: '2018-11-28',
      status: 'Vacaciones',
      location: 'Cádiz, España',
      phone: '+34 689 012 456',
      experience: 9,
      skills: ['Process Optimization', 'Supply Chain', 'Project Management', 'Lean Six Sigma']
    },
    {
      id: 19,
      name: 'Natalia Vega',
      email: 'natalia.vega@company.com',
      department: 'Desarrollo',
      position: 'DevOps Engineer',
      salary: 68000,
      hireDate: '2020-06-15',
      status: 'Activo',
      location: 'Pamplona, España',
      phone: '+34 690 123 567',
      experience: 6,
      skills: ['Jenkins', 'Docker', 'AWS', 'Terraform', 'Monitoring']
    },
    {
      id: 20,
      name: 'Raúl Campos',
      email: 'raul.campos@company.com',
      department: 'Atención al Cliente',
      position: 'Customer Success Manager',
      salary: 43000,
      hireDate: '2022-12-05',
      status: 'Activo',
      location: 'Alicante, España',
      phone: '+34 601 234 678',
      experience: 4,
      skills: ['Customer Relations', 'CRM Management', 'Problem Solving', 'Communication']
    },
    {
      id: 21,
      name: 'Lucía Navarro',
      email: 'lucia.navarro@company.com',
      department: 'Diseño',
      position: 'Graphic Designer',
      salary: 39000,
      hireDate: '2023-03-20',
      status: 'Activo',
      location: 'Burgos, España',
      phone: '+34 612 345 890',
      experience: 2,
      skills: ['Photoshop', 'Illustrator', 'InDesign', 'Brand Design']
    },
    {
      id: 22,
      name: 'Andrés Flores',
      email: 'andres.flores@company.com',
      department: 'Seguridad',
      position: 'Cybersecurity Analyst',
      salary: 54000,
      hireDate: '2021-05-14',
      status: 'Activo',
      location: 'León, España',
      phone: '+34 623 456 901',
      experience: 5,
      skills: ['Penetration Testing', 'Security Audits', 'SIEM', 'Incident Response']
    },
    {
      id: 23,
      name: 'Victoria Serrano',
      email: 'victoria.serrano@company.com',
      department: 'Legal',
      position: 'Legal Counsel',
      salary: 72000,
      hireDate: '2019-02-08',
      status: 'Licencia',
      location: 'Valladolid, España',
      phone: '+34 634 567 012',
      experience: 8,
      skills: ['Contract Law', 'Compliance', 'Legal Research', 'Risk Assessment']
    },
    {
      id: 24,
      name: 'Óscar Peña',
      email: 'oscar.pena@company.com',
      department: 'Desarrollo',
      position: 'Mobile Developer',
      salary: 56000,
      hireDate: '2020-08-17',
      status: 'Activo',
      location: 'Oviedo, España',
      phone: '+34 645 678 123',
      experience: 4,
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase']
    },
    {
      id: 25,
      name: 'Beatriz Luna',
      email: 'beatriz.luna@company.com',
      department: 'Recursos Humanos',
      position: 'Talent Acquisition Specialist',
      salary: 42000,
      hireDate: '2022-04-03',
      status: 'Activo',
      location: 'Logroño, España',
      phone: '+34 656 789 234',
      experience: 3,
      skills: ['Recruiting', 'LinkedIn Recruiter', 'Interviewing', 'Employer Branding']
    },
    {
      id: 26,
      name: 'Sergio Martín',
      email: 'sergio.martin@company.com',
      department: 'Desarrollo',
      position: 'Backend Developer',
      salary: 61000,
      hireDate: '2020-12-14',
      status: 'Activo',
      location: 'Vigo, España',
      phone: '+34 667 890 345',
      experience: 7,
      skills: ['Java', 'Spring Boot', 'Microservices', 'Redis']
    },
    {
      id: 27,
      name: 'Alejandra Gil',
      email: 'alejandra.gil@company.com',
      department: 'Marketing',
      position: 'Brand Manager',
      salary: 59000,
      hireDate: '2019-05-30',
      status: 'Vacaciones',
      location: 'Las Palmas, España',
      phone: '+34 678 901 456',
      experience: 6,
      skills: ['Brand Strategy', 'Market Research', 'Campaign Management', 'Creative Direction']
    },
    {
      id: 28,
      name: 'Francisco Ramos',
      email: 'francisco.ramos@company.com',
      department: 'Ventas',
      position: 'Regional Sales Director',
      salary: 78000,
      hireDate: '2017-08-07',
      status: 'Activo',
      location: 'Palma, España',
      phone: '+34 689 012 567',
      experience: 12,
      skills: ['Strategic Sales', 'Team Leadership', 'Territory Management', 'Key Account Management']
    },
    {
      id: 29,
      name: 'Inmaculada Varela',
      email: 'inmaculada.varela@company.com',
      department: 'Finanzas',
      position: 'Financial Controller',
      salary: 64000,
      hireDate: '2021-11-22',
      status: 'Activo',
      location: 'Santander, España',
      phone: '+34 690 123 678',
      experience: 5,
      skills: ['Financial Reporting', 'Budget Control', 'Compliance', 'ERP Systems']
    },
    {
      id: 30,
      name: 'Rubén Iglesias',
      email: 'ruben.iglesias@company.com',
      department: 'Producto',
      position: 'Product Manager',
      salary: 66000,
      hireDate: '2020-03-09',
      status: 'Activo',
      location: 'A Coruña, España',
      phone: '+34 601 234 789',
      experience: 8,
      skills: ['Product Strategy', 'Agile Methodologies', 'User Experience', 'Data Analysis']
    }
  ];

  constructor() { }

  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }

  getEmployee(id: number): Observable<Employee | undefined> {
    const employee = this.employees.find(emp => emp.id === id);
    return of(employee);
  }

  // Método para obtener estadísticas adicionales
  getEmployeeStats(): Observable<any> {
    const totalEmployees = this.employees.length;
    const averageSalary = this.employees.reduce((sum, emp) => sum + emp.salary, 0) / totalEmployees;
    const departmentCounts = this.employees.reduce((acc, emp) => {
      acc[emp.department] = (acc[emp.department] || 0) + 1;
      return acc;
    }, {} as any);
    
    const statusCounts = this.employees.reduce((acc, emp) => {
      acc[emp.status] = (acc[emp.status] || 0) + 1;
      return acc;
    }, {} as any);

    return of({
      totalEmployees,
      averageSalary: Math.round(averageSalary),
      departmentCounts,
      statusCounts,
      averageExperience: Math.round(this.employees.reduce((sum, emp) => sum + emp.experience, 0) / totalEmployees)
    });
  }

  // Método para filtrar empleados por departamento
  getEmployeesByDepartment(department: string): Observable<Employee[]> {
    const filtered = this.employees.filter(emp => emp.department === department);
    return of(filtered);
  }

  // Método para buscar empleados por skills
  getEmployeesBySkill(skill: string): Observable<Employee[]> {
    const filtered = this.employees.filter(emp => 
      emp.skills.some(s => s.toLowerCase().includes(skill.toLowerCase()))
    );
    return of(filtered);
  }
}
