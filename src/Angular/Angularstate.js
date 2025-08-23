import "bootstrap/dist/css/bootstrap.min.css";
import { FaBook, FaLink, FaCode, FaCheckCircle } from "react-icons/fa";

function Angularstate() {
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
          Dropdown - Angular (State Management)
        </h1>

        {/* Step 1: Component Properties */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 1: Define Properties in Component
          </div>
          <pre style={preStyle}>{`states: any[] = [];
countries: any[] = [];
id: number = 0;
name: string = "";
countryId: string = "";

stateUrl = environment.apiUrl + "/States";
countryUrl = environment.apiUrl + "/Countries";`}</pre>
        </section>

        {/* Step 2: Load States and Countries */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 2: Load States and Countries
          </div>
          <pre style={preStyle}>{`ngOnInit(): void {
  this.loadStates();
  this.loadCountries();
}

loadStates() {
  this.http.get(this.stateUrl).subscribe((res: any) => {
    this.states = res;
  });
}

loadCountries() {
  this.http.get(this.countryUrl).subscribe((res: any) => {
    this.countries = res;
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

        {/* Step 4: Add / Update State */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 4: Add or Update State
          </div>
          <pre style={preStyle}>{`handleSave() {
  if (!this.name.trim()) {
    this.toast("warning", "State name is required");
    return;
  }
  if (!this.countryId) {
    this.toast("warning", "Please select a country");
    return;
  }

  const data = { id: this.id, name: this.name, countryId: parseInt(this.countryId) };

  if (this.id === 0) {
    this.http.post(this.stateUrl, data).subscribe(() => {
      this.toast("success", "State added");
      this.resetForm();
      this.loadStates();
    });
  } else {
    this.http.put(this.stateUrl, data).subscribe(() => {
      this.toast("success", "State updated");
      this.resetForm();
      this.loadStates();
    });
  }
}`}</pre>
        </section>

        {/* Step 5: Edit State */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 5: Edit State
          </div>
          <pre style={preStyle}>{`handleEdit(state: any) {
  this.id = state.id;
  this.name = state.name;
  this.countryId = state.countryId.toString();
}`}</pre>
        </section>

        {/* Step 6: Delete State */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 6: Delete State
          </div>
          <pre style={preStyle}>{`handleDelete(stateId: number) {
  Swal.fire({
    title: "Delete this state?",
    text: "This action cannot be undone.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it"
  }).then((result) => {
    if (result.isConfirmed) {
      this.http.delete(\`\${this.stateUrl}/\${stateId}\`).subscribe(() => {
        this.toast("success", "State deleted");
        this.loadStates();
      });
    }
  });
}`}</pre>
        </section>

        {/* Step 7: Reset Form */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 7: Reset Form
          </div>
          <pre style={preStyle}>{`resetForm() {
  this.id = 0;
  this.name = "";
  this.countryId = "";
}`}</pre>
        </section>

        {/* Step 8: Angular Template */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 8: Angular Template
          </div>
          <pre style={preStyle}>{`<div class="mb-3">
  <input type="text" class="form-control mb-2" [(ngModel)]="name" placeholder="Enter state name" />
  <select class="form-select mb-2" [(ngModel)]="countryId">
    <option value="">Select Country</option>
    <option *ngFor="let c of countries" [value]="c.id">{{c.name}}</option>
  </select>
  <button class="btn btn-success me-2" (click)="handleSave()">Save State</button>
</div>

<table class="table table-bordered table-striped">
  <thead class="table-light">
    <tr>
      <th>Id</th>
      <th>State Name</th>
      <th>Country</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let s of states">
      <td>{{s.id}}</td>
      <td>{{s.name}}</td>
      <td>{{countries.find(c => c.id === s.countryId)?.name}}</td>
      <td>
        <button class="btn btn-sm btn-warning me-2" (click)="handleEdit(s)">Edit</button>
        <button class="btn btn-sm btn-danger" (click)="handleDelete(s.id)">Delete</button>
      </td>
    </tr>
  </tbody>
</table>`}</pre>
        </section>

        {/* Step 9: Summary */}
        <section>
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 9: Summary
          </div>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>✅ Full CRUD operations with Angular HttpClient</li>
            <li>🟡 SweetAlert2 used for toast & confirmation</li>
            <li>📝 Form handling with two-way binding (ngModel)</li>
            <li>📋 Dynamic table rendering of states with Edit & Delete actions</li>
            <li>⚡ State linked to country dropdown selection</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

// Shared preStyle for code blocks
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

export default Angularstate;
