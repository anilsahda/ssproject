export default function Awsaccountsetup() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>☁️ AWS Account Setup</h2>

      <section>
        <b>1. ✅ Create AWS Account</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Go to https://aws.amazon.com/
2. Click "Create an AWS Account"
3. Enter your email address, password, and account name
4. Provide contact information and payment method
5. Verify phone number via OTP
6. Select AWS Free Tier plan`}
          </code>
        </pre>
      </section>

      <section>
        <b>2. 🔑 Configure IAM User</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Log in to AWS Management Console
2. Go to Services -> IAM -> Users
3. Click "Add users"
4. Enter username (e.g., admin)
5. Select "Programmatic access" and "AWS Management Console access"
6. Set permissions:
   - Attach existing policies directly
   - Use "AdministratorAccess" for full access (or customize)
7. Review and create user
8. Download CSV containing Access Key ID and Secret Access Key`}
          </code>
        </pre>
      </section>

      <section>
        <b>3. 🔒 Enable MFA (Multi-Factor Authentication)</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Go to IAM -> Users -> Select your user
2. Click "Security credentials" tab
3. Click "Manage MFA"
4. Choose "Virtual MFA device" (e.g., Google Authenticator)
5. Scan QR code with authenticator app
6. Enter generated codes and activate`}
          </code>
        </pre>
      </section>
    </div>
  );
}

