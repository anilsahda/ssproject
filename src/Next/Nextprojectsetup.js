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
│   ├── layout.tsx        // App layout
│   ├── page.tsx          // Home page
│   └── about/
│       └── page.tsx      // About page
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Layout.tsx
├── public/
├── styles/
│   └── globals.css
└── next.config.js`}
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

        <b>🔹 About Page (about/page.tsx)</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`export default function About() {
  return (
    <main>
      <h1>About Page</h1>
      <p>This is the about page of the Next app.</p>
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
        <Link href="/about">About</Link>
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

        <b>🧩 Layout.tsx</b>
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
{`import './globals.css';
import Layout from '../components/Layout';

export const metadata = {
  title: 'My Next App',
  description: 'Next Project Setup',
};

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
        <b>✅ Summary</b>
        <ul>
          <li>⚡ Next.js + TypeScript project initialized</li>
          <li>🧩 Modular component structure</li>
          <li>📄 Routing with Next.js file-based routing</li>
          <li>✅ Shared layout with Header and Footer components</li>
        </ul>
      </section>
    </div>
  );
}