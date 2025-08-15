import React from "react";

function Cicdpipelines() {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen font-sans text-gray-800 text-sm leading-relaxed">
      {/* Header */}
      <h1 className="text-xl font-bold text-indigo-700 border-b pb-2 mb-4 flex items-center">
        🚀 Deploy React App using AWS Amplify – Step by Step
      </h1>

      {/* 1. Prerequisites */}
      <section className="mb-6">
        <strong>1. Prerequisites</strong>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>AWS account with Amplify permissions</li>
          <li>Node.js and npm installed</li>
          <li>React app ready in your local workspace</li>
          <li>GitHub, Bitbucket, or GitLab repository with your code</li>
        </ul>
        <pre className="bg-gray-900 text-green-300 p-3 rounded mt-3 text-xs overflow-x-auto">
          {`npx create-react-app my-app
cd my-app
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/my-app.git
git push -u origin main`}
        </pre>
      </section>

      {/* 2. Deploy via AWS Console */}
      <section className="mb-6">
        <strong>2. Deploy via AWS Console (Continuous Deployment)</strong>
        <ol className="list-decimal ml-6 mt-2 space-y-1">
          <li>Sign in to AWS Management Console → Amplify Hosting</li>
          <li>Create new app → Host web app</li>
          <li>Connect Git provider and select repo/branch</li>
          <li>Amplify auto-detects build settings</li>
          <li>Click <em>Save and Deploy</em></li>
          <li>Wait for live <code>*.amplifyapp.com</code> URL</li>
          <li>Push to branch for auto-deployment</li>
        </ol>
      </section>

      {/* 3. Deploy via Amplify CLI */}
      <section className="mb-6">
        <strong>3. Alternative: Deploy via Amplify CLI</strong>
        <pre className="bg-gray-900 text-green-300 p-3 rounded mt-3 text-xs overflow-x-auto">
          {`npm install -g @aws-amplify/cli
amplify configure
amplify init
amplify add hosting
amplify publish`}
        </pre>
      </section>

      {/* 4. How It Works */}
      <section className="mb-6">
        <strong>4. How It Works</strong>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>
            <strong>Console approach:</strong> Git-based CI/CD – commits trigger
            automatic build & deploy.
          </li>
          <li>
            <strong>CLI approach:</strong> Direct S3/CloudFront upload – quick
            one-off deployments.
          </li>
        </ul>
      </section>

      {/* 5. Post-Deployment */}
      <section className="mb-6">
        <strong>5. Post-Deployment & Troubleshooting</strong>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Visit the host URL from console/CLI output</li>
          <li>Push updates to redeploy automatically</li>
          <li>Adjust build settings if output path mismatches</li>
          <li>
            Fix access errors by checking <code>amplify.yml</code>
          </li>
        </ul>
      </section>

      {/* 6. amplify.yml */}
      <section>
        <strong>
          6. <code>amplify.yml</code>
        </strong>
        <pre className="bg-gray-900 text-green-300 p-3 rounded mt-3 text-xs overflow-x-auto">
          {`version: 1
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
      - node_modules/**/*

# Optional: pin Node version
# backend:
#   phases:
#     build:
#       commands:
#         - nvm use 18 || nvm install 18`}
        </pre>
      </section>
    </div>
  );
}

export default Cicdpipelines;
