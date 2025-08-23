import "bootstrap/dist/css/bootstrap.min.css";
import { FaBook, FaLink, FaCode, FaCheckCircle } from "react-icons/fa";

function Angularradiobutton() {
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
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      <div className="container bg-white p-5 shadow-sm rounded">
        <h1 className="fw-bold mb-5 text-info text-center">
          Radio Button - Angular (Student Form)
        </h1>

        {/* Step 1: Component Properties */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 1: Define Properties in Component
          </div>
          <pre style={preStyle}>{`students: any[] = [];
countries: any[] = [];
states: any[] = [];
districts: any[] = [];
id: number = 0;
name: string = "";
email: string = "";
mobile: string = "";
countryId: string = "";
stateId: string = "";
districtId: string = "";
genderId: number = 0;

genders = [
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
  { id: 3, name: "Other" }
];

studentUrl = environment.apiUrl + "/students";
countryUrl = environment.apiUrl + "/countries";
stateUrl = environment.apiUrl + "/states";
districtUrl = environment.apiUrl + "/districts";`}</pre>
        </section>

        {/* Step 2: Load Data */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 2: Load Data
          </div>
          <pre style={preStyle}>{`ngOnInit(): void {
  this.loadStudents();
  this.loadCountries();
  this.loadStates();
  this.loadDistricts();
}

loadStudents() {
  this.http.get(this.studentUrl).subscribe((res: any) => {
    this.students = res;
  });
}

loadCountries() {
  this.http.get(this.countryUrl).subscribe((res: any) => {
    this.countries = res;
  });
}

loadStates() {
  this.http.get(this.stateUrl).subscribe((res: any) => {
    this.states = res;
  });
}

loadDistricts() {
  this.http.get(this.districtUrl).subscribe((res: any) => {
    this.districts = res;
  });
}`}</pre>
        </section>

        {/* Step 3: Toast Notifications */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 3: Toast Notifications
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

        {/* Step 4: Save / Update */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 4: Add or Update Student
          </div>
          <pre style={preStyle}>{`handleSave() {
  const payload = {
    id: this.id,
    name: this.name,
    email: this.email,
    mobile: this.mobile,
    countryId: this.countryId ? parseInt(this.countryId) : null,
    stateId: this.stateId ? parseInt(this.stateId) : null,
    districtId: this.districtId ? parseInt(this.districtId) : null,
    genderId: this.genderId || 0
  };

  if (this.id === 0) {
    this.http.post(this.studentUrl, payload).subscribe(() => {
      this.toast("success", "Student added");
      this.resetForm();
      this.loadStudents();
    });
  } else {
    this.http.put(this.studentUrl, payload).subscribe(() => {
      this.toast("success", "Student updated");
      this.resetForm();
      this.loadStudents();
    });
  }
}`}</pre>
        </section>

        {/* Step 5: Edit Student */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 5: Edit Student
          </div>
          <pre style={preStyle}>{`handleEdit(std: any) {
  this.id = std.id;
  this.name = std.name;
  this.email = std.email;
  this.mobile = std.mobile;
  this.countryId = std.countryId?.toString() || "";
  this.stateId = std.stateId?.toString() || "";
  this.districtId = std.districtId?.toString() || "";
  this.genderId = std.genderId || 0;
}`}</pre>
        </section>

        {/* Step 6: Delete Student */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 6: Delete Student
          </div>
          <pre style={preStyle}>{`handleDelete(studentId: number) {
  Swal.fire({
    title: "Delete this student?",
    text: "This action cannot be undone.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it"
  }).then((result) => {
    if (result.isConfirmed) {
      this.http.delete(\`\${this.studentUrl}/\${studentId}\`).subscribe(() => {
        this.toast("success", "Student deleted");
        this.loadStudents();
      });
    }
  });
}`}</pre>
        </section>

        {/* Step 7: Angular Template */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 7: Angular Template
          </div>
          <pre style={preStyle}>{`<form>
  <input type="text" class="form-control mb-2" [(ngModel)]="name" name="name" placeholder="Enter name" />
  <input type="email" class="form-control mb-2" [(ngModel)]="email" name="email" placeholder="Enter email" />
  <input type="text" class="form-control mb-2" [(ngModel)]="mobile" name="mobile" placeholder="Enter mobile" />

  <select class="form-select mb-2" [(ngModel)]="countryId" name="countryId">
    <option value="">Select Country</option>
    <option *ngFor="let c of countries" [value]="c.id">{{c.name}}</option>
  </select>

  <select class="form-select mb-2" [(ngModel)]="stateId" name="stateId">
    <option value="">Select State</option>
    <option *ngFor="let s of states" [value]="s.id">{{s.name}}</option>
  </select>

  <select class="form-select mb-2" [(ngModel)]="districtId" name="districtId">
    <option value="">Select District</option>
    <option *ngFor="let d of districts" [value]="d.id">{{d.name}}</option>
  </select>

  <div class="mb-3">
    <label class="me-3" *ngFor="let g of genders">
      <input type="radio" name="gender" [value]="g.id" [(ngModel)]="genderId" /> {{g.name}}
    </label>
  </div>

  <button type="button" class="btn btn-info" (click)="handleSave()">Save Student</button>
</form>

<table class="table table-bordered table-striped mt-3">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Mobile</th>
      <th>Country</th>
      <th>State</th>
      <th>District</th>
      <th>Gender</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let s of students">
      <td>{{s.name}}</td>
      <td>{{s.email}}</td>
      <td>{{s.mobile}}</td>
      <td>{{countries.find(c => c.id === s.countryId)?.name}}</td>
      <td>{{states.find(st => st.id === s.stateId)?.name}}</td>
      <td>{{districts.find(d => d.id === s.districtId)?.name}}</td>
      <td>{{genders.find(g => g.id === s.genderId)?.name}}</td>
      <td>
        <button class="btn btn-warning btn-sm me-2" (click)="handleEdit(s)">Edit</button>
        <button class="btn btn-danger btn-sm" (click)="handleDelete(s.id)">Delete</button>
      </td>
    </tr>
  </tbody>
</table>`}</pre>
        </section>

        {/* Step 8: Summary */}
        <section>
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 8: Summary
          </div>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>✅ Full CRUD operations with Angular HttpClient</li>
            <li>🟡 SweetAlert2 for toast & confirmation</li>
            <li>📝 Two-way binding with ngModel</li>
            <li>📋 Dropdowns for Country, State, District</li>
            <li>⚡ Gender selection using radio buttons</li>
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

export default Angularradiobutton;
