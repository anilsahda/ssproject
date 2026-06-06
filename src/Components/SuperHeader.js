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
  }, 5000);

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
            <Link to="/" className="navbar-brand fw-bold brand-text" style={{ textDecoration: "none", fontSize: "1.4rem", letterSpacing: "1px", color: "white"}}>SS INTERNS</Link>
          </div>
          <form className="d-flex mx-3 flex-grow-1" role="search" style={{ maxWidth: '250px' }}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </form>

          <div className="d-flex align-items-center gap-3 flex-wrap text-white">
            <div>
              <strong>Helpline:</strong> <i className="bi bi-telephone-fill me-2"></i> <a href="tel:+919534098040" className="text-white text-decoration-none">95340 98040</a>
            </div>

            <div className="d-flex align-items-center gap-2">
              {!isLoggedIn ? (
                <>
                  <button className="btn btn-warning fw-bold px-3" onClick={() => setShowIntern(true)}>🚀 Full-Stack Program</button>
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
{/* Training Program Modal */}
{showIntern && (
  <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.75)" }} onClick={() => setShowIntern(false)}>
    <div className="modal-dialog modal-dialog-centered modal-xl" onClick={(e) => e.stopPropagation()}>
      <div className="modal-content border-0 shadow-lg" style={{ borderRadius: "20px", overflow: "hidden" }}>
        {/* Header */}
        <div className="text-white p-5" style={{ background: "linear-gradient(135deg, #0d6efd 0%, #6610f2 100%)"}}>
          <h1 className="fw-bold mb-3">🚀 Full-Stack Development Program</h1>
          <h5 className="mb-0">Build Your Career in Modern Web Development & Cloud Technologies</h5>
        </div>

        <div className="modal-body p-4">
          <div className="row g-4">

            {/* Program Details */}
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h4 className="text-primary mb-3">📅 Program Details</h4>
                  <p><strong>Duration:</strong> 3 - 6 Months</p>
                  <p><strong>Work Mode:</strong> Work From Office</p>
                  <p><strong>Office Hours:</strong> 9:00 AM – 6:00 PM</p>
                  <p><strong>Locations:</strong> Hyderabad, Mohali & Dehradun</p>
                  <p><strong>Stipend:</strong> 4k - 10k</p>
                  <p><strong>Placement:</strong> Direct join after completion the internship</p>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h4 className="text-success mb-3">💻 Technologies Covered</h4>
                  <div className="mb-3">
                    <h6>Back-End</h6>
                    <span className="badge bg-primary me-2">.NET Core</span>
                    <span className="badge bg-primary me-2">Node.js</span>
                    <span className="badge bg-primary me-2">SpringBoot</span>
                    <span className="badge bg-primary">AI-ML</span>
                  </div>

                  <div className="mb-3">
                    <h6>Front-End</h6>
                    <span className="badge bg-success me-2">React.js</span>
                    <span className="badge bg-success me-2">Next.js</span>
                    <span className="badge bg-success me-2">Vue.js</span>                    
                    <span className="badge bg-success">Angular.js</span>
                  </div>

                  <div className="mb-3">
                    <h6>Database</h6>
                    <span className="badge bg-dark text-white me-2">SQL Server</span>
                    <span className="badge bg-dark text-white me-2">PostgreSQL</span>
                    <span className="badge bg-dark text-white me-2">MongoDB</span>
                    <span className="badge bg-dark text-white me-2">MySQL</span>
                    <span className="badge bg-dark text-white">SQLite</span>
                  </div>

                  <div>
                    <h6>AWS Cloud</h6>
                    <span className="badge bg-warning text-dark me-2">S3</span>
                    <span className="badge bg-warning text-dark me-2">DynamoDB</span>
                    <span className="badge bg-warning text-dark me-2">IAM</span>
                    <span className="badge bg-warning text-dark me-2">EC2</span>
                    <span className="badge bg-warning text-dark">Lambda Function</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="col-12">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <h4 className="text-danger mb-3">⭐ Program Benefits</h4>
                  <div className="row">
                    <div className="col-md-2"><span className="badge bg-primary me-2"> AWS</span></div>
                    <div className="col-md-2">✅ AWS S3</div>
                    <div className="col-md-2">✅ CloudFront</div>
                    <div className="col-md-2">✅ Route 53</div>
                    <div className="col-md-2">✅ EC2</div>
                    <div className="col-md-2">✅ RDS</div>
                  </div>
                  <div className="row">
                    <div className="col-md-2"><span className="badge bg-primary me-2">Database</span></div>
                    <div className="col-md-2">✅ PostgreSQL</div>
                    <div className="col-md-2">✅ MongoDB</div>
                    <div className="col-md-2">✅ SQL Server</div>
                    <div className="col-md-2">✅ MySQL</div>
                    <div className="col-md-2">✅ DynamoDB</div>
                  </div>
                  <div className="row">
                    <div className="col-md-2"><span className="badge bg-primary me-2">Front-End</span></div>
                    <div className="col-md-2">✅ Bootstrap</div>
                    <div className="col-md-2">✅ React.js</div>
                    <div className="col-md-2">✅ Next.js</div>
                    <div className="col-md-2">✅ Zustand</div>
                    <div className="col-md-2">✅ Redux</div>
                  </div>
                  <div className="row">
                    <div className="col-md-2"><span className="badge bg-primary me-2">Back-End</span></div>
                    <div className="col-md-2">✅ Onion Arch</div>
                    <div className="col-md-2">✅ CQRS</div>
                    <div className="col-md-2">✅ Microservices</div>
                    <div className="col-md-2">✅ Docker</div>
                    <div className="col-md-2">✅ SaaS based App</div>
                  </div>    
                  <div className="row">
                    <div className="col-md-2">
                      <span className="badge bg-primary me-2">AI / ML</span>
                    </div>
                    <div className="col-md-2">✅ Python</div>
                    <div className="col-md-2">✅ TensorFlow</div>
                    <div className="col-md-2">✅ PyTorch</div>
                    <div className="col-md-2">✅ NLP</div>
                    <div className="col-md-2">✅ SageMaker / Bedrock</div>
                  </div>                                
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="col-12">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <h4 className="text-primary mb-4">🎯 Career Opportunities After Completion</h4>
                  <div className="table-responsive">
                    <table className="table table-bordered align-middle">
                      <thead className="table-primary">
                        <tr>
                          <th>Opportunity</th>
                          <th>Company</th>
                          <th>Role</th>
                          <th>Monthly Salary</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Direct Opportunity</td>
                          <td>CWS | DevB Infotech |Shiwansh Solutions</td>
                          <td>.NET Developer</td>
                          <td>Based on your skills and performance</td>
                        </tr>

                        <tr>
                          <td>Direct Opportunity</td>
                          <td>CWS | DevB Infotech |Shiwansh Solutions</td>
                          <td>Java Developer</td>
                          <td>Based on your skills and performance</td>
                        </tr>

                        <tr>
                          <td>Direct Opportunity</td>
                            <td>Shiwansh Solutions</td>
                          <td>DevOps Engineer</td>
                          <td>Based on your skills and performance</td>
                        </tr>
                        <tr>
                          <td>Direct Opportunity</td>
                          <td>CWS | DevB Infotech |Shiwansh Solutions</td>
                          <td>AI-ML Engineer</td>
                          <td>Based on your skills and performance</td>
                        </tr>
                        <tr>
                          <td>Direct Opportunity</td>
                          <td>CWS | DevB Infotech |Shiwansh Solutions</td>
                          <td>MERN Stack Developer</td>
                          <td>Based on your skills and performance</td>
                        </tr>
                      </tbody>
                    </table>
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
