function AngularCrudDocs() {
  const sectionHeaderStyle = {
    borderBottom: "2px solid #007bff",
    paddingBottom: "5px",
    marginBottom: "15px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#007bff",
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-primary">Angular CRUD Documentation</h2>

      <div className="mb-4">
        <h3 style={sectionHeaderStyle}>Project Overview</h3>
        <p>
          The <strong>Angular CRUD</strong> module demonstrates Create, Read, Update,
          and Delete operations in an Angular application. It provides a simple UI
          and service-based architecture to manage data entities (like countries,
          employees, or products).
        </p>
      </div>

      <div className="mb-4">
        <h3 style={sectionHeaderStyle}>Features</h3>
        <ul>
          <li>Add new records</li>
          <li>View a list of records in a table</li>
          <li>Edit existing records</li>
          <li>Delete records with confirmation</li>
          <li>Validation for input fields</li>
          <li>Separation of concerns using Angular services</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 style={sectionHeaderStyle}>Technology Stack</h3>
        <ul>
          <li><strong>Front-End:</strong> Angular (Components, Modules, Services)</li>
          <li><strong>UI Styling:</strong> Bootstrap</li>
          <li><strong>Data Handling:</strong> Angular HttpClient</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 style={sectionHeaderStyle}>Functionalities</h3>
        <ul>
          <li>
            <strong>Create:</strong> Form with validation to add new entities.
          </li>
          <li>
            <strong>Read:</strong> Display data in a dynamic table.
          </li>
          <li>
            <strong>Update:</strong> Edit an existing record and save changes.
          </li>
          <li>
            <strong>Delete:</strong> Remove records with a confirmation dialog.
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 style={sectionHeaderStyle}>UI Layout</h3>
        <p>
          The module consists of:
          <ul>
            <li>Form section for input and update</li>
            <li>Table section for listing records with action buttons</li>
          </ul>
        </p>
      </div>

      <div className="mb-4">
        <h3 style={sectionHeaderStyle}>Example Use Cases</h3>
        <ul>
          <li>Employee management system</li>
          <li>Product inventory management</li>
          <li>Country/state/district management</li>
        </ul>
      </div>
    </div>
  );
}

export default AngularCrudDocs;
