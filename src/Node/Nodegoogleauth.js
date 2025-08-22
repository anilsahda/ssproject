function Nodegoogleauth() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Google Authentication in Node.js API</h1>
        <p className="text-gray-500 text-xs mt-1">Implement Google OAuth authentication in a Node.js (Express) API with MongoDB.</p>
      </header>

      <Section title="✅ Steps to create Google OAuth Client and register your app with Google" color="text-blue-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Go to Google Developer Console</li>
          <li>Create a New Project</li>
          <li>Navigate to OAuth Consent Screen</li>
          <li>Choose External</li>
          <li>Fill in App Name, Support Email and Save</li>
          <li>Go to Credentials → Create Credentials → OAuth Client ID</li>
          <li>Application Type: Web application and add Add http://localhost:5000/signin-google as Authorized redirect URI</li>
          <li>Copy the Client ID and Client Secret</li>
        </ul>
      </Section>

      <Section title="Install Required Packages" color="text-indigo-600">
        <CodeBlock>
{`npm install express mongoose passport passport-google-oauth20 express-session`}
        </CodeBlock>
      </Section>

      <Section title="Setup Express App" color="text-green-600">
        <CodeBlock>
{`const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();
mongoose.connect("mongodb://localhost:27017/googleAuthDB");

const User = mongoose.model("User", new mongoose.Schema({
  googleId: String,
  name: String,
  email: String,
  picture: String
}));

// Passport Config
passport.use(new GoogleStrategy({
    clientID: "YOUR_GOOGLE_CLIENT_ID",
    clientSecret: "YOUR_GOOGLE_CLIENT_SECRET",
    callbackURL: "/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    let user = await User.findOne({ googleId: profile.id });
    if (!user) {
      user = await User.create({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
        picture: profile.photos[0].value
      });
    }
    return done(null, user);
  }
));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => User.findById(id, done));

// Middleware
app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.send("Logged in as " + req.user.name);
  }
);

app.listen(5000, () => console.log("Server running on http://localhost:7070"));`}
        </CodeBlock>
      </Section>

      <Section title="React Component for Google Login" color="text-yellow-600">
        <CodeBlock>
{`import React from "react";

function GoogleLoginButton() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:7070/auth/google";
  };

  return (
    <button onClick={handleGoogleLogin} className="bg-red-600 text-white px-4 py-2 rounded">
      Login with Google
    </button>
  );
}

export default GoogleLoginButton;`}
        </CodeBlock>
      </Section>

      <Section title="Summary" color="text-blue-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Google OAuth implemented with <b>passport-google-oauth20</b>.</li>
          <li>User details are stored in <b>MongoDB</b>.</li>
          <li>Frontend simply redirects to <code>/auth/google</code> for login.</li>
          <li>Session-based authentication can be extended with JWT for APIs.</li>
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

function CodeBlock({ children }) {
  return (
    <pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5">
      {children}
    </pre>
  );
}

export default Nodegoogleauth;
