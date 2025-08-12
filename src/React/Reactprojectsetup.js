export default function Reactprojectsetup() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1>📘 ReactProjectSetup - Documentation v1</h1>

      <section>
        <h2>1. ✅ Project Initialization</h2>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`npm create vite@latest myapp -- --template react-ts
cd myapp
npm install
npm run dev`}
          </code>
        </pre>
        <p>
          <strong>--template react-ts</strong>: Sets up a React + TypeScript project using Vite.<br />
          <strong>npm run dev</strong>: Starts the development server at <code>http://localhost:5173</code>.
        </p>
      </section>

      <section>
        <h2>2. 📁 Folder Structure</h2>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`myapp/
├── src/
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── About.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── App.tsx
│   └── main.tsx
├── public/
└── index.html`}
          </code>
        </pre>
      </section>

      <section>
        <h2>3. 🧱 Pages and Components</h2>

        <h3>🔹 Home.tsx</h3>
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

        <h3>🔹 About.tsx</h3>
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

        <h3>🧩 Header.tsx</h3>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ padding: '1rem', background: '#f0f0f0' }}>
      <h1>My Static Site</h1>
      <nav style={{ marginTop: '0.5rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}`}
          </code>
        </pre>

        <h3>🧩 Footer.tsx</h3>
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

        <h3>🧩 Layout.tsx</h3>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
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

        <h3>🔹 App.tsx</h3>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;`}
          </code>
        </pre>

        <h3>🔹 main.tsx</h3>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`}
          </code>
        </pre>
      </section>

      <section>
        <h2>✅ Summary</h2>
        <ul>
          <li>⚛️ React + Vite project initialized</li>
          <li>🧩 Modular component structure</li>
          <li>📄 Page routing with <code>react-router-dom</code></li>
          <li>✅ Consistent layout with shared Header and Footer</li>
        </ul>
        <p>Perfect for simple static or multi-page React sites!</p>
      </section>
    </div>
  );
}
