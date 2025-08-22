function Nodefacebookauth() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">Facebook Authentication in Node.js API</h1>
        <p className="text-gray-500 text-xs mt-1">Implement Facebook OAuth authentication using Node.js (Express + Passport.js) API and React frontend.</p>
      </header>

      <Section title="✅ Steps to create Facebook OAuth Client and register your app with Facebook" color="text-blue-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Go to the Meta for Developers page</li>
          <li>Click "Create App" → Choose "Consumer" → Click Next</li>
          <li>Provide App Name, email, and Create App</li>
          <li>Under "Add a Product", choose Facebook Login → Set it up</li>
          <li>In the sidebar → Facebook Login → Settings</li>
          <li>Set Valid OAuth Redirect URIs to https://localhost:7070/signin-facebook</li>
          <li>Go to Settings → Basic</li>
          <li>Note the App ID → acts as ClientId and App Secret → acts as ClientSecret</li>
        </ul>
      </Section>

      <Section title="Install Required Packages" color="text-indigo-600">
        <CodeBlock>
{`npm install express passport passport-facebook express-session cors`}
        </CodeBlock>
      </Section>

      <Section title="Backend Setup (server.js)" color="text-green-600">
        <CodeBlock>
{`const express = require("express");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const session = require("express-session");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(session({ secret: "SECRET", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new FacebookStrategy({
    clientID: "YOUR_FACEBOOK_APP_ID",
    clientSecret: "YOUR_FACEBOOK_APP_SECRET",
    callbackURL: "http://localhost:5000/auth/facebook/callback",
    profileFields: ["id", "displayName", "emails"]
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

app.get("/auth/facebook", passport.authenticate("facebook", { scope: ["email"] }));

app.get("/auth/facebook/callback", 
  passport.authenticate("facebook", { failureRedirect: "/" }),
  (req, res) => {
    res.json(req.user); // send profile back to frontend
  }
);

app.listen(7070, () => console.log("Server running on http://localhost:7070"));`}
        </CodeBlock>
      </Section>

      <Section title="React Component for Facebook Login" color="text-red-600">
        <CodeBlock>
{`import React from "react";

function FacebookLoginButton() {
  const handleFacebookLogin = () => {
    window.location.href = "http://localhost:7070/auth/facebook";
  };

  return (
    <button 
      onClick={handleFacebookLogin} 
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow">
      Login with Facebook
    </button>
  );
}

export default FacebookLoginButton;`}
        </CodeBlock>
      </Section>

      <Section title="Summary" color="text-blue-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Backend uses Passport.js with Facebook strategy.</li>
          <li>Frontend redirects to backend `/auth/facebook` to trigger OAuth flow.</li>
          <li>After successful login, backend returns user profile (or JWT).</li>
          <li>You can extend it to save users in MongoDB.</li>
        </ul>
      </Section>
    </div>
  );
}

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

export default Nodefacebookauth;
