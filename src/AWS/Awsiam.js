export default function Awsiam() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>🔐 AWS IAM Service</h2>

      <section>
        <b>1. ✅ What is IAM?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`IAM (Identity and Access Management) allows you to securely manage access
to AWS services and resources for your users.`}
          </code>
        </pre>
      </section>

      <section>
        <b>2. 🔹 Create IAM Users</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Log in to AWS Management Console
2. Go to Services -> IAM -> Users
3. Click "Add Users"
4. Enter username (e.g., developer)
5. Select access type:
   - Programmatic access (CLI, SDK)
   - AWS Management Console access (web)
6. Set a password for console access (optional)
7. Click Next`}
          </code>
        </pre>
      </section>

      <section>
        <b>3. 🛡 Set Permissions</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Choose "Attach existing policies directly"
2. For admin access, select "AdministratorAccess"
3. For limited access, select relevant managed policies
4. Review and create user
5. Download CSV with Access Key ID and Secret Access Key`}
          </code>
        </pre>
      </section>

      <section>
        <b>4. 🔄 Create IAM Groups (Optional)</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Go to IAM -> Groups
2. Click "Create Group"
3. Enter group name (e.g., DevTeam)
4. Attach policies to the group
5. Add IAM users to the group`}
          </code>
        </pre>
      </section>

      <section>
        <b>5. 🔒 Enable MFA for Users</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Go to IAM -> Users -> Select a user
2. Click "Security credentials" tab
3. Click "Manage MFA"
4. Choose "Virtual MFA device" (e.g., Google Authenticator)
5. Scan QR code with authenticator app
6. Enter codes and activate`}
          </code>
        </pre>
      </section>

      <section>
        <b>6. 📄 Create IAM Roles</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Go to IAM -> Roles
2. Click "Create role"
3. Select trusted entity:
   - AWS service
   - Another AWS account
   - Web identity
4. Attach required policies
5. Give role a name (e.g., LambdaExecutionRole)
6. Create role`}
          </code>
        </pre>
      </section>

      <section>
        <b>7. 🔑 IAM Policies</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`- AWS provides managed policies (predefined)
- You can create custom policies for fine-grained access
- Policies use JSON to define:
  - Actions (what can be done)
  - Resources (on which services)
  - Effect (Allow or Deny)`}
          </code>
        </pre>
      </section>

      <section>
        <b>8. ✅ Summary</b>
        <ul>
          <li>🔐 IAM manages users, groups, roles, and permissions</li>
          <li>🛡 Attach policies for access control</li>
          <li>🔑 Secure accounts using MFA</li>
          <li>📄 Roles allow services to access resources securely</li>
          <li>⚡ Fine-grained access control with custom policies</li>
        </ul>
      </section>
    </div>
  );
}
