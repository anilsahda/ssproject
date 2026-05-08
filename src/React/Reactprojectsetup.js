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
npm run dev
npm install axios
npm i react-router-dom
npm i bootstrap
npm i bootstrap-icons
npm i react-bootstrap-icons
npm i react-select
npm i sweetalert2`}
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
      <h1>Manage/h1>
      <form>
        <div className="row">
          <div className="col-md-6">
            <input type="text" placeholder="Name" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </div>
      </form>
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
      <h1>My App</h1>
      <nav>
        <Link to="/">Home</Link>
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
