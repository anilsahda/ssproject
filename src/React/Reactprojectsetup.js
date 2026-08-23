export default function Reactprojectsetup() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>📘 React Project Setup</h2>

      <section>
        <b>1. ✅ Project Initialization</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`npm create vite@latest myapp -- --template react-ts
cd myapp
code .
npm i react-router-dom bootstrap axios bootstrap-icons react-bootstrap-icons react-select sweetalert2
npm run dev`}
          </code>
        </pre>
      </section>

      <section>
        <b>2. 📁 Folder Structure</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`myapp/
└── src/
    ├── pages/
    │   └── Home.tsx
    ├── components/
    │   └── Layout.tsx
    ├── App.tsx
    └── main.tsx`}
          </code>
        </pre>
      </section>

      <section>

        <b>3.🔹 Home.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`function Home() {
  return (
    <div className="container">
      <h1>Welcome to SS Interns 👋</h1>
        <div className="row">
          <p className="text-muted">Simple, clean and modern form application</p>
        </div>
    </div>
  );
}

export default Home`}
          </code>
        </pre>

        <b>4.🧩 Layout.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">My App</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
}

export default Layout`}
          </code>
        </pre>

        <b>5.🔹 App.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;`}
          </code>
        </pre>

        <b>6.🔹 main.tsx</b>
        <p>Add bootstrap in main.tsx</p>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import 'bootstrap/dist/css/bootstrap.min.css';`}
          </code>
        </pre>
      </section>

      <section>
        <b>✅ Summary</b>
        <ul>
          <li>⚛️ React + Vite project initialized</li>
          <li>🧩 Modular component structure</li>
          <li>📄 Page routing with <code>react-router-dom</code></li>
          <li>✅ Consistent layout with shared Header and Footer</li>
          <li>🔗 React Git URL: <a href="https://github.com/anilsahda/SSFullstackUI.git" target="_blank" rel="noopener noreferrer">https://github.com/anilsahda/SSFullstackUI.git</a></li>
        </ul>
      </section>
    </div>
  );
}
