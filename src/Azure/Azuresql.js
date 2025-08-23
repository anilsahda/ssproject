import { FaBook, FaCheckCircle, FaLink, FaCode } from "react-icons/fa";

function Azuresql() {
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
        <h1 className="fw-bold mb-5 text-primary text-center">Azure SQL Database</h1>

        {/* Step 1: Create Resource Group */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 1: Create Resource Group
          </div>
          <pre style={preStyle}>{`az group create --name MySQLRG --location eastus`}</pre>
        </section>

        {/* Step 2: Create SQL Server */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 2: Create SQL Server
          </div>
          <pre style={preStyle}>{`az sql server create \
  --name myserver12345 \
  --resource-group MySQLRG \
  --location eastus \
  --admin-user myadmin \
  --admin-password MyPassword123!`}</pre>
        </section>

        {/* Step 3: Create SQL Database */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 3: Create SQL Database
          </div>
          <pre style={preStyle}>{`az sql db create \
  --resource-group MySQLRG \
  --server myserver12345 \
  --name MyDatabase \
  --service-objective S0`}</pre>
        </section>

        {/* Step 4: Configure Firewall Rules */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 4: Configure Firewall Rules
          </div>
          <pre style={preStyle}>{`# Allow client IP
az sql server firewall-rule create \
  --resource-group MySQLRG \
  --server myserver12345 \
  --name AllowMyIP \
  --start-ip-address 203.0.113.25 \
  --end-ip-address 203.0.113.25`}</pre>
        </section>

        {/* Step 5: Connect to Database */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 5: Connect to Database
          </div>
          <pre style={preStyle}>{`# Using sqlcmd
sqlcmd -S myserver12345.database.windows.net -d MyDatabase -U myadmin -P MyPassword123!`}</pre>
        </section>

        {/* Step 6: Perform Basic Operations */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 6: Perform Basic SQL Operations
          </div>
          <pre style={preStyle}>{`-- Create table
CREATE TABLE Employees (
    Id INT PRIMARY KEY,
    Name NVARCHAR(50),
    Department NVARCHAR(50)
);

-- Insert data
INSERT INTO Employees (Id, Name, Department) VALUES (1, 'Anil', 'IT');

-- Query data
SELECT * FROM Employees;

-- Update data
UPDATE Employees SET Department='HR' WHERE Id=1;

-- Delete data
DELETE FROM Employees WHERE Id=1;`}</pre>
        </section>

        {/* Step 7: Backup & Restore */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 7: Backup & Restore
          </div>
          <pre style={preStyle}>{`# Automated backups are enabled by default
# Restore a database to a point in time
az sql db restore \
  --dest-name MyDatabaseRestore \
  --name MyDatabase \
  --resource-group MySQLRG \
  --server myserver12345 \
  --time "2025-08-23T10:00:00"`}</pre>
        </section>

        {/* Summary */}
        <section>
          <div style={sectionHeaderStyle}>
            <FaBook /> Summary
          </div>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>✅ Create Azure SQL Server & Database</li>
            <li>✅ Configure firewall rules for access</li>
            <li>✅ Connect using sqlcmd or any client</li>
            <li>✅ Perform basic SQL operations (CRUD)</li>
            <li>✅ Use automated backups and restore points</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Azuresql;
