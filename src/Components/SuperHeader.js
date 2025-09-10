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
        <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }} onClick={() => setShowLogin(false)}>
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "1000px" }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-content shadow rounded-3">
              <div className="modal-header bg-primary text-white">
                <h3 className="fw-bold display-7 w-100 text-center m-0">🚀 2 - 4 Months Job-Oriented Program</h3>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowIntern(false)}></button>
              </div>
              <div className="modal-body">
                <div className="container">
                  {/* Header */}
                  <div className="text-center">
                    <div className="mt-3">
                      <span className="badge bg-primary fs-6 me-2">Fullstack Engineer</span>
                      <span className="badge bg-primary fs-6 me-2">DevOps Engineer</span>
                      <span className="badge bg-primary fs-6">AI-ML Engineer</span>
                    </div>
                  <p className="text-muted mt-4">
                    A career-focused program to make you <strong>industry-ready</strong> with hands-on experience in <strong>Fullstack, DevOps & Cloud Engineering</strong>.
                  </p>
                </div>
                  <div className="container">
                         <hr className="w-25 mx-auto my-4 border-2 border-primary" />
                        <div className="row justify-content-center mb-5">
                          <div className="col-md-10">
                            <div className="card shadow-lg border-0 p-4 rounded-4">
                              <h4 className="fw-bold mb-3 text-primary">💡 What You'll Learn</h4>
                              <ul className="list-group list-group-flush fs-6">
                                <li className="list-group-item py-3">
                                  🔧 <strong>Back-End Development :</strong> MERNStack | .NET Core | Spring Boot | Python
                                </li>
                                <li className="list-group-item py-3">
                                  🧠 <strong>Object-Oriented Programming : </strong>Classes, Inheritance, Polymorphism, Encapsulation
                                </li>
                                <li className="list-group-item py-3">
                                  🗃️ <strong>Databases</strong> SQL Server, MySQL, PostgreSQL, MongoDB, DynamoDB
                                </li>
                                <li className="list-group-item py-3">
                                  ☁️ <strong>Cloud Fundamentals : </strong>Hands-on with AWS / Azure / GCP + Project Deployment
                                </li>
                                <li className="list-group-item py-3">
                                  🛠️ <strong>Live Industry Projects : </strong>Real-time projects | Git/GitHub | Agile Collaboration
                                </li>
                                <li className="list-group-item py-3">
                                  📁 <strong>Professional Portfolio :</strong> Resume, GitHub, LinkedIn, Project Demos + Portfolio Website
                                </li>
                                <li className="list-group-item py-3">
                                  🎤 <strong>Mock Interviews & Career Guidance</strong>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Why Join */}
                        <div className="row mb-5">
                          <div className="col-md-12 text-center mb-4">
                            <h2 className="fw-bold text-primary">✨ Why Join This Programs?</h2>
                            <p className="text-muted fs-6 text-center">
                              A program crafted to transform <strong>freshers</strong> into <strong>job-ready professionals</strong> with hands-on skills.
                            </p>
                          </div>

                          {[
                            {
                              title: "💻 Live Projects",
                              desc: "Hands-on coding, project deployment, microservices and real-world design patterns.",
                            },
                            {
                              title: "🧑‍🏫 Mentorship",
                              desc: "Direct guidance from our software engineers, professionals and code reviews.",
                            },
                            {
                              title: "🎯 Career Launch",
                              desc: "Resume building, mock interviews and direct job opportunities to right candidates.",
                            },
                          ].map((item, index) => (
                            <div className="col-md-4" key={index}>
                              <div className="card shadow-sm h-100 p-4 border-0 rounded-4 hover-shadow">
                                <h5 className="fw-bold">{item.title}</h5>
                                <p className="text-muted">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                          {/* Program Info */}
                          <div className="row justify-content-center">
                            <div className="col-md-8">
                              <div className="card shadow-lg border-0 p-4 rounded-4 text-center bg-light">
                                <h4 className="fw-bold mb-3 text-primary">📌 Program Details</h4>
                                <ul className="list-group list-group-flush fs-6">
                                  <li className="list-group-item py-3">
                                    🕒 <strong>Duration:</strong> 2 - 4 Months
                                  </li>
                                  <li className="list-group-item py-3">
                                    💻 <strong>Mode:</strong> Remote | Hybrid | Office
                                  </li>
                                  <li className="list-group-item py-3">
                                    📅 <strong>Schedule:</strong> Monday – Friday
                                  </li>
                                  <li className="list-group-item py-3">
                                    ⏰ <strong>Timings:</strong> 10:00 AM – 6:00 PM
                                  </li>
                                </ul>
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
