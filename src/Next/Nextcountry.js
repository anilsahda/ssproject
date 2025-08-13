"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

function Nextcountry() {
  // ✅ Load Bootstrap JS for modals & tooltips in Next.js
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="container my-4">
      <h1 className="mb-4 text-primary">📄 Country Management Component Documentation</h1>

      {/* 1. Component Name */}
      <section className="mb-5">
        <h3>1. Component Name</h3>
        <p>
          <code>Country</code> (currently exported as <code>Crud</code> in code — recommend
          renaming to <code>Country</code> for clarity).
        </p>
      </section>

      {/* 2. Purpose */}
      <section className="mb-5">
        <h3>2. Purpose</h3>
        <p>
          This component manages a <strong>list of countries</strong> with features for:
        </p>
        <ul>
          <li>Adding new countries</li>
          <li>Editing existing countries</li>
          <li>Deleting countries</li>
          <li>Viewing country details</li>
          <li>Searching</li>
          <li>Pagination</li>
          <li>Exporting data as CSV</li>
        </ul>
      </section>

      {/* 3. Technologies Used */}
      <section className="mb-5">
        <h3>3. Technologies Used</h3>
        <ul>
          <li>React Hooks: <code>useState</code>, <code>useEffect</code></li>
          <li>Bootstrap for styling and modal design</li>
          <li>SweetAlert2 (<code>swal</code>) for pop-ups</li>
          <li>Blob API for CSV file download</li>
        </ul>
      </section>

      {/* 4. State Variables */}
      <section className="mb-5">
        <h3>4. State Variables</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>State Variable</th>
              <th>Type</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>list</td><td>Array</td><td>Stores the list of countries</td></tr>
            <tr><td>id</td><td>Number</td><td>Tracks the current editing/viewing country ID</td></tr>
            <tr><td>name</td><td>String</td><td>Tracks the current country name for add/edit</td></tr>
            <tr><td>addUpdateModal</td><td>Boolean</td><td>Controls Add/Edit modal</td></tr>
            <tr><td>viewModal</td><td>Boolean</td><td>Controls View modal</td></tr>
            <tr><td>searchTerm</td><td>String</td><td>Search filter term</td></tr>
            <tr><td>currentPage</td><td>Number</td><td>Current page number</td></tr>
            <tr><td>pageSize</td><td>Number</td><td>Number of items per page</td></tr>
          </tbody>
        </table>
      </section>

      {/* 5. Lifecycle */}
      <section className="mb-5">
        <h3>5. Lifecycle</h3>
        <pre className="bg-light p-3 border">
{`useEffect(() => {
  setList([{ id: 1, name: "India" }, { id: 2, name: "USA" }]);
}, []);`}
        </pre>
      </section>

      {/* 6. Functions */}
      <section className="mb-5">
        <h3>6. Functions</h3>
        <h5>handleAddUpdate()</h5>
        <pre className="bg-light p-3 border">
{`const handleAddUpdate = () => {
  if (!name.trim()) {
    swal("Validation Error", "Country name cannot be empty", "error");
    return;
  }
  if (id) {
    setList(list.map(c => c.id === id ? { ...c, name } : c));
    swal("Updated!", "Country updated successfully", "success");
  } else {
    setList([...list, { id: list.length + 1, name }]);
    swal("Added!", "Country added successfully", "success");
  }
  setName("");
  setId(null);
  setAddUpdateModal(false);
};`}
        </pre>

        <h5>handleDelete(id)</h5>
        <pre className="bg-light p-3 border">
{`const handleDelete = (id) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this entry!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      setList(list.filter(c => c.id !== id));
      swal("Deleted!", "Country has been deleted!", "success");
    }
  });
};`}
        </pre>

        <h5>handleEdit(obj)</h5>
        <pre className="bg-light p-3 border">
{`const handleEdit = (obj) => {
  setId(obj.id);
  setName(obj.name);
  setAddUpdateModal(true);
};`}
        </pre>

        <h5>handleView(obj)</h5>
        <pre className="bg-light p-3 border">
{`const handleView = (obj) => {
  setId(obj.id);
  setName(obj.name);
  setViewModal(true);
};`}
        </pre>

        <h5>handleDownload()</h5>
        <pre className="bg-light p-3 border">
{`const handleDownload = () => {
  const csvContent = "Id,Country\\n" + list.map(c => \`\${c.id},\${c.name}\`).join("\\n");
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "countries.csv";
  a.click();
};`}
        </pre>
      </section>

      {/* 7. Filtering & Pagination */}
      <section className="mb-5">
        <h3>7. Filtering & Pagination</h3>
        <pre className="bg-light p-3 border">
{`const filteredList = list.filter(c => 
  c.name.toLowerCase().includes(searchTerm.toLowerCase())
);

const startIndex = (currentPage - 1) * pageSize;
const paginatedList = filteredList.slice(startIndex, startIndex + pageSize);

const totalPages = Math.ceil(filteredList.length / pageSize);`}
        </pre>
      </section>

      {/* 8. CSV Format */}
      <section className="mb-5">
        <h3>8. CSV Format</h3>
        <pre className="bg-light p-3 border">
{`Id,Country
1,India
2,USA
...`}
        </pre>
      </section>

      {/* 9. Improvements */}
      <section className="mb-5">
        <h3>9. Possible Improvements</h3>
        <ul>
          <li>Replace hardcoded initial data with API calls.</li>
          <li>Extract modals into separate components.</li>
          <li>Improve validation (avoid duplicates, max length).</li>
          <li>Add sorting functionality.</li>
        </ul>
      </section>
    </div>
  );
}

export default Nextcountry;
