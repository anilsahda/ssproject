import { FaBook, FaLink, FaCheckCircle, FaGoogle, FaFacebookF } from "react-icons/fa";

function Angularjwtauth() {
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
        <h1 className="fw-bold mb-5 text-primary text-center">JWT Authentication - Angular</h1>

        {/* Step 1: State Management */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 1: State Management
          </div>
          <pre style={preStyle}>{`// Angular component state
email: string = '';
password: string = '';
showLogin: boolean = false;

// Inject Router and HttpClient in constructor
constructor(private http: HttpClient, private router: Router) { }`}</pre>
        </section>

        {/* Step 2: Handle Login */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 2: Handle Login
          </div>
          <pre style={preStyle}>{`handleLogin() {
  const payload = { email: this.email, password: this.password };
  this.http.post<any>(\`\${environment.apiBaseUrl}/Auth/login\`, payload)
    .subscribe(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('role', res.role);
      localStorage.setItem('userName', res.userName);
      this.email = '';
      this.password = '';
      this.router.navigate(['/dashboard']);
    });
}`}</pre>
        </section>

        {/* Step 3: Handle Logout */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 3: Handle Logout
          </div>
          <pre style={preStyle}>{`handleLogout() {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  localStorage.removeItem('userName');
  this.router.navigate(['/']);
}`}</pre>
        </section>

        {/* Step 4: Login Modal */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 4: Login Modal
          </div>
          <pre style={preStyle}>{`<div class="modal" [ngClass]="{'d-block': showLogin}" (click)="showLogin=false">
  <div class="modal-dialog" (click)="$event.stopPropagation()">
    <div class="modal-content shadow rounded-3">
      <div class="modal-header bg-primary text-white">
        <h5 class="modal-title">Login</h5>
        <button class="btn-close" (click)="showLogin=false"></button>
      </div>
      <div class="modal-body">
        <form (ngSubmit)="handleLogin()">
          <div class="mb-3">
            <label>Email</label>
            <input type="text" [(ngModel)]="email" name="email"/>
          </div>
          <div class="mb-3">
            <label>Password</label>
            <input type="password" [(ngModel)]="password" name="password"/>
          </div>
          <div class="d-flex justify-content-center gap-2 mb-3">
            <button class="btn btn-outline-danger btn-sm"><FaGoogle /></button>
            <button class="btn btn-outline-primary btn-sm"><FaFacebookF /></button>
          </div>
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  </div>
</div>`}</pre>
        </section>

        {/* Step 5: Summary */}
        <section>
          <div style={sectionHeaderStyle}>
            <FaBook /> Summary
          </div>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>✅ JWT Authentication with Angular HttpClient</li>
            <li>🔐 Login & Logout</li>
            <li>🌐 Optional Social Login (Google, Facebook)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Angularjwtauth;
