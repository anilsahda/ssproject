export default function NextMultiLayout() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>📘 Next Project Setup</h2>

      <section>
        <b>1. ✅ Project Initialization</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`npx create-next-app@latest myapp --ts
cd myapp
code .
npm install bootstrap
npm install react-icons
npm run dev`}
          </code>
        </pre>
      </section>

      <section>
        <b>2. Multi-Layout structure</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
            <code>
{`app
├─ layout.tsx                 // RootLayout (providers, html/body)
├─ (main)/
│  ├─ layout.tsx              // MainLayout (public site)
│  ├─ page.tsx                // Home page
│  ├─ about/page.tsx
│  └─ contact/page.tsx
├─ (admin)/
│  └─ admin/
│     ├─ layout.tsx           // AdminLayout
│     ├─ page.tsx             // /admin dashboard
│     ├─ users/page.tsx
│     └─ settings/page.tsx
├─ (customer)/
│  └─ customer/
│     ├─ layout.tsx           // CustomerLayout
│     ├─ page.tsx             // /customer home
│     └─ orders/page.tsx
components
├─ MainHeader.tsx
├─ MainFooter.tsx
├─ AdminSidebar.tsx
└─ CustomerNav.tsx
middleware.ts                 // (optional) role guard for /admin & /customer
`}                
            </code>
        </pre>
      </section>

      <section>
        <b>3.🔹 app/layout.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Multi Layout App",
  description: "Admin, Customer, and Main layouts in Next.js App Router",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Put global providers here (Theme, Auth, QueryClient, etc.)
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
`}
          </code>
        </pre>
      </section>

      <section>
        <b>4.🔹 components/MainHeader.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`export default function MainHeader() {
  return (
    <header style={{ padding: 16, borderBottom: "1px solid #eee" }}>
      <strong>MySite</strong> &nbsp; | &nbsp;
      <a href="/">Home</a> &nbsp;|&nbsp; <a href="/about">About</a> &nbsp;|&nbsp; <a href="/contact">Contact</a>
      &nbsp;|&nbsp; <a href="/customer">Customer</a> &nbsp;|&nbsp; <a href="/admin">Admin</a>
    </header>
  );
}
`}
          </code>
        </pre>
      </section>

      <section>
        <b>5.🔹 components/MainFooter.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`export default function MainFooter() {
  return (
    <footer style={{ padding: 16, borderTop: "1px solid #eee", marginTop: 32 }}>
      <small>© {new Date().getFullYear()} MySite</small>
    </footer>
  );
}
`}
          </code>
        </pre>
      </section>

      <section>
        <b>6.🔹 app/(main)/layout.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <MainHeader />
      <main style={{ padding: 24 }}>{children}</main>
      <MainFooter />
    </div>
  );
}
`}
          </code>
        </pre>
      </section>

      <section>
        <b>7.🔹 app/(main)/page.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`export default function HomePage() {
  return <h1>Welcome to the public site</h1>;
}
`}
          </code>
        </pre>
      </section>

      <section>
        <b>8.🔹 app/(main)/page.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`export default function HomePage() {
  return <h1>Welcome to the public site</h1>;
}
`}
          </code>
        </pre>
      </section>

      <section>
        <b>9.🔹 components/AdminSidebar.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside style={{ width: 220, borderRight: "1px solid #eee", padding: 16 }}>
      <h3>Admin</h3>
      <nav>
        <ul style={{ display: "grid", gap: 8, paddingLeft: 0 }}>
          <li><Link href="/admin">Dashboard</Link></li>
          <li><Link href="/admin/users">Users</Link></li>
          <li><Link href="/admin/settings">Settings</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
`}
          </code>
        </pre>
      </section>

      <section>
        <b>10.🔹 app/(admin)/admin/layout.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", minHeight: "100vh" }}>
      <AdminSidebar />
      <section style={{ padding: 24 }}>
        <header style={{ marginBottom: 16 }}>
          <h2>Admin Panel</h2>
        </header>
        {children}
      </section>
    </div>
  );
}
`}
          </code>
        </pre>
      </section>

      <section>
        <b>11.🔹 app/(admin)/admin/page.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`export default function AdminDashboard() {
  return <h3>Admin Dashboard</h3>;
}
`}
          </code>
        </pre>
      </section>

      <section>
        <b>12.🔹 components/CustomerNav.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import Link from "next/link";

export default function CustomerNav() {
  return (
    <nav style={{ padding: 16, borderBottom: "1px solid #eee" }}>
      <strong>Customer</strong> &nbsp; | &nbsp;
      <Link href="/customer">Home</Link> &nbsp;|&nbsp; <Link href="/customer/orders">Orders</Link>
    </nav>
  );
}
`}
          </code>
        </pre>
      </section>

      <section>
        <b>13.🔹 app/(customer)/customer/layout.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import CustomerNav from "@/components/CustomerNav";

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <CustomerNav />
      <main style={{ padding: 24 }}>{children}</main>
    </div>
  );
}
`}
          </code>
        </pre>
      </section>

      <section>
        <b>14.🔹 app/(customer)/customer/page.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`export default function CustomerHome() {
  return <h3>Customer Home</h3>;
}
`}
          </code>
        </pre>
      </section>

       <section>
        <b>✅ Summary</b>
        <ul>
          <li>⚛️ Next project initialized</li>
          <li>🧩 Modular component structure</li>
          <li>✅ Consistent layout with shared Header and Footer</li>
          <li>🔗 React Git URL: <a href="https://github.com/anilsahda/ssfullstacknextui.git" target="_blank" rel="noopener noreferrer">https://github.com/anilsahda/SSFullstackUI.git</a></li>
        </ul>
      </section>
    </div>
  );
}