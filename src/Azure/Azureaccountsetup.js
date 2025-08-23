export default function Azureaccountsetup() {
  return (
    <div className="p-8 font-sans leading-relaxed">
      <h2 className="text-3xl font-semibold mb-6">☁️ Azure Account Setup</h2>

      <section className="mb-8">
        <b>1. ✅ Create Azure Account</b>
        <pre className="bg-gray-100 p-4 overflow-x-auto rounded-xl mt-3">
          <code>{`1. Go to https://azure.microsoft.com/free
2. Click "Start free" (or "Try Azure for free")
3. Sign in with your Microsoft account (or create one)
4. Provide identity verification (phone) and a valid payment method
5. Accept the Microsoft Azure agreement and privacy terms
6. Your subscription will be created (Free trial or Pay-As-You-Go)
7. Open the Azure Portal: https://portal.azure.com`}
          </code>
        </pre>
      </section>

      <section className="mb-8">
        <b>2. 🔑 Configure User & Access (Microsoft Entra ID)</b>
        <pre className="bg-gray-100 p-4 overflow-x-auto rounded-xl mt-3">
          <code>{`A) Create a user (optional for separate admin)
   1. Azure Portal -> Microsoft Entra ID -> Users
   2. Click "New user" -> "Create new user"
   3. Enter name, username, set password -> Create

B) Assign Azure RBAC at subscription scope
   1. Azure Portal -> Subscriptions -> select your subscription
   2. Access control (IAM) -> Add -> Add role assignment
   3. Choose a role: Owner (full), Contributor (manage), Reader (view)
   4. Members -> Select your user -> Review + assign

C) (Recommended for programmatic access) Create a Service Principal
   1. Azure Portal -> Microsoft Entra ID -> App registrations -> New registration
   2. Name the app (e.g., "admin-sp"), choose account type -> Register
   3. Record: Application (client) ID and Directory (tenant) ID
   4. Certificates & secrets -> New client secret -> Copy the value securely
   5. Give the app access: Subscriptions -> Access control (IAM) -> Add role assignment
      - Assign Contributor/Reader/Owner to the app registration

D) Useful IDs you may need
   - Subscription ID: Subscriptions -> Overview
   - Tenant ID & Client ID: App registration -> Overview
   - Client Secret: App registration -> Certificates & secrets`}
          </code>
        </pre>
      </section>

      <section className="mb-8">
        <b>3. 🔒 Enable MFA (Multi-Factor Authentication)</b>
        <pre className="bg-gray-100 p-4 overflow-x-auto rounded-xl mt-3">
          <code>{`Option 1: Per-user MFA (simple)
1. Azure Portal -> Microsoft Entra ID -> Users
2. Click "Per-user MFA" (Manage) -> open MFA portal
3. Enable MFA for the selected user(s)
4. User signs in and configures Microsoft Authenticator (QR code)

Option 2: Conditional Access policy (recommended)
1. Azure Portal -> Microsoft Entra ID -> Protection -> Conditional Access
2. Create new policy: "Require MFA for all users"
3. Users: All users (exclude break-glass account if you have one)
4. Cloud apps: All cloud apps
5. Grant: Require multi-factor authentication
6. Enable: On -> Create

Tip: Test with a pilot group before enforcing tenant-wide.`}
          </code>
        </pre>
      </section>

      <section className="mb-8">
        <b>4. 💻 (Optional) Set up Azure CLI</b>
        <pre className="bg-gray-100 p-4 overflow-x-auto rounded-xl mt-3">
          <code>{`1. Install Azure CLI: https://learn.microsoft.com/cli/azure/install-azure-cli
2. Sign in (user): az login
3. Sign in (service principal):
   az login --service-principal \
     -u <CLIENT_ID> -p <CLIENT_SECRET> \
     --tenant <TENANT_ID>
4. Pick subscription: az account set --subscription <SUBSCRIPTION_ID>
5. Verify: az group list`}
          </code>
        </pre>
      </section>

      <section className="mb-8">
        <b>5. 📦 (Optional) First Resource Group & Storage Account</b>
        <pre className="bg-gray-100 p-4 overflow-x-auto rounded-xl mt-3">
          <code>{`# Create a resource group
az group create --name rg-demo --location eastus

# Create a storage account (name must be globally unique)
az storage account create \
--name mystorage12345 \
--resource-group rg-demo \
--location eastus \
--sku Standard_LRS`}
          </code>
        </pre>
      </section>

      <p className="text-sm text-gray-600">
        Note: Microsoft Entra ID is the new name for Azure Active Directory (Azure AD).
      </p>
    </div>
  );
}
