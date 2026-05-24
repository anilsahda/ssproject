import "bootstrap/dist/css/bootstrap.min.css";

function SSIntern() {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5 text-primary mb-3">
          🚀 3 – 6 Months Job-Oriented Training Program for IT Freshers
        </h1>
        <p className="text-muted fs-5">
          Get <strong>Job-Ready</strong> with in-demand skills & real-world
          experience. <br />
          🎯 Designed for <strong>Fresh Graduates</strong> &{" "}
          <strong>Job Seekers</strong> in Tech.
        </p>
        <hr className="w-25 mx-auto my-4 border-2 border-primary" />
      </div>

      {/* What You'll Learn */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-10">
          <div className="card shadow-lg border-0 p-4 rounded-4">
            <h4 className="fw-bold mb-3 text-primary">💡 What You'll Learn</h4>
            <ul className="list-group list-group-flush fs-6">
              <li className="list-group-item py-3">
                🔧 <strong>Back-End Development (Choose Your Stack)</strong>
                <br />
                MERN (MongoDB, Express, React, Node.js) | .NET Core | Java
                (Spring Boot) | Python (Django / Flask)
              </li>
              <li className="list-group-item py-3">
                🧠 <strong>Object-Oriented Programming (OOP)</strong>
                <br />
                Classes, Inheritance, Polymorphism, Encapsulation +
                Implementation in chosen language.
              </li>
              <li className="list-group-item py-3">
                🗃️ <strong>Databases</strong>
                <br />
                RDBMS: MySQL, PostgreSQL | NoSQL: MongoDB, Redis
              </li>
              <li className="list-group-item py-3">
                ☁️ <strong>Cloud Fundamentals</strong>
                <br />
                Hands-on with AWS / Azure / GCP + Project Deployment
              </li>
              <li className="list-group-item py-3">
                🛠️ <strong>Live Industry Projects</strong>
                <br />
                Real-time projects | Git/GitHub | Agile Collaboration
              </li>
              <li className="list-group-item py-3">
                📁 <strong>Professional Portfolio</strong>
                <br />
                Resume, GitHub, LinkedIn, Project Demos + Portfolio Website
              </li>
              <li className="list-group-item py-3">
                🎤 <strong>Mock Interviews & Career Guidance</strong>
                <br />
                Weekly HR + Technical Rounds | 1:1 Mentorship | Resume Reviews |
                Job Referrals
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Join */}
      <div className="row mb-5">
        <div className="col-md-12 text-center mb-4">
          <h2 className="fw-bold text-primary">✨ Why Join This Training?</h2>
          <p className="text-muted fs-6">
            A program designed to transform <strong>freshers</strong> into{" "}
            <strong>job-ready professionals</strong> with hands-on expertise.
          </p>
        </div>

        {[
          {
            title: "💻 Practical Learning",
            desc: (
              <>
                ✅ 100% Opportunities <br />
                ✅ Experience Letter + Hands-on Experience <br />
                ✅ Work on Scratch Live Projects <br />
                ✅ Work on Existing Live Projects <br />
                ✅ Exposure to NoSQL and RDBMS <br />
                ✅ Microservices Implementation <br />
                ✅ Apply Design Patterns <br />
                ✅ Onion / Clean Architecture <br />
                ✅ Strong Confidence & Thinking Skills <br />
                ✅ Aware of Company Environment <br />
                ✅ Cloud Integration: AWS S3 Bucket, Azure, Lambda Functions,
                Deployment, RDS
              </>
            ),
          },
          {
            title: "🧑‍🏫 WFO (Work From Office)",
            desc: "Direct join within 4 months at SS Interns",
          },
          {
            title: "🎯 WFH (Work From Home)",
            desc: "Join anytime after 4 months based on performance & interview at SS Interns",
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
                🕒 <strong>Duration:</strong> 3 – 6 Months
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
  );
}

export default SSIntern;
