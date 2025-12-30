import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaUser, FaSignInAlt, FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import '../hiring.css';

function SuperHeader() {
  const [showIntern, setShowIntern] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntern(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/Auth/login`, { email, password });

      if (response.data.statusCode === "200") {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("userName", response.data.userName);
        localStorage.setItem("userImageUrl", response.data.userImageUrl || "https://i.pravatar.cc/40");

        setShowLogin(false);
        setEmail('');
        setPassword('');
        setIsLoggedIn(true);
        navigate("/dashboard");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userName");
    localStorage.removeItem("userImageUrl");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary bg-gradient text-white py-2 px-3">
        <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">
          <div className="d-flex align-items-center">
            <Link to="/" className="navbar-brand fw-bold brand-text" style={{ textDecoration: "none", fontSize: "1.4rem", letterSpacing: "1px", color: "white"}}>Shiwansh Solutions</Link>
          </div>
          <form className="d-flex mx-3 flex-grow-1" role="search" style={{ maxWidth: '250px' }}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </form>

          <div className="d-flex align-items-center gap-3 flex-wrap text-white">
            <div>
              <strong>Helpline:</strong> <i className="bi bi-telephone-fill me-2"></i> <a href="tel:+919990364345" className="text-white text-decoration-none">99903 64345</a>
            </div>

            <div className="d-flex align-items-center gap-2">
              {!isLoggedIn ? (
                <>
                  <button className="btn btn-outline-light me-2" onClick={() => setShowIntern(true)}>
                    Job Oriented Program
                  </button>
                  <button className="btn btn-outline-light me-2" onClick={() => setShowSignup(true)}>
                    <FaUser className="me-1" />
                  </button>
                  <button className="btn btn-outline-light" onClick={() => setShowLogin(true)}>
                    <FaSignInAlt className="me-1" />
                  </button>
                </>
              ) : (
                <div className="dropdown">
                <img
                    src={localStorage.getItem("userImageUrl") || "https://i.pravatar.cc/40"}
                    alt="Profile"
                    className="rounded-circle dropdown-toggle border border-light"
                    data-bs-toggle="dropdown"
                    style={{
                    width: "42px",
                    height: "42px",
                    cursor: "pointer",
                    boxShadow: "0 0 5px rgba(255,255,255,0.6)"
                    }}
                />
                <ul
                    className="dropdown-menu dropdown-menu-end mt-2 shadow"
                    style={{
                    minWidth: "200px",
                    background: "linear-gradient(to bottom, #ffffff, #e3f2fd)",
                    borderRadius: "10px",
                    border: "1px solid #bbdefb"
                    }}
                >
                    <li>
                    <Link className="dropdown-item d-flex align-items-center gap-2" to="/profile">
                        <FaUser className="text-primary" />
                        <span>Edit Profile</span>
                    </Link>
                    </li>
                    <li>
                    <button className="dropdown-item d-flex align-items-center gap-2 text-danger" onClick={handleLogout}>
                        <FaSignInAlt />
                        <span>Logout</span>
                    </button>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li className="dropdown-item text-center text-dark" style={{ fontSize: "0.9rem" }}>
                    <div style={{ lineHeight: "1.2" }}>
                        <span className="text-muted">Logged in as</span><br />
                        <strong>{localStorage.getItem("userName")}</strong>
                    </div>
                    </li>
                </ul>
                </div>

              )}
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
                <form onSubmit={handleLoginSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
                  <div className="d-flex justify-content-center gap-2">
                    <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => { window.location.href = "https://localhost:7070/api/Auth/google-login" }}><FaGoogle /></button>
                    <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => { window.location.href = "https://localhost:7070/api/Auth/google-login" }}><FaFacebookF /></button>
                    <button type="button" className="btn btn-outline-info btn-sm"><FaTwitter /></button>
                  </div>
                  <p className="text-center mt-3 mb-0">
                    No account?{" "}
                    <button type="button" className="btn btn-link p-0" onClick={() => { setShowLogin(false); setShowSignup(true); }}>Sign Up</button>
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
                    <button type="button" className="btn btn-outline-danger btn-sm"><FaGoogle /></button>
                    <button type="button" className="btn btn-outline-primary btn-sm"><FaFacebookF /></button>
                    <button type="button" className="btn btn-outline-info btn-sm"><FaTwitter /></button>
                  </div>
                  <p className="text-center mt-3 mb-0">
                    Already have an account?{" "}
                    <button type="button" className="btn btn-link p-0" onClick={() => { setShowSignup(false); setShowLogin(true); }}>Sign in</button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
 {showIntern && (
        <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }} onClick={() => setShowIntern(false)}>
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "1000px" }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-content shadow rounded-3">
              <div className="modal-body">
                <div className="container">
                <header className="header">
                    <h1>🚀 Hiring: Junior Software Engineers</h1>
                    <p style={{ textAlign: 'center' }}>Join our 6-Month's Probation Program and work on Live Projects</p>
                  </header>

                  <div className="container">
                    <section>
                      <h2>📍 Locations</h2>
                      <p style={{ textAlign: 'center' }}><strong>Mohali</strong> & <strong>Dehradun</strong> (based on client/project requirements)</p>
                      <p style={{ textAlign: 'center' }}><em>Note: Candidates may be relocated between branches during probation as per project needs.</em></p>
                    </section>

                    <section>
                      <h2>💼 Role & Designation</h2>
                      <p style={{ textAlign: 'center' }}><strong>Junior Software Engineer</strong> (Probation)</p>
                    </section>

                    <section>
                      <h2>💸 Salary Structure</h2>
                      <p style={{ textAlign: 'center' }}><strong>During Probation Period :</strong> ₹2,000 - 8,000 for right candidates</p>
                      <p style={{ textAlign: 'center' }}><strong>Post - Probation Salary :</strong> ₹12,000</p>
                      <p style={{ textAlign: 'center' }}>(Shiwansh Solutions <b>OR</b> Other Companies on the basis of Shiwansh Solutions)</p>                      
                    </section>

                    <section>
                      <h2>📝 Appointment Process</h2>
                      <p style={{ textAlign: 'center' }}>Appointment letter will be issued once candidates confirm their joining date & complete 1-week assessment test.</p>
                    </section>

                    <section>
                      <h2>📊 Mode Comparison</h2>
                      <table>
                        <thead>
                          <tr>
                            <th>Mode</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Benefits & Facilities</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>🏢 Work From Office</td>
                            <td>💼 Junior Software Engineer<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Probation)</td>
                            <td>💰 ₹2,000 – ₹8,000</td>
                            <td>
                              ✅ Appointment Letter<br />
                              ✅ Salary Account<br />
                              ✅ Salary Certificate<br />
                              ✅ Experience Letter<br />
                              ✅ Relieving Letter
                            </td>
                          </tr>
                          <tr>
                            <td>🏢 Work From Office</td>
                            <td>💼 Junior Software Engineer<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Confirmed)</td>
                            <td>💰 ₹12,000</td>
                            <td>
                              ✅ Appointment Letter<br />
                              ✅ Salary Account<br />
                              ✅ Salary Certificate<br />
                              ✅ Experience Letter<br />
                              ✅ Relieving Letter
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </section>
                    <section>
                      <h2>📩 Ready to Launch Your Career?</h2>
                      <p style={{ textAlign: 'center' }}>Apply now and become a part of a team that values <strong>learning</strong>, <strong>growth</strong> and <strong>real impact</strong>.</p>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default SuperHeader;
