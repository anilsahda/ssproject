import "bootstrap/dist/css/bootstrap.min.css";
import { FaBook, FaLink, FaCode, FaCheckCircle } from "react-icons/fa";

function Angularimageupload() {
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
        <h1 className="fw-bold mb-5 text-info text-center">Image Upload - Angular</h1>

        {/* Step 1: Component Properties */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 1: Component Properties
          </div>
          <pre style={preStyle}>{`customers: any[] = [];
id: number = 0;
name: string = '';
email: string = '';
mobile: string = '';
imageFile: File | null = null;
@ViewChild('fileInput') fileInputRef: ElementRef;

baseUrl = environment.apiUrl;
imageUrl = environment.imageUploadUrl;`}</pre>
        </section>

        {/* Step 2: Load Customers */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 2: Load Customers
          </div>
          <pre style={preStyle}>{`ngOnInit() {
  this.loadCustomers();
}

loadCustomers() {
  this.http.get(\`\${this.baseUrl}/customers\`).subscribe(res => this.customers = res as any[]);
}`}</pre>
        </section>

        {/* Step 3: Image Handling */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 3: Image Handling
          </div>
          <pre style={preStyle}>{`onFileChange(event: any) {
  if (event.target.files && event.target.files.length > 0) {
    this.imageFile = event.target.files[0];
  }
}`}</pre>
        </section>

        {/* Step 4: Reset Form */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 4: Reset Form
          </div>
          <pre style={preStyle}>{`resetForm() {
  this.id = 0;
  this.name = '';
  this.email = '';
  this.mobile = '';
  this.imageFile = null;
  if (this.fileInputRef) this.fileInputRef.nativeElement.value = null;
}`}</pre>
        </section>

        {/* Step 5: Add / Update Customer */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 5: Add or Update Customer
          </div>
          <pre style={preStyle}>{`handleSubmit() {
  const formData = new FormData();
  formData.append('id', this.id.toString());
  formData.append('name', this.name);
  formData.append('email', this.email);
  formData.append('mobile', this.mobile);
  if (this.imageFile) formData.append('image', this.imageFile);

  const request = this.id && this.id > 0 ?
    this.http.put(\`\${this.baseUrl}/Customers/UpdateCustomer\`, formData) :
    this.http.post(\`\${this.baseUrl}/Customers/AddCustomer\`, formData);

  request.subscribe(() => {
    Swal.fire(this.id > 0 ? 'Updated!' : 'Added!', 'Customer saved successfully.', 'success');
    this.resetForm();
    this.loadCustomers();
  });
}`}</pre>
        </section>

        {/* Step 6: Edit Customer */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 6: Edit Customer
          </div>
          <pre style={preStyle}>{`handleEdit(customer: any) {
  this.id = customer.id;
  this.name = customer.name;
  this.email = customer.email;
  this.mobile = customer.mobile;
  this.imageFile = null;
  if (this.fileInputRef) this.fileInputRef.nativeElement.value = null;
}`}</pre>
        </section>

        {/* Step 7: Delete Customer */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 7: Delete Customer
          </div>
          <pre style={preStyle}>{`handleDelete(id: number) {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!'
  }).then(result => {
    if (result.isConfirmed) {
      this.http.delete(\`\${this.baseUrl}/Customers/\${id}\`).subscribe(() => {
        Swal.fire('Deleted!', 'Customer has been deleted.', 'success');
        this.loadCustomers();
      });
    }
  });
}`}</pre>
        </section>

        {/* Step 8: Form HTML */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 8: Form HTML
          </div>
          <pre style={preStyle}>{`<form (ngSubmit)="handleSubmit()" enctype="multipart/form-data">
  <input type="text" [(ngModel)]="name" name="name" placeholder="Name" required />
  <input type="email" [(ngModel)]="email" name="email" placeholder="Email" />
  <input type="text" [(ngModel)]="mobile" name="mobile" placeholder="Mobile" />
  <input type="file" #fileInput (change)="onFileChange($event)" accept="image/*" />
  <button type="submit">Save Customer</button>
</form>`}</pre>
        </section>

        {/* Step 9: Customer Table HTML */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 9: Customer Table HTML
          </div>
          <pre style={preStyle}>{`<table>
  <tr>
    <th>Name</th><th>Email</th><th>Mobile</th><th>Image</th><th>Actions</th>
  </tr>
  <tr *ngFor="let c of customers">
    <td>{{c.name}}</td>
    <td>{{c.email}}</td>
    <td>{{c.mobile}}</td>
    <td><img [src]="imageUrl + c.image" width="60" height="60"/></td>
    <td>
      <button (click)="handleEdit(c)">Edit</button>
      <button (click)="handleDelete(c.id)">Delete</button>
    </td>
  </tr>
</table>`}</pre>
        </section>

        {/* Step 10: Summary */}
        <section>
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 10: Summary
          </div>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>✅ CRUD operations with Angular HttpClient</li>
            <li>🖼️ Image upload using FormData and file input</li>
            <li>📝 Form handling with ngModel binding</li>
            <li>⚡ Preview uploaded image while editing</li>
            <li>🔔 SweetAlert2 for notifications & confirmations</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Angularimageupload;
