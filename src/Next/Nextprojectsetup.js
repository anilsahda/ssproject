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
code .
npm install bootstrap
npm install react-icons
npm run dev`}
          </code>
        </pre>
      </section>

      <section>
        <b>2.🔹 Home Page (app / page.tsx)</b>
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
      </section>

      <section>
        <b>3. 🧩 App Layout (app / layout.tsx)</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`"use client";

import Link from "next/link";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
          <div className="container-fluid">
            <Link href="/" className="navbar-brand fw-bold fs-4">🌐 SS App</Link>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" 
            aria-controls="navbarNav" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
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
      </body>
    </html>
  );
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
          <li>🔗 React Git URL: <a href="https://github.com/anilsahda/ssfullstacknextui.git" target="_blank" rel="noopener noreferrer">https://github.com/anilsahda/SSFullstackUI.git</a></li>
        </ul>
      </section>
    </div>
  );
}