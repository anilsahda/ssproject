import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaUser, FaSignInAlt, FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

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
            <Link to="/" className="navbar-brand fw-bold brand-text" style={{ textDecoration: "none", fontSize: "1.4rem", letterSpacing: "1px", color: "white"}}>Shiwansh Intern</Link>
          </div>
          <form className="d-flex mx-3 flex-grow-1" role="search" style={{ maxWidth: '400px' }}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </form>

          <div className="d-flex align-items-center gap-3 flex-wrap text-white">
            <div>
              <strong>Helpline:</strong> <i className="bi bi-telephone-fill me-2"></i> <a href="tel:+919990364345" className="text-white text-decoration-none">+91 99903 64345</a>
            </div>

            <div className="d-flex align-items-center gap-2">
              {!isLoggedIn ? (
                <>
                  {/* <button className="btn btn-outline-light me-2" onClick={() => setShowIntern(true)}>
                    Intern Program
                  </button> */}
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
        <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }} onClick={() => setShowLogin(false)}>
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "1000px" }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-content shadow rounded-3">
              <div className="modal-header bg-primary text-white">
                <h1 className="fw-bold display-7 text-default">🚀 Employment Program</h1><button type="button" className="btn-close" onClick={() => setShowIntern(false)}></button>
              </div>
              <div className="modal-body">
                <div className="container py-5">
                  {/* Header */}
                  <div className="text-center mb-5">
                    <div className="mt-3">
                      <span className="badge bg-primary fs-6 me-2">Fullstack Engineer</span>
                      <span className="badge bg-primary fs-6 me-2">DevOps Engineer</span>
                      <span className="badge bg-primary fs-6">AI-ML Engineer</span>
                    </div>
<p className="text-muted mt-4 fs-5">
  A career-focused program to make you <strong>industry-ready</strong> with hands-on experience and guided by experts to secure your dream job in <strong>Fullstack, DevOps & Cloud Engineering</strong>.
</p>
                  </div>

                  {/* Info Section */}
                  <div className="row justify-content-center mb-5">
                    <div className="col-md-10">
                      <div className="card shadow-lg border-0 p-4">
                        <h4 className="fw-bold">📌 Program Information</h4>
                        <p className="mt-3 text-muted fs-6">
                          This intern is a <strong>career accelerator</strong> where you will work on real-world projects, receive professional mentorship and be guided through guaranteed opportunities in Fullstack Engineering roles.
                        </p>
                        <ul className="list-group list-group-flush mt-3">
                          <li className="list-group-item">
                            <strong>🕒 Duration:</strong> Maximum 6 Months
                          </li>
                          <li className="list-group-item">
                            <strong>💻 Mode:</strong> Remote | Hybrid | Office
                          </li>
                          <li className="list-group-item">
                            <strong>📅 Working Days:</strong> Monday – Friday
                          </li>
                          <li className="list-group-item">
                            <strong>⏰ Working Hours:</strong> 10:00 AM – 6:00 PM
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Benefits Section */}
                  <div className="row mb-5">
                    <div className="col-md-12 text-center mb-4">
                      <h2 className="fw-bold">✨ Why Join This Program?</h2>
                      <p className="text-muted fs-6">
                        We prepare you to become a <strong>skilled professional</strong> ready to excel in the tech industry.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <div className="card shadow-sm h-100 p-3 border-0">
                        <h5>💻 Real-World Projects</h5>
                        <p className="text-muted">
                          Gain experience by working on enterprise-level applications that involve backend APIs, frontend dashboards, database design and cloud deployments.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card shadow-sm h-100 p-3 border-0">
                        <h5>🧑‍🏫 Expert Mentorship</h5>
                        <p className="text-muted">
                          Learn from experienced engineers through 1:1 guidance, code reviews, technical sessions and industry best practices.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card shadow-sm h-100 p-3 border-0">
                        <h5>🎯 Career Support</h5>
                        <p className="text-muted">
                          Get assistance with resume building, mock interviews and direct referrals to employers to land your first tech role.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Plans Section */}
                  <div className="text-center mb-4">
                    <h2 className="fw-bold">💡 Employment Options & Costs</h2>
                    <p className="text-muted fs-6">
                      Choose the track that fits your goals. Every option is designed to <strong>accelerate your career in 6 months</strong>.
                    </p>
                  </div>

                  <div className="row g-4">
                    {/* Plan 1 */}
                    <div className="col-md-4">
                      <div className="card h-100 text-center shadow-lg border-0">
                        <div className="card-body">
                          <h5 className="card-title fw-bold">Full-Time Employment Guarantee</h5>
                          <span className="badge bg-success mb-2">100% Guaranteed</span>
                          <p className="card-text fw-bold text-primary fs-5">Intern Cost: ₹10,000 / month</p>
                          <ul className="list-unstyled text-muted">
                            <li>✅ Full-Time Employment within 6 Months</li>
                            <li>✅ Hands-on projects with deadlines</li>
                            <li>✅ Advanced interview preparation</li>
                          </ul>
                          <button className="btn btn-primary mt-3">Choose Full-Time</button>
                        </div>
                      </div>
                    </div>

                    {/* Plan 2 */}
                    <div className="col-md-4">
                      <div className="card h-100 text-center shadow-lg border-0">
                        <div className="card-body">
                          <h5 className="card-title fw-bold">Part-Time Employment Guarantee</h5>
                          <span className="badge bg-success mb-2">100% Guaranteed</span>
                          <p className="card-text fw-bold text-primary fs-5">
                            Intern Cost: ₹5,000 / month
                          </p>
                          <ul className="list-unstyled text-muted">
                            <li>✅ Part-Time Employment within 6 Months</li>
                            <li>✅ Flexible schedule with guided learning</li>
                            <li>✅ Industry-relevant portfolio projects</li>
                          </ul>
                          <button className="btn btn-primary mt-3">Choose Part-Time</button>
                        </div>
                      </div>
                    </div>

                    {/* Plan 3 */}
                    <div className="col-md-4">
                      <div className="card h-100 text-center shadow-lg border-0">
                        <div className="card-body">
                          <h5 className="card-title fw-bold">Job Assistance <br/>Program</h5>
                          <span className="badge bg-warning mb-2">100% Assistance</span>
                          <p className="card-text fw-bold text-primary fs-5">
                            Intern Cost: ₹10,000 <br/>for 6 Months
                          </p>
                          <ul className="list-unstyled text-muted">
                            <li>✅ Resume & LinkedIn optimization</li>
                            <li>✅ Mock interviews <br/> coding challenges</li>
                            <li>✅ Job referrals <br/> hiring support</li>
                          </ul>
                          <button className="btn btn-warning mt-3">Choose Assistance</button>
                        </div>
                      </div>
                    </div>
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
