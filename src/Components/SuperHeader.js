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
    <><nav className="navbar navbar-expand-lg custom-navbar shadow-sm">

    <div className="container-fluid">

        {/* Logo */}

        <Link to="/" className="navbar-brand brand-logo">

            <span className="brand-icon">SS</span>

            <div className="brand-content">
                <span className="brand-title">SS INTERNS</span>
            </div>

        </Link>

        {/* Search */}

        <div className="search-box mx-lg-4">

            <i className="bi bi-search"></i>

            <input
                type="search"
                placeholder="Search courses..."
                className="form-control"
            />

        </div>

        {/* Right Side */}

        <div className="d-flex align-items-center gap-3">

            <div className="helpline">

                <i className="bi bi-headset"></i>

                <div>
                    <a href="tel:+919534098040">
                        95340 98040
                    </a>
                </div>

            </div>

            {!isLoggedIn ? (

                <>

                    <button
                        className="btn btn-program"
                        onClick={() => setShowIntern(true)}
                    >
                        🚀 Full-Stack Program
                    </button>

                    <button
                        className="icon-btn"
                        onClick={() => setShowSignup(true)}
                    >
                        <FaUser />
                    </button>

                    <button
                        className="icon-btn"
                        onClick={() => setShowLogin(true)}
                    >
                        <FaSignInAlt />
                    </button>

                </>

            ) : (

                <div className="dropdown">

                    <img
                        src={localStorage.getItem("userImageUrl") || "https://i.pravatar.cc/100"}
                        alt=""
                        className="profile-image dropdown-toggle"
                        data-bs-toggle="dropdown"
                    />

                    <ul className="dropdown-menu dropdown-menu-end shadow-lg">

                        <li>

                            <Link className="dropdown-item" to="/profile">

                                <FaUser className="me-2 text-primary" />

                                Edit Profile

                            </Link>

                        </li>

                        <li>

                            <button
                                className="dropdown-item text-danger"
                                onClick={handleLogout}
                            >

                                <FaSignInAlt className="me-2" />

                                Logout

                            </button>

                        </li>

                        <li>
                            <hr className="dropdown-divider"/>
                        </li>

                        <li className="text-center py-2">

                            <small className="text-muted">
                                Logged in as
                            </small>

                            <div className="fw-bold">
                                {localStorage.getItem("userName")}
                            </div>

                        </li>

                    </ul>

                </div>

            )}

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
        <div className="text-white p-5" style={{ background: "linear-gradient(135deg, #0d6efd 0%, #6610f2 100%)"}}>
          <h1 className="fw-bold mb-3 text-center">🚀 AI-ML and Full-Stack Engineers Program</h1>
          <h5 className="mb-0 text-center">Build Your Career in AI-ML, Cloud, DevOps and Full-Stack Web Development</h5>
        </div>

        <div className="modal-body p-4">
          <div className="row g-4">

            {/* Program Details */}
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h4 className="text-primary mb-3">📅 Program Details</h4>
                  <p><strong>Duration:</strong> 1 - 6 Months</p>
                  <p><strong>Work Mode:</strong> Work From Office / Remote</p>
                  <p><strong>Office Hours:</strong> 9:00 AM – 6:00 PM</p>
                  <p><strong>Locations:</strong> Hyderabad, Mohali & Dehradun</p>
                  <p><strong>Holidays:</strong> Saturday & Sunday fixed off</p>
                  <p><strong>Mentorship:</strong> From experienced Architect & Senior Engineers</p>
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
                    <span className="badge bg-primary me-2">AI-ML</span>
                    <span className="badge bg-primary me-2">.NET Core</span>
                    <span className="badge bg-primary me-2">SpringBoot</span>
                    <span className="badge bg-primary me-2">Node</span>
                  </div>

                  <div className="mb-3">
                    <h6>Front-End</h6>
                    <span className="badge bg-success me-2">React.js</span>
                    <span className="badge bg-success me-2">Bootstrap</span>
                    <span className="badge bg-success me-2">Redux</span>
                    <span className="badge bg-success me-2">Zustand</span>
                    <span className="badge bg-success me-2">Next.js</span>
                  </div>

                  <div className="mb-3">
                    <h6>Database</h6>
                    <span className="badge bg-dark text-white me-2">SQL Server</span>
                    <span className="badge bg-dark text-white me-2">PostgreSQL</span>
                    <span className="badge bg-dark text-white me-2">MySQL</span>
                    <span className="badge bg-dark text-white me-2">MongoDB</span>
                    <span className="badge bg-dark text-white me-2">Vector DB</span>
                  </div>

                  <div>
                    <h6>AWS Cloud</h6>
                    <span className="badge bg-warning text-dark me-2">S3</span>
                    <span className="badge bg-warning text-dark me-2">RDS</span>
                    <span className="badge bg-warning text-dark me-2">IAM</span>
                    <span className="badge bg-warning text-dark me-2">EC2</span>
                    <span className="badge bg-warning text-dark me-2">Lambda</span>
                    <span className="badge bg-warning text-dark me-2">Dynamo DB</span>
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
                    <div className="col-md-1"><span className="badge bg-primary me-2">AI / ML</span></div>
                    <div className="col-md-1">✅ RAG</div>
                    <div className="col-md-2">✅ APIs & Pandas</div>
                    <div className="col-md-2">✅ LangGraph</div>
                    <div className="col-md-2">✅ Gen AI</div>
                    <div className="col-md-2">✅ Agentic AI</div>
                    <div className="col-md-2">✅ MLOPs</div>
                  </div>
                  <div className="row">
                    <div className="col-md-1"><span className="badge bg-primary me-2">Back-End</span></div>
                    <div className="col-md-1">✅ ORM</div>
                    <div className="col-md-2">✅ Onion Arch</div>
                    <div className="col-md-2">✅ Microservice</div>
                    <div className="col-md-2">✅ CQRS</div>
                    <div className="col-md-2">✅ Cloud</div>
                    <div className="col-md-2">✅ CI/CD Pipeline</div>
                  </div>
                  <div className="row">
                    <div className="col-md-1"><span className="badge bg-primary me-2">Database</span></div>
                    <div className="col-md-1">✅ SQL</div>
                    <div className="col-md-2">✅ PostgreSQL</div>
                    <div className="col-md-2">✅ MongoDB</div>
                    <div className="col-md-2">✅ MySQL</div>
                    <div className="col-md-2">✅ DynamoDB</div>
                    <div className="col-md-2">✅ VectorDB</div>
                  </div>
                  <div className="row">
                    <div className="col-md-1"><span className="badge bg-primary me-2">Front-End</span></div>
                    <div className="col-md-1">✅ React</div>
                    <div className="col-md-2">✅ Bootstrap</div>
                    <div className="col-md-2">✅ Intercepter</div>
                    <div className="col-md-2">✅ Redux</div>
                    <div className="col-md-2">✅ Zustand</div>
                    <div className="col-md-2">✅ CI/CD Pipeline</div>
                  </div>
                  <div className="row">
                    <div className="col-md-1"><span className="badge bg-primary me-2"> AWS</span></div>
                    <div className="col-md-1">✅ IAM</div>                    
                    <div className="col-md-2">✅ AWS S3</div>
                    <div className="col-md-2">✅ CloudFront</div>
                    <div className="col-md-2">✅ RDS</div>
                    <div className="col-md-2">✅ EC2</div>
                    <div className="col-md-2">✅ Route 53</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance-Based Opportunities */}
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h4 className="text-success mb-3">🚀 Performance-Based Opportunities</h4>
                  <p className="mb-0">
                    High-performing interners may be offered a <strong>full-time position</strong> with our associated company based on their performance and business requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Career Opportunities
            <div className="col-12">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <h4 className="text-primary mb-4">🎯 Career Opportunities After Completion</h4>
                  <div className="table-responsive">
                    <table className="table table-bordered align-middle">
                      <thead className="table-primary">
                        <tr>
                          <th>Opportunity</th>
                          <th>Associated Company</th>
                          <th>Role</th>
                          <th>Monthly Salary</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Direct Opportunity</td>
                          <td>CWS | DevB Infotech | Shiwansh Solutions</td>
                          <td>.NET Developer</td>
                          <td>Based on your skills and performance</td>
                        </tr>

                        <tr>
                          <td>Direct Opportunity</td>
                          <td>CWS | DevB Infotech | Shiwansh Solutions</td>
                          <td>Java Developer</td>
                          <td>Based on your skills and performance</td>
                        </tr>

                        <tr>
                          <td>Direct Opportunity</td>
                           <td>CWS | DevB Infotech | Shiwansh Solutions</td>
                          <td>DevOps Engineer</td>
                          <td>Based on your skills and performance</td>
                        </tr>
                        <tr>
                          <td>Direct Opportunity</td>
                          <td>CWS | DevB Infotech | Shiwansh Solutions</td>
                          <td>AI-ML Engineer</td>
                          <td>Based on your skills and performance</td>
                        </tr>
                        <tr>
                          <td>Direct Opportunity</td>
                          <td>CWS | DevB Infotech | Shiwansh Solutions</td>
                          <td>MERN Stack Developer</td>
                          <td>Based on your skills and performance</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div> */}


            {/* Accommodation & Facilities */}
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">

                  <h3 className="text-primary fw-bold mb-4">
                    🏠 Accommodation & Facilities in Multiple Cities
                  </h3>

                  <div className="alert alert-info border-0 shadow-sm">
                    <h5 className="fw-bold mb-2">✨ Comfortable, secure and affordable accommodation for Relocating Interners</h5>
                    <p className="mb-0">
                      We provide safe, comfortable, and affordable accommodation near our development centers in Dehradun, Chandigarh Tricity and Hyderabad, so you can focus on learning new skills and working on real-world projects without worrying about accommodation. During your internship, you'll also get the chance to experience different cities, explore new cultures, meet talented people, and gain valuable industry experience, making your internship an enjoyable and memorable journey.
                    </p><br />
                    <div className="row g-4">

                      {/* Locations */}
                      <div className="col-lg-4">
                        <div className="card feature-card border-0 shadow-sm h-100 rounded-4">
                          <div className="card-body p-4">

                            <div className="feature-icon bg-primary-subtle text-primary mb-4">
                              <i className="bi bi-geo-alt-fill"></i>
                            </div>

                            <h5 className="fw-bold mb-4">
                              Available Locations
                            </h5>

                            <ul className="list-unstyled mb-0">

                              <li className="mb-3 d-flex justify-content-between">
                                <span>📍 Mohali</span>
                                <span className="badge bg-success">Available</span>
                              </li>

                              <li className="mb-3 d-flex justify-content-between">
                                <span>📍 Dehradun</span>
                                <span className="badge bg-success">Available</span>
                              </li>

                              <li className="mb-3 d-flex justify-content-between">
                                <span>📍 Hyderabad</span>
                                <span className="badge bg-success">Available</span>
                              </li>

                              <li className="mb-3 d-flex justify-content-between">
                                <span>📍 Delhi</span>
                                <span className="badge bg-warning text-dark">
                                  Nov 2026
                                </span>
                              </li>

                              <li className="mb-3 d-flex justify-content-between">
                                <span>📍 Jaipur</span>
                                <span className="badge bg-warning text-dark">
                                  Dec 2026
                                </span>
                              </li>

                              <li className="d-flex justify-content-between">
                                <span>📍 Bangalore</span>
                                <span className="badge bg-warning text-dark">
                                  Jan 2027
                                </span>
                              </li>

                            </ul>

                          </div>
                        </div>
                      </div>

                      {/* Facilities */}
                      <div className="col-lg-4">
                        <div className="card feature-card border-0 shadow-sm h-100 rounded-4">
                          <div className="card-body p-4">

                            <div className="feature-icon bg-success-subtle text-success mb-4">
                              <i className="bi bi-house-heart-fill"></i>
                            </div>

                            <h5 className="fw-bold mb-4">
                              Hostel Facilities
                            </h5>

                            <ul className="list-unstyled mb-0">

                              <li className="mb-3">✅ Fully Furnished Rooms</li>

                              <li className="mb-3">📶 High-Speed Wi-Fi</li>

                              <li className="mb-3">🏏 Rooftop Cricket Practice Net</li>

                              <li className="mb-3">💪 Basic Gym Equipment</li>

                              <li className="mb-3">🛡️ 24×7 Safe & Secure Environment</li>

                              <li>🧹 Daily Housekeeping</li>

                            </ul>

                          </div>
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="col-lg-4">
                        <div className="card feature-card border-0 shadow-sm h-100 rounded-4">

                          <div className="card-body p-4">

                            <div className="feature-icon bg-warning-subtle text-warning mb-4">
                              <i className="bi bi-wallet2"></i>
                            </div>

                            <h5 className="fw-bold mb-4">
                              Accommodation Charges
                            </h5>

                            <div className="price-box mb-3">

                              <div className="d-flex justify-content-between">

                                <span>🏠 Without Food</span>

                                <strong className="text-success">
                                  ₹5,000
                                </strong>

                              </div>

                            </div>

                            <div className="price-box mb-4">

                              <div className="d-flex justify-content-between">

                                <span>🍽️ With Food</span>

                                <strong className="text-primary">
                                  ₹10,000
                                </strong>

                              </div>

                            </div>

                            <div className="alert alert-light border mb-0">

                              <i className="bi bi-info-circle-fill text-primary me-2"></i>

                              Electricity, Wi-Fi and maintenance are included.

                            </div>

                          </div>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Documents */}
                  <div className="card mt-4 border-info">
                    <div className="card-body">

                      <h4 className="text-info fw-bold mb-3">
                        📄 Documents Provided
                      </h4>

                      <div className="row text-center">

                        <div className="col-md-3">
                          <div className="p-3 border rounded shadow-sm h-100">
                            📃
                            <h6 className="mt-2 mb-0">Offer Letter</h6>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="p-3 border rounded shadow-sm h-100">
                            🎓
                            <h6 className="mt-2 mb-0">Internship Certificate</h6>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="p-3 border rounded shadow-sm h-100">
                            🏅
                            <h6 className="mt-2 mb-0">Best Performer Certificate</h6>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="p-3 border rounded shadow-sm h-100">
                            ⭐
                            <h6 className="mt-2 mb-0">Portfolio</h6>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

{/* Why Choose Our Intern Developer Program */}
<div className="card border-0 shadow-lg rounded-4 mt-5 overflow-hidden">

  {/* Header */}
  <div className="bg-primary text-white py-4 text-center">
    <h3 className="fw-bold mb-2">
      <i className="bi bi-stars me-2"></i>
      Why Choose Our Intern Developer Program?
    </h3>
    <p className="mb-0 opacity-75 text-center">
      Build your career with industry-focused training, live projects, expert mentorship, and real-world experience.
    </p>
  </div>

  <div className="card-body p-4">

    <div className="row g-4">

      <div className="col-lg-4 col-md-6">
        <div className="feature-box">
          <i className="bi bi-house-heart-fill text-primary feature-icon"></i>
          <h6>Comfortable Accommodation</h6>
          <p>Affordable hostel facilities with Wi-Fi, security, and modern amenities.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature-box">
          <i className="bi bi-laptop text-success feature-icon"></i>
          <h6>Industry-Level Training</h6>
          <p>Learn using the latest technologies, frameworks, and enterprise development practices.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature-box">
          <i className="bi bi-code-slash text-danger feature-icon"></i>
          <h6>Live Client Projects</h6>
          <p>Gain hands-on experience by contributing to real-world software projects.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature-box">
          <i className="bi bi-people-fill text-warning feature-icon"></i>
          <h6>Expert Mentorship</h6>
          <p>Receive guidance from experienced architects and senior software engineers.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature-box">
          <i className="bi bi-graph-up-arrow text-info feature-icon"></i>
          <h6>Career Growth</h6>
          <p>Develop practical skills and strengthen your portfolio for future opportunities.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature-box">
          <i className="bi bi-award-fill text-success feature-icon"></i>
          <h6>Placement Assistance</h6>
          <p>Resume guidance, interview preparation, and placement support after successful completion.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature-box">
          <i className="bi bi-geo-alt-fill text-danger feature-icon"></i>
          <h6>Flexible Locations</h6>
          <p>Internship opportunities available across multiple cities with future expansion plans.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature-box">
          <i className="bi bi-mortarboard-fill text-primary feature-icon"></i>
          <h6>Unpaid Internship Program</h6>
          <p>Focused on practical learning, enterprise project exposure, and skill development.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature-box">
          <i className="bi bi-laptop-fill text-secondary feature-icon"></i>
          <h6>Flexible Work Mode</h6>
          <p>Choose from Work From Office (WFO), Hybrid, or Remote internships based on the program.</p>
        </div>
      </div>

    </div>

  </div>

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
