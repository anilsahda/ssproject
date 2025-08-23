import "bootstrap/dist/css/bootstrap.min.css";
import { FaBook, FaLink, FaCode, FaCheckCircle } from "react-icons/fa";

function Angulardistrict() {
  const sectionHeaderStyle = {
    borderBottom: "2px solid #007bff",
    paddingBottom: "5px",
    marginBottom: "15px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#007bff",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "40px 20px" }}>
      <div className="container bg-white p-5 shadow-sm rounded">
        <h1 className="fw-bold mb-5 text-primary text-center">
          Dropdown - Angular (District Management)
        </h1>

        {/* Step 1: Service File */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 1: Create district.service.ts
          </div>
          <pre style={preStyle}>{`import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class DistrictService {
  private districtUrl = environment.apiUrl + '/Districts';
  private stateUrl = environment.apiUrl + '/States';

  constructor(private http: HttpClient) {}

  getDistricts() {
    return this.http.get(this.districtUrl);
  }

  getStates() {
    return this.http.get(this.stateUrl);
  }

  addDistrict(data: any) {
    return this.http.post(this.districtUrl, data);
  }

  updateDistrict(data: any) {
    return this.http.put(this.districtUrl, data);
  }

  deleteDistrict(id: number) {
    return this.http.delete(\`\${this.districtUrl}/\${id}\`);
  }
}`}</pre>
        </section>

        {/* Step 2: Component Properties */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 2: Define Properties in district.component.ts
          </div>
          <pre style={preStyle}>{`districts: any[] = [];
states: any[] = [];
id: number = 0;
name: string = "";
stateId: string = "";`}</pre>
        </section>

        {/* Step 3: Load Data */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 3: Load Districts & States
          </div>
          <pre style={preStyle}>{`ngOnInit(): void {
  this.loadDistricts();
  this.loadStates();
}

loadDistricts() {
  this.districtService.getDistricts().subscribe((res: any) => {
    this.districts = res;
  });
}

loadStates() {
  this.districtService.getStates().subscribe((res: any) => {
    this.states = res;
  });
}`}</pre>
        </section>

        {/* Step 4: Toast Helper */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 4: Toast Notifications
          </div>
          <pre style={preStyle}>{`toast(icon: any, title: string) {
  Swal.fire({
    toast: true,
    position: "top-end",
    icon,
    title,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true
  });
}`}</pre>
        </section>

        {/* Step 5: Add / Update */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 5: Add / Update District
          </div>
          <pre style={preStyle}>{`handleSave() {
  if (!this.name.trim()) {
    this.toast("warning", "District name is required");
    return;
  }
  if (!this.stateId) {
    this.toast("warning", "Please select a state");
    return;
  }

  const data = { id: this.id, name: this.name, stateId: parseInt(this.stateId) };

  if (this.id === 0) {
    this.districtService.addDistrict(data).subscribe(() => {
      this.toast("success", "District added");
      this.resetForm();
      this.loadDistricts();
    });
  } else {
    this.districtService.updateDistrict(data).subscribe(() => {
      this.toast("success", "District updated");
      this.resetForm();
      this.loadDistricts();
    });
  }
}`}</pre>
        </section>

        {/* Step 6: Edit */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 6: Edit District
          </div>
          <pre style={preStyle}>{`handleEdit(d: any) {
  this.id = d.id;
  this.name = d.name;
  this.stateId = d.stateId.toString();
}`}</pre>
        </section>

        {/* Step 7: Delete */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 7: Delete District
          </div>
          <pre style={preStyle}>{`handleDelete(id: number) {
  Swal.fire({
    title: "Delete this district?",
    text: "This action cannot be undone.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it"
  }).then((result) => {
    if (result.isConfirmed) {
      this.districtService.deleteDistrict(id).subscribe(() => {
        this.toast("success", "District deleted");
        this.loadDistricts();
      });
    }
  });
}`}</pre>
        </section>

        {/* Step 8: Reset Form */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 8: Reset Form
          </div>
          <pre style={preStyle}>{`resetForm() {
  this.id = 0;
  this.name = "";
  this.stateId = "";
}`}</pre>
        </section>

        {/* Step 9: Angular Template */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 9: Angular Template
          </div>
          <pre style={preStyle}>{`<div class="mb-3">
  <input type="text" class="form-control mb-2" [(ngModel)]="name" placeholder="Enter district name" />
  <select class="form-select mb-2" [(ngModel)]="stateId">
    <option value="">Select State</option>
    <option *ngFor="let s of states" [value]="s.id">{{s.name}}</option>
  </select>
  <button class="btn btn-primary me-2" (click)="handleSave()">Save District</button>
</div>

<table class="table table-bordered table-striped">
  <thead class="table-light">
    <tr>
      <th>Id</th>
      <th>District Name</th>
      <th>State</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let d of districts">
      <td>{{d.id}}</td>
      <td>{{d.name}}</td>
      <td>{{states.find(s => s.id === d.stateId)?.name}}</td>
      <td>
        <button class="btn btn-sm btn-warning me-2" (click)="handleEdit(d)">Edit</button>
        <button class="btn btn-sm btn-danger" (click)="handleDelete(d.id)">Delete</button>
      </td>
    </tr>
  </tbody>
</table>`}</pre>
        </section>

        {/* Step 10: Summary */}
        <section>
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 10: Summary
          </div>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>✅ Angular service (`district.service.ts`) handles API logic</li>
            <li>🟡 SweetAlert2 used for confirmation & toast</li>
            <li>📝 CRUD operations implemented with HttpClient</li>
            <li>📋 Dynamic table rendering with Edit & Delete actions</li>
            <li>⚡ Districts linked to States dropdown</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

// Shared preStyle
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

export default Angulardistrict;
