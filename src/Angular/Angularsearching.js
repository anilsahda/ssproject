import { FaBook, FaLink, FaCode, FaSearch, FaCheckCircle } from "react-icons/fa";

function AngularSearching() {
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

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "40px 20px" }}>
      <div className="container bg-white p-5 shadow-sm rounded">
        <h1 className="fw-bold mb-5 text-primary text-center">Searching - Angular</h1>

        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaBook /> Step 1: State Management</div>
          <pre style={preStyle}>{`students: any[] = [];
countries: any[] = [];
states: any[] = [];
districts: any[] = [];
searchTerm: string = '';
showForm: boolean = false;

id: number = 0;
name: string = '';
email: string = '';
mobile: string = '';
countryId: string = '';
stateId: string = '';
districtId: string = '';
genderId: number = 0;

genders = [
  { id: 1, name: 'Male' },
  { id: 2, name: 'Female' },
  { id: 3, name: 'Other' }
];

baseUrl = environment.apiUrl;`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaLink /> Step 2: Load Students & Locations</div>
          <pre style={preStyle}>{`ngOnInit() {
  this.loadStudents();
  this.loadCountries();
  this.loadStates();
  this.loadDistricts();
}

loadStudents() { ... }
loadCountries() { ... }
loadStates() { ... }
loadDistricts() { ... }`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaCheckCircle /> Step 3: Reset Form</div>
          <pre style={preStyle}>{`resetForm() {
  this.id = 0;
  this.name = '';
  this.email = '';
  this.mobile = '';
  this.countryId = '';
  this.stateId = '';
  this.districtId = '';
  this.genderId = 0;
  this.showForm = false;
}`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaCode /> Step 4: Add / Update Student</div>
          <pre style={preStyle}>{`handleSubmit() {
  const payload = { id, name, email, mobile, countryId, stateId, districtId, genderId };
  const request = this.id > 0 ? this.http.put(...) : this.http.post(...);
  request.subscribe(() => {
    Swal.fire(...);
    this.resetForm();
    this.loadStudents();
  });
}`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaBook /> Step 5: Edit Student</div>
          <pre style={preStyle}>{`handleEdit(student) {
  this.id = student.id;
  this.name = student.name;
  this.email = student.email;
  this.mobile = student.mobile;
  this.countryId = student.countryId;
  this.stateId = student.stateId;
  this.districtId = student.districtId;
  this.genderId = student.genderId;
  this.showForm = true;
}`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaLink /> Step 6: Delete Student</div>
          <pre style={preStyle}>{`handleDelete(studentId) {
  Swal.fire({...}).then(result => {
    if(result.isConfirmed){
      this.http.delete(...).subscribe(() => {
        Swal.fire("Deleted!", "Student deleted.", "success");
        this.loadStudents();
      });
    }
  });
}`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaSearch /> Step 7: Search Students</div>
          <pre style={preStyle}>{`handleSearch() {
  if (!this.searchTerm.trim()) { this.loadStudents(); return; }
  this.http.get(...).subscribe(res => this.students = res);
}`}</pre>
        </section>

        <section className="mb-5">
          <div style={sectionHeaderStyle}><FaCode /> Step 8: Form & Table JSX</div>
          <pre style={preStyle}>{`<form (ngSubmit)="handleSubmit()">
  <!-- Form inputs for name, email, mobile, country, state, district, gender -->
  <button type="submit">{{ id ? 'Update' : 'Save' }}</button>
</form>

<table>
  <thead><tr><th>Name</th><th>Email</th>...</tr></thead>
  <tbody>
    <tr *ngFor="let student of students">
      <td>{{student.name}}</td>
      <td>{{student.email}}</td>
      ...
      <td>
        <button (click)="handleEdit(student)">Edit</button>
        <button (click)="handleDelete(student.id)">Delete</button>
      </td>
    </tr>
  </tbody>
</table>`}</pre>
        </section>

        <section>
          <div style={sectionHeaderStyle}><FaBook /> Step 9: Summary</div>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>✅ CRUD operations with Angular HttpClient</li>
            <li>🔎 Search students by multiple fields</li>
            <li>📝 Form handling with ngModel</li>
            <li>⚡ Modal popup for Add/Edit</li>
            <li>🔔 SweetAlert2 for notifications</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default AngularSearching;