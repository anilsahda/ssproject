export default function NextProjectSetup() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>📘 Next Project Setup</h2>

      <section>
        <b>1. ✅ Project Initialization</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`npx create-next-app@latest myapp --ts
cd myapp
npm install bootstrap
npm install react-icons
npm run dev`}
          </code>
        </pre>
      </section>

      <section>
        <b>2. 📁 Folder Structure</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`myapp/
├── app/
│   ├── layout.tsx    // App layout
│   └── globals.css   
├── page.tsx          // Home page
│   └── country/
│       └── page.tsx  // Country page
└── components/
    └── Layout.tsx`}
          </code>
        </pre>
      </section>

      <section>
        <b>🔹 Home Page (page.tsx)</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`export default function Home() {
  return (
    <main>
      <h1>Welcome to Home Page</h1>
    </main>
  );
}`}
          </code>
        </pre>

        <b>🔹 Country Page (country/page.tsx)</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`export default function Country() {
  return (
    <main>
      <h1>Country Page</h1>
      <p>This is the country page of the Next app.</p>
    </main>
  );
}`}
          </code>
        </pre>

        <b>🧩 Header.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <h1>My Next App</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/country">Country</Link>
      </nav>
    </header>
  );
}`}
          </code>
        </pre>

        <b>🧩 Footer.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`export default function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} My Next App</p>
    </footer>
  );
}`}
          </code>
        </pre>

        <b>🧩 Components Layout (components/layout.tsx)</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}`}
          </code>
        </pre>

        <b>🔹 App Layout (app/layout.tsx)</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}`}
          </code>
        </pre>
      </section>

      <section>
        <b>🧩 For Better look and feel update (components/layout.tsx)</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand fw-bold fs-4">🌐 SS App</Link>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {[
                { href: "/", label: "Home" },
                { href: "/language", label: "Language" },
                { href: "/country", label: "Country" },
                { href: "/state", label: "State" },
                { href: "/district", label: "District" },
              ].map((item) => (
                <li className="nav-item" key={item.href}>
                  <Link href={item.href} className="nav-link px-3 fw-semibold">{item.label}</Link>
                </li>
              ))}
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
    </>
  );
}`}
          </code>
        </pre>
      </section>
    </div>
  );
}