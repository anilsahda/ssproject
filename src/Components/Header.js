import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaUser, FaSignInAlt, FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'linear-gradient(90deg, #343a40, #212529)' }}>
        <div className="container-fluid"><i className="bi bi-grid-fill me-2"></i>
          <Link className="navbar-brand fw-bold" to="/">SS Docs</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/sample1">Sample 1</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sample2">Sample 2</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sample3">Sample 3</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sample4">Sample 4</Link>
              </li>  
              <li className="nav-item">
                <Link className="nav-link" to="/studentmanage">Student</Link>
              </li>  
               <li className="nav-item">
                <Link className="nav-link" to="/inquiry">Inquiry</Link>
              </li>            
            </ul>
            <div className="d-flex">
              <button className="btn btn-outline-light me-2" onClick={() => setShowSignup(true)}>
                <FaUser className="me-1" /> Sign Up
              </button>
              <button className="btn btn-success" onClick={() => setShowLogin(true)}>
                <FaSignInAlt className="me-1" /> Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }} onClick={() => setShowLogin(false)}>
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "400px" }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-content shadow rounded-3">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">Login</h5>
                <button type="button" className="btn-close" onClick={() => setShowLogin(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
                  <div className="d-flex justify-content-center gap-2">
                    <button className="btn btn-outline-danger btn-sm">
                      <FaGoogle />
                    </button>
                    <button className="btn btn-outline-primary btn-sm">
                      <FaFacebookF />
                    </button>
                    <button className="btn btn-outline-info btn-sm">
                      <FaTwitter />
                    </button>
                  </div>
                  <p className="text-center mt-3 mb-0">
                    No account?{" "}
                    <button className="btn btn-link p-0" onClick={() => { setShowLogin(false); setShowSignup(true); }}>Sign Up</button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }} onClick={() => setShowSignup(false)}>
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "400px" }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-content shadow rounded-3">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">Sign Up</h5>
                <button type="button" className="btn-close" onClick={() => setShowSignup(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="name@example.com" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="Choose a password" />
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mb-3">Create Account</button>
                  <div className="d-flex justify-content-center gap-2">
                    <button className="btn btn-outline-danger btn-sm">
                      <FaGoogle />
                    </button>
                    <button className="btn btn-outline-primary btn-sm">
                      <FaFacebookF />
                    </button>
                    <button className="btn btn-outline-info btn-sm">
                      <FaTwitter />
                    </button>
                  </div>
                  <p className="text-center mt-3 mb-0">
                    Already have an account?{" "}
                    <button className="btn btn-link p-0" onClick={() => { setShowSignup(false); setShowLogin(true); }}>Sign in</button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
