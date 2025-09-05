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
└─ (superadmin)/
   └─ superadmin/
      ├─ layout.tsx           // SuperAdminLayout
      ├─ page.tsx             // super admin dashboard
      ├─ role/page.tsx
      └─ user/page.tsx`}                
            </code>
        </pre>
      </section>

      <section>
        <b>3.🔹 app/layout.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import type { Metadata } from "next";

export const metadata: Metadata = { title: "Multi Layout", description: "Main and Admin layouts" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`}
          </code>
        </pre>
      </section>

      <section>
        <b>4.🔹 app/(main)/layout.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import Link from "next/link";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand fw-bold fs-4">🌐 SS App</Link>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-controls="navbarNav" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link href="/" className="nav-link px-3 fw-semibold">Home</Link></li>
                <li className="nav-item"><Link href="/about" className="nav-link px-3 fw-semibold">About</Link></li>
            </ul>

            <div className="d-flex align-items-center gap-2">
              <Link href="/login" className="btn btn-light btn-sm rounded-pill px-3 fw-bold">Login</Link>
              <Link href="/register" className="btn btn-outline-light btn-sm rounded-pill px-3 fw-bold">Register</Link>
              <a href="#" className="btn btn-light btn-sm rounded-circle d-flex text-danger"><FaGoogle /></a>
              <a href="#" className="btn btn-light btn-sm rounded-circle d-flex text-primary"><FaFacebook /></a>
              <a href="#" className="btn btn-light btn-sm rounded-circle d-flex text-primary"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mt-4">{children}</main>
    </div>
  );
}`}
          </code>
        </pre>
      </section>

      <section>
        <b>5.🔹 app/(main)/page.tsx</b>
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
        <b>6.🔹 app/(superadmin)/superadmin/layout.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`"use client";

import Link from "next/link";
import { MdDashboard, MdHelpOutline } from "react-icons/md";
import { FaUsers, FaUserEdit, FaSignOutAlt, FaUserCog, FaUserShield } from "react-icons/fa";
import { FiSearch, FiBell, FiMoon, FiUserCheck } from "react-icons/fi";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100 bg-light" style={{ fontFamily: "Inter, sans-serif" }}>
      <header className="d-flex justify-content-between align-items-center px-4 py-2 shadow-sm bg-white border-bottom">
        <h1 className="m-0 text-primary" style={{ fontSize: "1.6rem", fontWeight: 600 }}>SS Admin</h1>
        <div className="flex-grow-1 px-4 d-none d-md-block">
          <div className="position-relative mx-auto" style={{ width: "50%" }}>
            <FiSearch size={18} className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
            <input type="text" className="form-control rounded-pill ps-5 shadow-sm" placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-light rounded-circle shadow-sm p-2 action-btn"><FiMoon size={18} /></button>
          <button className="btn btn-light rounded-circle shadow-sm p-2 action-btn"><MdHelpOutline size={18} /></button>
          <div className="position-relative">
            <button className="btn btn-light rounded-circle shadow-sm p-2 action-btn"><FiBell size={18} /></button>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "0.65rem" }}>5</span>
          </div>

          <div className="dropdown">
            <button id="dropdownUser" className="btn p-0 d-flex align-items-center gap-2 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" type="button">
              <img src="https://ui-avatars.com/api/?name=Admin+User&background=0d6efd&color=fff&rounded=true" alt="profile" className="rounded-circle shadow-sm border border-2 border-light" width="40" height="40" />
            </button>

            <ul className="dropdown-menu dropdown-menu-end shadow border-0 rounded-3 p-0 overflow-hidden" aria-labelledby="dropdownUser" style={{ minWidth: "220px" }}>
              <li className="bg-light p-3 border-bottom text-center">
                <div className="fw-semibold">Admin User</div>
                <small className="text-muted">Administrator</small>
              </li>
              <li>
                <Link className="dropdown-item d-flex align-items-center gap-2 py-2" href="/admin/profile">
                  <FaUserEdit /> Edit Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item d-flex align-items-center gap-2 py-2" href="/admin/account">
                  <FaUserCog /> Account Settings
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider m-0" />
              </li>
              <li>
                <button className="dropdown-item d-flex align-items-center gap-2 py-2 text-danger" type="button">
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="d-flex flex-grow-1">
        <aside className="d-flex flex-column p-3 shadow-sm" style={{ width: 230, background: "linear-gradient(180deg, #1e293b, #0f172a)", color: "#f1f5f9" }}>
          <nav>
            <ul className="nav nav-pills flex-column gap-1">
              <li>
                <Link href="/superadmin" className="nav-link d-flex align-items-center gap-2 sidebar-link active">
                  <MdDashboard size={18} className="text-info" /> Dashboard
                </Link>
              </li>
              <li>
                <Link href="/superadmin/users" className="nav-link d-flex align-items-center gap-2 sidebar-link">
                  <FaUsers size={16} className="text-warning" /> Users
                </Link>
              </li>
              <li>
                <Link href="/superadmin/role" className="nav-link d-flex align-items-center gap-2 sidebar-link">
                  <FaUserShield size={16} className="text-success" /> Role
                </Link>
              </li>
              <li>
                <Link href="/superadmin/userrole" className="nav-link d-flex align-items-center gap-2 sidebar-link">
                  <FiUserCheck size={16} className="text-primary" /> User Role
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mt-auto pt-3 border-top border-secondary text-center">
            <small style={{ color: "#94a3b8" }}>© 2025 SS App</small>
          </div>
        </aside>
        <main className="flex-grow-1 p-4 bg-light">{children}</main>
      </div>
    </div>
  );
}`}
          </code>
        </pre>
      </section>

      <section>
        <b>7.🔹 app/(superadmin)/superadmin/page.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`export default function SuperAdminDashboard() {
  return <h3>Super Admin Dashboard</h3>;
}`}
          </code>
        </pre>
      </section>

       <section>
        <b>✅ Summary</b>
        <ul>
          <li>⚛️ Next project initialized</li>
          <li>🧩 Modular component structure</li>
          <li>✅ Consistent layout with shared Header and Footer</li>
          <li>🔗 Next Git URL: <a href="https://github.com/anilsahda/ssui.git" target="_blank" rel="noopener noreferrer">https://github.com/anilsahda/ssui.git</a></li>
        </ul>
      </section>
    </div>
  );
}