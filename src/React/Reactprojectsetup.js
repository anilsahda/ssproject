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
npm install
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
├── src/
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── Country.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── index.html
└── .env`}
          </code>
        </pre>
      </section>

      <section>
        <b>3.🔹 Home.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`function Home() {
  return (
    <main>
      <h1>Welcom to Home Page</h1>
    </main>
  );
}

export default Home`}
          </code>
        </pre>

        <b>4.🔹 Country.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`function Country() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Manage Country</h1>
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <input type="text" placeholder="Enter country name" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <button type="submit" className="btn btn-primary">Add Country</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Country`}
          </code>
        </pre>

        <b>5.🧩 Header.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/country">Country</Link>
      </nav>
    </header>
  );
}

export default Header`}
          </code>
        </pre>

        <b>6.🧩 Footer.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Shiwansh Intern</p>
    </footer>
  );
}

export default Footer`}
          </code>
        </pre>

        <b>7.🧩 Layout.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import Header from './Header';
import Footer from './Footer';
import type { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout`}
          </code>
        </pre>

        <b>8.🔹 App.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Country from './pages/Country';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<Country />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;`}
          </code>
        </pre>

        <b>9.🔹 main.tsx</b>
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
        </ul>
      </section>
    </div>
  );
}
