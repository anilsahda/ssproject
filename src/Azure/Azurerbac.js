import { FaBook, FaCheckCircle, FaLink, FaUserShield } from "react-icons/fa";

function Azurerbac() {
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
        <h1 className="fw-bold mb-5 text-primary text-center">Azure RBAC (Role-Based Access Control)</h1>

        {/* Step 1: List Built-in Roles */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 1: List Built-in Roles
          </div>
          <pre style={preStyle}>{`az role definition list --name "Contributor"`}</pre>
        </section>

        {/* Step 2: Assign Role to a User */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 2: Assign Role to a User
          </div>
          <pre style={preStyle}>{`# Assign Contributor role to a user at the subscription level
az role assignment create \
  --assignee user@domain.com \
  --role Contributor \
  --scope /subscriptions/{subscription-id}`}</pre>
        </section>

        {/* Step 3: Assign Role to a Group */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaUserShield /> Step 3: Assign Role to a Group
          </div>
          <pre style={preStyle}>{`az role assignment create \
  --assignee mygroup@domain.com \
  --role "Reader" \
  --scope /subscriptions/{subscription-id}/resourceGroups/MyResourceGroup`}</pre>
        </section>

        {/* Step 4: Remove Role Assignment */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 4: Remove Role Assignment
          </div>
          <pre style={preStyle}>{`az role assignment delete \
  --assignee user@domain.com \
  --role Contributor \
  --scope /subscriptions/{subscription-id}`}</pre>
        </section>

        {/* Step 5: Check Role Assignments */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 5: Check Role Assignments
          </div>
          <pre style={preStyle}>{`# List all role assignments for a subscription
az role assignment list --subscription {subscription-id}

# List role assignments for a specific resource group
az role assignment list --resource-group MyResourceGroup`}</pre>
        </section>

        {/* Step 6: Custom Role */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 6: Create a Custom Role
          </div>
          <pre style={preStyle}>{`# Create a custom role using JSON definition
az role definition create --role-definition customRole.json

# Sample JSON (customRole.json)
{
  "Name": "CustomReader",
  "Description": "Can read resources in resource group",
  "Actions": [
    "Microsoft.Resources/subscriptions/resourceGroups/read",
    "Microsoft.Compute/virtualMachines/read"
  ],
  "AssignableScopes": ["/subscriptions/{subscription-id}/resourceGroups/MyResourceGroup"]
}`}</pre>
        </section>

        {/* Summary */}
        <section>
          <div style={sectionHeaderStyle}>
            <FaBook /> Summary
          </div>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>✅ Understand Azure built-in roles</li>
            <li>✅ Assign roles to users, groups, and service principals</li>
            <li>✅ Remove role assignments</li>
            <li>✅ Create and use custom roles for fine-grained access control</li>
            <li>✅ Check role assignments at subscription or resource level</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Azurerbac;
