import React from 'react';

export default function NextProjectSetup() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1>📘 NextProjectSetup - Documentation v1</h1>

      <section>
        <h2>1. ✅ Project Initialization</h2>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`npx create-next-app@latest myapp --no-app
cd myapp
npm run dev`}
          </code>
        </pre>
        <p>
          <strong>--no-app</strong>: Sets up the project using the Pages Router instead of the App Router.
          <br />
          <strong>npm run dev</strong>: Starts the development server at <code>http://localhost:3000</code>.
        </p>
      </section>

      <section>
        <h2>2. 📁 Folder Structure</h2>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`myapp/
├── pages/
│   ├── index.tsx
│   ├── about.tsx
│   └── _app.tsx
│
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Layout.tsx
│
└── public/`}
          </code>
        </pre>
      </section>

      <section>
        <h2>3. 🧱 Components and Pages</h2>

        <h3>🔹 pages/index.tsx</h3>
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

        <h3>🔹 pages/about.tsx</h3>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`export default function About() {
  return (
    <>
      <h2>About Page</h2>
      <p>This is the about page of the static website.</p>
    </>
  );
}`}
          </code>
        </pre>

        <h3>🧩 components/Header.tsx</h3>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '1rem', background: '#f0f0f0' }}>
      <h1>My Static Site</h1>
      <nav style={{ marginTop: '0.5rem' }}>
        <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}`}
          </code>
        </pre>

        <h3>🧩 components/Footer.tsx</h3>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`export default function Footer() {
  return (
    <footer style={{ padding: '1rem', background: '#f0f0f0', marginTop: '2rem' }}>
      <p>&copy; {new Date().getFullYear()} My Static Site</p>
    </footer>
  );
}`}
          </code>
        </pre>

        <h3>🧩 components/Layout.tsx</h3>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main style={{ padding: '1rem' }}>{children}</main>
      <Footer />
    </>
  );
}`}
          </code>
        </pre>

        <h3>🧩 pages/_app.tsx</h3>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import Layout from '../components/Layout';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}`}
          </code>
        </pre>
      </section>

      <section>
        <h2>✅ Summary</h2>
        <p>
          You’ve now set up a basic static Next.js site using the Pages Router, featuring:
        </p>
        <ul>
          <li>✅ Clean folder structure</li>
          <li>✅ Reusable Header, Footer, and Layout components</li>
          <li>✅ Two pages: Home and About</li>
          <li>✅ Shared layout via <code>_app.tsx</code></li>
        </ul>
        <p>Perfect for starting a static or content-focused site!</p>
      </section>
    </div>
  );
}
