function Nodejwtauth() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-green-700">JWT Authentication in Node.js API</h1>
        <p className="text-gray-500 text-xs mt-1">Implement JWT-based authentication using Node.js (Express + MongoDB) and React frontend.</p>
      </header>

      {/* Step 1: Install Packages */}
      <Section title="Install Packages" color="text-green-600">
        <CodeBlock>
{`npm install express mongoose bcryptjs jsonwebtoken cors body-parser`}
        </CodeBlock>
      </Section>

      {/* Step 2: MongoDB User Model */}
      <Section title="User Model (Mongoose)" color="text-indigo-600">
        <CodeBlock>
{`const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true } // hashed password
});

module.exports = mongoose.model("User", userSchema);`}
        </CodeBlock>
      </Section>

      {/* Step 3: Express Server with JWT */}
      <Section title="Auth API (Express + JWT)" color="text-yellow-600">
        <CodeBlock>
{`const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const app = express();

app.use(express.json());
const secretKey = "YourSuperSecretKey123!";

// Register User
app.post("/api/auth/register", async (req, res) => {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashed });
  await user.save();
  res.json({ message: "User registered" });
});

// Login User
app.post("/api/auth/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id, username: user.username }, secretKey, { expiresIn: "2h" });
  res.json({ token });
});

// Protected Route
app.get("/api/protected", (req, res) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(403).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    res.json({ message: "Protected data access granted", user: decoded });
  });
});

mongoose.connect("mongodb://localhost:27017/jwtDemo").then(() => {
  app.listen(5000, () => console.log("Server running on port 5000"));
});`}
        </CodeBlock>
      </Section>

      {/* Step 4: React Frontend Login */}
      <Section title="React Login Component" color="text-red-600">
        <CodeBlock>
{`import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/api/auth/login", { username, password });
    localStorage.setItem("token", response.data.token);
    alert("Login successful!");
  };

  return (
    <form onSubmit={handleLogin} className="space-y-3">
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;`}
        </CodeBlock>
      </Section>

      {/* Step 5: Calling Protected API */}
      <Section title="Using JWT in API Calls" color="text-purple-600">
        <CodeBlock>
{`const token = localStorage.getItem("token");
const response = await axios.get("http://localhost:7070/api/protected", {
  headers: { Authorization: \`Bearer \${token}\` }
});`}
        </CodeBlock>
      </Section>

      {/* Step 6: Summary */}
      <Section title="Summary" color="text-green-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Users register with username/password (password hashed).</li>
          <li>On login, JWT token is generated and stored in localStorage.</li>
          <li>Frontend attaches token in Authorization header for secure API calls.</li>
          <li>Protected APIs only accessible with valid JWT.</li>
        </ul>
      </Section>
    </div>
  );
}

/* Reusable Section Component */
function Section({ title, color, children }) {
  return (
    <section>
      <div className="flex items-center mb-2">
        <strong className={`${color}`}>{title}</strong>
      </div>
      {children}
    </section>
  );
}

/* Reusable Code Block Component */
function CodeBlock({ children }) {
  return (
    <pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5">
      {children}
    </pre>
  );
}

export default Nodejwtauth;
