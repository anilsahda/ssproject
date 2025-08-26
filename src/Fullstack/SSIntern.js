import "bootstrap/dist/css/bootstrap.min.css";

function SSIntern() {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5 text-primary">🚀 Employment Program</h1>
        <div className="mt-3">
          <span className="badge bg-primary fs-6 me-2">Fullstack Engineer</span>
          <span className="badge bg-primary fs-6 me-2">DevOps Engineer</span>
          <span className="badge bg-primary fs-6">AI-ML Engineer</span>
        </div>
        <p className="text-muted mt-4 fs-5">
          A career-launching program designed to make you{" "}
          <strong>industry-ready</strong> with hands-on experience in{" "}
          <strong>Back-End, Front-End, Database, and Cloud</strong>.  
          Gain practical exposure, expert mentorship, and career support to secure your dream job.
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
  );
}

export default SSIntern;
