import { Link } from 'react-router-dom';
import './Header.css';

function Header({ setActiveMenu }) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light text-dark py-1"
      style={{
        background: 'linear-gradient(90deg, #d1c4e9, #b2ebf2)',
      }}
    >
      <div className="container-fluid">
        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-0">
            <li
              className="nav-item dropdown hover-dropdown"
              onClick={() => setActiveMenu('BasicFullstack')}
            >
              <span
                className="nav-link dropdown-toggle fw-semibold text-dark link-hover"
                role="button"
              >
                Basic Fullstack
              </span>
            </li>

            <li
              className="nav-item dropdown hover-dropdown"
              onClick={() => setActiveMenu('OurProject')}
            >
              <span
                className="nav-link dropdown-toggle fw-semibold text-dark link-hover"
                role="button"
              >
                Our Project
              </span>
            </li>

            <li className="nav-item dropdown hover-dropdown">
              <span
                className="nav-link dropdown-toggle fw-semibold text-dark link-hover"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tech Stacks
              </span>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/dotnetcore">.NET Core API</Link></li>
                <li><Link className="dropdown-item" to="/springboot">Spring Boot API</Link></li>
                <li><Link className="dropdown-item" to="/node">Node API</Link></li>
                <li><Link className="dropdown-item" to="/sqlserver">SQL Server</Link></li>
                <li><Link className="dropdown-item" to="/mongodb">MongoDB</Link></li>
                <li><Link className="dropdown-item" to="/aws">AWS</Link></li>
                <li><Link className="dropdown-item" to="/azure">Azure</Link></li>
                <li><Link className="dropdown-item" to="/dsa">DSA</Link></li>
                <li><Link className="dropdown-item" to="/react">React JS</Link></li>
                <li><Link className="dropdown-item" to="/next">Next JS</Link></li>
                <li><Link className="dropdown-item" to="/kafka">Apache Kafka</Link></li>
                <li><Link className="dropdown-item" to="/rabbitmq">RabbitMQ</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
