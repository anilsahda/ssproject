import "bootstrap/dist/css/bootstrap.min.css";
import { FaBook, FaLink, FaCode, FaCheckCircle } from "react-icons/fa";

function Angularcountry() {
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

        {/* Step 1: Create Model */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 1: Create Country Model
          </div>
          <pre style={preStyle}>{`export interface Country {
  id: number;
  name: string;
}`}</pre>
        </section>

        {/* Step 2: Create Service */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 2: Create Country Service
          </div>
          <pre style={preStyle}>{`@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private baseUrl = environment.apiUrl + '/Countries';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this.baseUrl);
  }

  create(country: Country): Observable<any> {
    return this.http.post(this.baseUrl, country);
  }

  update(country: Country): Observable<any> {
    return this.http.put(this.baseUrl, country);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(\`\${this.baseUrl}/\${id}\`);
  }
}`}</pre>
        </section>

        {/* Step 3: Component Setup */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 3: Component Setup
          </div>
          <pre style={preStyle}>{`export class CountryComponent implements OnInit {
  countries: Country[] = [];
  id: number = 0;
  name: string = "";

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries() {
    this.countryService.getAll().subscribe(data => this.countries = data);
  }
}`}</pre>
        </section>

        {/* Step 4: Save / Update */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 4: Save or Update Country
          </div>
          <pre style={preStyle}>{`saveCountry() {
  if (!this.name.trim()) {
    alert("Country name required");
    return;
  }

  const data: Country = { id: this.id, name: this.name };

  if (this.id === 0) {
    this.countryService.create(data).subscribe(() => {
      alert("Country added");
      this.resetForm();
      this.loadCountries();
    });
  } else {
    this.countryService.update(data).subscribe(() => {
      alert("Country updated");
      this.resetForm();
      this.loadCountries();
    });
  }
}`}</pre>
        </section>

        {/* Step 5: Edit & Delete */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 5: Edit & Delete Country
          </div>
          <pre style={preStyle}>{`editCountry(country: Country) {
  this.id = country.id;
  this.name = country.name;
}

deleteCountry(id: number) {
  if (confirm("Delete this country?")) {
    this.countryService.delete(id).subscribe(() => {
      alert("Country deleted");
      this.loadCountries();
    });
  }
}`}</pre>
        </section>

        {/* Step 6: Template (HTML) */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 6: Component Template (HTML)
          </div>
          <pre style={preStyle}>{`<div class="container mt-4">
  <h2>Manage Countries</h2>

  <div class="mb-3">
    <input type="text" [(ngModel)]="name" placeholder="Country name" class="form-control"/>
  </div>

  <div class="mb-4">
    <button class="btn btn-success me-2" (click)="saveCountry()">Save</button>
    <button class="btn btn-secondary" (click)="resetForm()">Reset</button>
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
      <tr *ngFor="let c of countries">
        <td>{{c.id}}</td>
        <td>{{c.name}}</td>
        <td>
          <button class="btn btn-sm btn-warning me-2" (click)="editCountry(c)">Edit</button>
          <button class="btn btn-sm btn-danger" (click)="deleteCountry(c.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>`}</pre>
        </section>

        {/* Step 7: Summary */}
        <section>
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 7: Summary
          </div>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>✅ Full CRUD operations with Angular HttpClient</li>
            <li>🟢 Two-way binding using <code>ngModel</code></li>
            <li>📝 Service layer handles API calls</li>
            <li>📋 Bootstrap UI table for displaying countries</li>
            <li>🆔 Model contains only <code>id</code> and <code>name</code></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

// Shared style for all code blocks
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

export default Angularcountry;
