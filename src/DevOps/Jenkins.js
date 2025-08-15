import React, { useState } from "react";

function Jenkins() {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch (e) {
      console.error("copy failed", e);
    }
  };

  const amplifyYml = `version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: build
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*`;

  const pkgJsonSnippet = `{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
}`;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <header className="px-6 py-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <h1 className="text-3xl font-semibold">Deploy React App on AWS Amplify — Step-by-step</h1>
          <p className="mt-2 text-indigo-100/90">Managed CI/CD for private GitHub repos • Free-tier friendly</p>
        </header>

        <main className="p-6 md:p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold">Quick summary</h2>
            <p className="mt-2 text-sm text-gray-600">AWS Amplify provides automatic builds & deploys from private GitHub repos, HTTPS, CDN, and a free tier that covers many small/medium apps. This page mirrors the documented steps and includes copy buttons for code snippets.</p>
          </section>

          <section className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium">Prerequisites</h3>
              <ul className="mt-2 text-sm space-y-1 text-gray-600">
                <li>• AWS account with Amplify access</li>
                <li>• React app in a private GitHub repo</li>
                <li>• `build` script in <code>package.json</code></li>
                <li>• Optional: env vars you plan to use (REACT_APP_*)</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-medium">Why Amplify</h3>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li>• 100% managed hosting (no server management)</li>
                <li>• CI/CD — builds on every push</li>
                <li>• Supports private repos via GitHub App</li>
                <li>• SSL, CDN, and optional backend integrations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Step-by-step</h2>

            <ol className="mt-3 space-y-4 text-sm text-gray-700">
              <li>
                <strong>1) Connect Amplify to GitHub</strong>
                <div className="mt-2 text-gray-600">Console → Amplify → Host web app → GitHub → authorize Amplify GitHub App (allow only your repo for better security).</div>
              </li>

              <li>
                <strong>2) Pick repo & branch</strong>
                <div className="mt-2 text-gray-600">Select the private repo and the branch (e.g., <code>main</code>) you want Amplify to auto-deploy.</div>
              </li>

              <li>
                <strong>3) Review / paste build settings</strong>
                <div className="mt-2 text-gray-600">Use this optimized <code>amplify.yml</code> for CRA builds. Click the copy button to copy it to clipboard.</div>

                <div className="mt-3">
                  <pre className="bg-gray-900 text-gray-100 text-xs rounded-md p-3 overflow-x-auto">{amplifyYml}</pre>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() => copyToClipboard(amplifyYml, 'amplify')}
                      className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm"
                    >
                      Copy amplify.yml
                    </button>
                    {copied === 'amplify' && <span className="text-sm text-green-600">Copied!</span>}
                  </div>
                </div>
              </li>

              <li>
                <strong>4) Add environment variables (optional)</strong>
                <div className="mt-2 text-gray-600">Amplify → App settings → Environment variables. Example: <code>REACT_APP_API_URL=https://api.example.com</code></div>
              </li>

              <li>
                <strong>5) SPA redirects</strong>
                <div className="mt-2 text-gray-600">Add a rewrite rule to route all requests to <code>/index.html</code> (200 rewrite) so React Router routes work on refresh.</div>
              </li>

              <li>
                <strong>6) Deploy</strong>
                <div className="mt-2 text-gray-600">Save & Deploy. Amplify will build and publish a live HTTPS URL like <code>https://branch.hash.amplifyapp.com</code>.</div>
              </li>

              <li>
                <strong>7) (Optional) PR previews</strong>
                <div className="mt-2 text-gray-600">Enable Preview builds for pull requests to get temporary preview URLs for QA.</div>
              </li>

              <li>
                <strong>8) (Optional) Custom domain</strong>
                <div className="mt-2 text-gray-600">Amplify manages SSL and domain setup (Route53 recommended but external registrars work too).</div>
              </li>

              <li>
                <strong>9) Cost control tips</strong>
                <div className="mt-2 text-gray-600">Use <code>npm ci</code>, caching, and avoid noisy branches. Monitor build minutes — Amplify's free tier includes build minutes and hosting suitable for many projects.</div>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Snippets</h2>

            <div className="mt-3">
              <h4 className="font-medium text-sm">package.json (scripts)</h4>
              <pre className="bg-gray-900 text-gray-100 text-xs rounded-md p-3 overflow-x-auto mt-2">{pkgJsonSnippet}</pre>
              <div className="mt-2">
                <button
                  onClick={() => copyToClipboard(pkgJsonSnippet, 'pkg')}
                  className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm"
                >
                  Copy package.json snippet
                </button>
                {copied === 'pkg' && <span className="text-sm text-green-600 ml-2">Copied!</span>}
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-medium text-sm">Amplify build file (amplify.yml)</h4>
              <pre className="bg-gray-900 text-gray-100 text-xs rounded-md p-3 overflow-x-auto mt-2">{amplifyYml}</pre>
              <div className="mt-2">
                <button
                  onClick={() => copyToClipboard(amplifyYml, 'amplify2')}
                  className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm"
                >
                  Copy amplify.yml
                </button>
                {copied === 'amplify2' && <span className="text-sm text-green-600 ml-2">Copied!</span>}
              </div>
            </div>
          </section>

          <section className="p-4 bg-indigo-50 border rounded-lg">
            <h3 className="font-semibold">Troubleshooting</h3>
            <ul className="mt-2 text-sm text-gray-700 space-y-1">
              <li>• <strong>404 on refresh:</strong> Add SPA rewrite rule to <code>/index.html</code>.</li>
              <li>• <strong>Node version mismatch:</strong> Pin Node in <code>amplify.yml</code> or use an .nvmrc step.</li>
              <li>• <strong>Private repo not visible:</strong> Reconfigure the Amplify GitHub App permissions for the repo.</li>
            </ul>
          </section>

          <footer className="text-sm text-gray-600">Built for quick copying and pasting. Integrate into your React app and adjust styles as needed. — Generated guide</footer>
        </main>
      </div>
    </div>
  );
}

export default Jenkins
