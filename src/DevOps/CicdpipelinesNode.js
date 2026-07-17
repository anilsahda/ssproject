export default function CicdpipelinesNode() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>📘 Jenkins CI/CD Pipeline for Node JS API</h2>

      <section>
        <b>1. ✅ Project Setup</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Clone your Node.js API repository
git clone https://github.com/username/MyNodeAPI.git
cd MyNodeAPI

# Install dependencies
npm install

# Run locally to ensure it works
npm run dev or node index.js`}
          </code>
        </pre>
      </section>

      <section>
        <b>2. 🔹 Jenkins Pipeline</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`pipeline {
    agent any

    environment {
        NODE_HOME = "/usr/local/bin/node"
        PATH = "{NODE_HOME}:{env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/username/MyNodeAPI.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Example deployment (update according to your server)
                sh 'scp -r dist/* user@server:/var/www/MyNodeAPI'
                sh 'ssh user@server "pm2 restart mynodeapi"'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed!'
        }
    }
}`}
          </code>
        </pre>
      </section>

      <section>
        <b>3. ✅ Steps Explained</b>
        <ul>
          <li>🔹 <b>Checkout:</b> Pulls the latest code from GitHub.</li>
          <li>🔹 <b>Install Dependencies:</b> Runs <code>npm install</code> to fetch all packages.</li>
          <li>🔹 <b>Lint:</b> Checks code quality using ESLint.</li>
          <li>🔹 <b>Test:</b> Runs unit tests using <code>npm test</code>.</li>
          <li>🔹 <b>Build:</b> Compiles/transpiles code (e.g., TypeScript or Babel).</li>
          <li>🔹 <b>Deploy:</b> Copies files to the server and restarts Node.js app using PM2.</li>
        </ul>
      </section>

      {/* Step 4 */}
      <section>
        <b>4. ✅ Summary</b>
        <ul>
          <li>⚛️ Node.js API CI/CD automated with Jenkins.</li>
          <li>🔹 Automated build, test, package and deploy using Docker hub.</li>
          <li>🚀 <a href="https://www.youtube.com/watch?v=EECHnbOIVZQ" target="_blank" rel="noopener noreferrer">CI-CD Pipeline using GitHub Actions</a></li>
        </ul>
      </section>
    </div>
  );
}
