function SSECommerce() {
  return (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
      <h3>Project Overview</h3>
      <p>The <strong>SS E-Commerce</strong> is a web-based application designed to manage online sales, products, orders, and customers. It provides an easy-to-use platform for sellers to manage their online store and for buyers to browse and purchase products.</p>
      <b>Technology Stack</b>
      <ul>
        <li>Front-End: React | Next.js | Angular | Vue</li>
        <li>Back-End: .NET Core | Spring Boot | Node.js | DJango</li>
        <li>Database: SQL Server</li>
        <li>Cloud Platform: AWS | Azure</li>
      </ul>
      <h2>Modules and Functionalities</h2>
      <b>1. Main Module</b>
      <ul>
        <li>Home, About and Services</li>
        <li>Contact Us</li>
        <li>Login</li>
        <li>Register</li>
      </ul>
      <b>2. Super Admin Module</b>
      <ul>
        <li>Manage roles and permissions (Admin, Seller, Customer)</li>
        <li>Manage system users and assign roles</li>
      </ul>
      <b>3. Admin Module</b>
      <ul>
        <li>Manage all products, categories, and inventory</li>
        <li>Monitor seller activity and generate reports</li>
        <li>Approve or reject seller requests</li>
        <li>Add, update, and remove products</li>
        <li>Manage product inventory and pricing</li>
        <li>View orders and process shipments</li>
        <li>Generate sales reports</li>
      </ul>
      <b>4. Customer Module</b>
      <ul>
        <li>Browse products by category or search</li>
        <li>Add products to cart and place orders</li>
        <li>Track orders and view order history</li>
        <li>Provide feedback or reviews for products</li>
      </ul>

      <section>
        <b>SS E-Commerce</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
            <code>
{`app
├─ layout.tsx                 // RootLayout (providers, html/body)
├─ (main)/
│  ├─ layout.tsx              // MainLayout (public site)
│  ├─ page.tsx                // Home page
│  ├─ product/page.tsx
│  ├─ feedback/page.tsx
│  ├─ contact/page.tsx
│  ├─ login/page.tsx
│  └─ register/page.tsx
│
├─ (superadmin)/superadmin
│  ├─ layout.tsx              // SuperAdminLayout
│  ├─ page.tsx                // Super Admin Dashboard
│  ├─ user/page.tsx
│  ├─ role/page.tsx
│  └─ userrole/page.tsx
│
├─ (admin)/admin
│  ├─ layout.tsx              // AdminLayout
│  ├─ page.tsx                // Admin Dashboard
│  ├─ category/page.tsx
│  ├─ item/page.tsx
│  ├─ quantity/page.tsx
│  ├─ vieworder/page.tsx
│  ├─ viewpayment/page.tsx
│  ├─ reports/page.tsx
│  └─ feedback/page.tsx
│
└─ (customer)/customer
    ├─ layout.tsx           // CustomerLayout
    ├─ page.tsx             // Customer Dashboard
    ├─ customerprofile/page.tsx
    ├─ order/page.tsx
    ├─ payment/page.tsx
    └─ cart/page.tsx`}
            </code>
        </pre>
      </section>

    </div>
  );
}

export default SSECommerce;
