import "bootstrap/dist/css/bootstrap.min.css";
import { FaBook, FaLink, FaCode, FaCheckCircle } from "react-icons/fa";

function Angularlanguages() {
  const sectionHeaderStyle = {
    borderBottom: "2px solid #28a745",
    paddingBottom: "5px",
    marginBottom: "15px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#28a745",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "40px 20px" }}>
      <div className="container bg-white p-5 shadow-sm rounded">
        <h1 className="fw-bold mb-5 text-success text-center">
          CRUD Operation - Angular
        </h1>

        {/* Step 1: Create Service */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 1: Create Service
          </div>
          <pre style={preStyle}>{`ng generate service services/language

// language.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private baseUrl = \`\${environment.apiUrl}/Languages\`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  add(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(data: any): Observable<any> {
    return this.http.put(this.baseUrl, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(\`\${this.baseUrl}/\${id}\`);
  }
}`}</pre>
        </section>

        {/* Step 2: Component Setup */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 2: Component Setup
          </div>
          <pre style={preStyle}>{`ng generate component languages

// languages.component.ts
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html'
})
export class LanguagesComponent implements OnInit {
  languages: any[] = [];
  id = 0;
  name = '';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.loadLanguages();
  }

  loadLanguages() {
    this.languageService.getAll().subscribe(res => this.languages = res);
  }

  save() {
    if (!this.name.trim()) {
      this.toast('warning', 'Language name required');
      return;
    }

    const data = { id: this.id, name: this.name };

    if (this.id === 0) {
      this.languageService.add(data).subscribe(() => {
        this.toast('success', 'Language added');
        this.reset();
        this.loadLanguages();
      });
    } else {
      this.languageService.update(data).subscribe(() => {
        this.toast('success', 'Language updated');
        this.reset();
        this.loadLanguages();
      });
    }
  }

  edit(lang: any) {
    this.id = lang.id;
    this.name = lang.name;
  }

  delete(id: number) {
    Swal.fire({
      title: 'Delete language?',
      text: 'This cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      confirmButtonColor: '#d33'
    }).then((res) => {
      if (res.isConfirmed) {
        this.languageService.delete(id).subscribe(() => {
          this.toast('success', 'Language deleted');
          this.loadLanguages();
        });
      }
    });
  }

  reset() {
    this.id = 0;
    this.name = '';
  }

  toast(icon: any, title: string) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon,
      title,
      showConfirmButton: false,
      timer: 2000
    });
  }
}`}</pre>
        </section>

        {/* Step 3: Component HTML */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 3: Component HTML
          </div>
          <pre style={preStyle}>{`<!-- languages.component.html -->
<div class="container mt-4">
  <h2>Manage Languages</h2>
  <div class="mb-3">
    <input type="text" [(ngModel)]="name" class="form-control" placeholder="Enter language" />
  </div>
  <div class="mb-4">
    <button class="btn btn-success me-2" (click)="save()">Save Language</button>
    <button class="btn btn-secondary" (click)="reset()">Reset</button>
  </div>
  <table class="table table-bordered table-striped">
    <thead class="table-light">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let lang of languages">
        <td>{{ lang.id }}</td>
        <td>{{ lang.name }}</td>
        <td>
          <button class="btn btn-sm btn-primary me-2" (click)="edit(lang)">Edit</button>
          <button class="btn btn-sm btn-danger" (click)="delete(lang.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>`}</pre>
        </section>

        {/* Step 4: Summary */}
        <section>
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 4: Summary
          </div>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>✅ Service layer with HttpClient for API calls</li>
            <li>✅ Full CRUD (GET, POST, PUT, DELETE)</li>
            <li>🟡 SweetAlert2 used for toast & confirmation</li>
            <li>📋 Angular template with two-way binding & table rendering</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

// Shared preStyle for all code blocks
const preStyle = {
  backgroundColor: "#f1f3f5",
  fontFamily: "monospace",
  fontSize: "0.95rem",
  border: "1px solid #dee2e6",
  padding: "15px",
  borderRadius: "5px",
  overflowX: "auto",
  whiteSpace: "pre",
};

export default Angularlanguages;
