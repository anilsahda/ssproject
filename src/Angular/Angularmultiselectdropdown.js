import "bootstrap/dist/css/bootstrap.min.css";
import { FaBook, FaLink, FaCode, FaCheckCircle } from "react-icons/fa";

function Angularmultiselectdropdown() {
  const sectionHeaderStyle = {
    borderBottom: "2px solid #17a2b8",
    paddingBottom: "5px",
    marginBottom: "15px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#17a2b8",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "40px 20px" }}>
      <div className="container bg-white p-5 shadow-sm rounded">
        <h1 className="fw-bold mb-5 text-info text-center">Multi-Select Dropdown - Angular</h1>

        {/* Step 1: Component Properties */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 1: Component Properties
          </div>
          <pre style={preStyle}>{`employees: any[] = [];
countries: any[] = [];
states: any[] = [];
districts: any[] = [];
languages: any[] = [];
genders = [
  { id: 1, name: 'Male' },
  { id: 2, name: 'Female' },
  { id: 3, name: 'Other' }
];

id: number | null = null;
name: string = '';
email: string = '';
mobile: string = '';
countryId: string = '';
stateId: string = '';
districtId: string = '';
genderId: string = '';
selectedLanguages: number[] = [];

baseUrl = environment.apiUrl;`}</pre>
        </section>

        {/* Step 2: Load Data */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 2: Load Data from API
          </div>
          <pre style={preStyle}>{`ngOnInit(): void {
  this.loadEmployees();
  this.http.get(\`\${this.baseUrl}/Countries\`).subscribe(res => this.countries = res as any[]);
  this.http.get(\`\${this.baseUrl}/States\`).subscribe(res => this.states = res as any[]);
  this.http.get(\`\${this.baseUrl}/Districts\`).subscribe(res => this.districts = res as any[]);
  this.http.get(\`\${this.baseUrl}/Languages\`).subscribe(res => this.languages = res as any[]);
}

loadEmployees() {
  this.http.get(\`\${this.baseUrl}/Employees\`).subscribe((res: any) => {
    this.employees = res;
  });
}`}</pre>
        </section>

        {/* Step 3: Reset Form */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 3: Reset Form
          </div>
          <pre style={preStyle}>{`resetForm() {
  this.id = null;
  this.name = '';
  this.email = '';
  this.mobile = '';
  this.countryId = '';
  this.stateId = '';
  this.districtId = '';
  this.genderId = '';
  this.selectedLanguages = [];
}`}</pre>
        </section>

        {/* Step 4: Add or Update */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 4: Add or Update Employee
          </div>
          <pre style={preStyle}>{`handleSave() {
  const payload = {
    id: this.id,
    name: this.name,
    email: this.email,
    mobile: this.mobile,
    countryId: this.countryId ? Number(this.countryId) : null,
    stateId: this.stateId ? Number(this.stateId) : null,
    districtId: this.districtId ? Number(this.districtId) : null,
    genderId: this.genderId ? Number(this.genderId) : null,
    languages: this.selectedLanguages
  };

  if (this.id === null) {
    this.http.post(\`\${this.baseUrl}/Employees\`, payload).subscribe(() => {
      Swal.fire('Added!', 'Employee added successfully.', 'success');
      this.resetForm();
      this.loadEmployees();
    });
  } else {
    this.http.put(\`\${this.baseUrl}/Employees\`, payload).subscribe(() => {
      Swal.fire('Updated!', 'Employee updated successfully.', 'success');
      this.resetForm();
      this.loadEmployees();
    });
  }
}`}</pre>
        </section>

        {/* Step 5: Edit */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 5: Edit Employee
          </div>
          <pre style={preStyle}>{`handleEdit(emp: any) {
  this.id = emp.id;
  this.name = emp.name;
  this.email = emp.email || '';
  this.mobile = emp.mobile || '';
  this.countryId = emp.countryId?.toString() || '';
  this.stateId = emp.stateId?.toString() || '';
  this.districtId = emp.districtId?.toString() || '';
  this.genderId = emp.genderId?.toString() || '';

  this.selectedLanguages = (emp.languages || []).map((l: any) => l.languageId);
}`}</pre>
        </section>

        {/* Step 6: Delete */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 6: Delete Employee
          </div>
          <pre style={preStyle}>{`handleDelete(empId: number) {
  Swal.fire({
    title: 'Are you sure?',
    text: 'This action cannot be undone!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.http.delete(\`\${this.baseUrl}/Employees/\${empId}\`).subscribe(() => {
        Swal.fire('Deleted!', 'Employee has been deleted successfully.', 'success');
        this.loadEmployees();
      });
    }
  });
}`}</pre>
        </section>

        {/* Step 7: Template */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 7: Angular Template (HTML)
          </div>
          <pre style={preStyle}>{`<form (ngSubmit)="handleSave()">
  <input type="text" [(ngModel)]="name" name="name" placeholder="Name" required />
  <input type="email" [(ngModel)]="email" name="email" placeholder="Email" />
  <input type="text" [(ngModel)]="mobile" name="mobile" placeholder="Mobile" />

  <select [(ngModel)]="countryId" name="countryId">
    <option value="">Select Country</option>
    <option *ngFor="let c of countries" [value]="c.id">{{c.name}}</option>
  </select>

  <select [(ngModel)]="stateId" name="stateId">
    <option value="">Select State</option>
    <option *ngFor="let s of states" [value]="s.id">{{s.name}}</option>
  </select>

  <select [(ngModel)]="districtId" name="districtId">
    <option value="">Select District</option>
    <option *ngFor="let d of districts" [value]="d.id">{{d.name}}</option>
  </select>

  <label *ngFor="let g of genders">
    <input type="radio" name="gender" [value]="g.id" [(ngModel)]="genderId" /> {{g.name}}
  </label>

  <label>Languages</label>
  <ng-select [items]="languages" 
             bindLabel="name" 
             bindValue="id" 
             [(ngModel)]="selectedLanguages" 
             [multiple]="true" 
             placeholder="Select Languages">
  </ng-select>

  <button type="submit">Save Employee</button>
</form>`}</pre>
        </section>

        {/* Step 8: Summary */}
        <section>
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 8: Summary
          </div>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>✅ Full CRUD with Angular HttpClient</li>
            <li>🟡 SweetAlert2 for notifications & confirmations</li>
            <li>📝 Form handling with ngModel binding</li>
            <li>📋 Multi-select dropdown using ng-select</li>
            <li>⚡ Dynamic rendering of employees with Edit & Delete</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

const preStyle = { 
  backgroundColor: "#f1f3f5", 
  fontFamily: "monospace", 
  fontSize: "0.95rem", 
  border: "1px solid #dee2e6", 
  padding: "15px", 
  borderRadius: "5px", 
  overflowX: "auto", 
  whiteSpace: "pre" 
};

export default Angularmultiselectdropdown;
