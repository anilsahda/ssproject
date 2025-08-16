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
npm i
npm run dev
npm install axios
npm i react-router-dom
npm i bootstrap
npm i bootstrap-icons
npm i lucide-react
npm i react-bootstrap
npm i react-icons
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
        <b>🔹 Home.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`function Home() {
  return (
    <main>
      <h1>Welcome to Home Page</h1>
    </main>
  );
}

export default Home`}
          </code>
        </pre>

        <b>🔹 About.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`function About() {
  return (
    <>
      <b>About Page</b>
      <p>This is the about page of the static website.</p>
    </>
  );
}

export default About`}
          </code>
        </pre>

        <b>🧩 Header.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header`}
          </code>
        </pre>

        <b>🧩 Footer.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} My Static Site</p>
    </footer>
  );
}

export default Footer`}
          </code>
        </pre>

        <b>🧩 Layout.tsx</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';

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

        <b>🔹 App.tsx</b>
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

        <b>🔹 main.tsx</b>
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
