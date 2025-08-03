import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light text-dark py-1"
        style={{
          background: 'linear-gradient(90deg, #d1c4e9, #b2ebf2)', // soft purple to teal-blue
        }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-0">
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-dark" to="/sample1">Sample 1</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-dark" to="/sample2">Sample 2</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-dark" to="/sample3">Sample 3</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-dark" to="/sample4">Sample 4</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
