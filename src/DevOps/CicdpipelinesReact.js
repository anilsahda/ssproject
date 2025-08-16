export default function CicdpipelinesReact() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>📘 Jenkins CI/CD Pipeline for React.js Web Application</h2>

      <section>
        <b>1. ✅ Project Setup</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Clone your React project
git clone https://github.com/username/MyReactApp.git
cd MyReactApp

# Install dependencies
npm install

# Run locally to verify
npm start`}
          </code>
        </pre>
      </section>

      <section>
        <b>2. 🔹 Jenkinsfile (Pipeline Script)</b>
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
                git branch: 'main', url: 'https://github.com/username/MyReactApp.git'
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
                sh 'npm test -- --watchAll=false'
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
                sh 'scp -r build/* user@server:/var/www/MyReactApp'
                sh 'ssh user@server "pm2 restart reactapp"'
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
        <b>3. ✅ Pipeline Steps Explained</b>
        <ul>
          <li>🔹 <b>Checkout:</b> Pulls the latest code from GitHub.</li>
          <li>🔹 <b>Install Dependencies:</b> Runs <code>npm install</code> to fetch required packages.</li>
          <li>🔹 <b>Lint:</b> Checks code quality using ESLint.</li>
          <li>🔹 <b>Test:</b> Runs unit tests once (<code>--watchAll=false</code> for CI).</li>
          <li>🔹 <b>Build:</b> Creates a production-ready build in the <code>build/</code> folder.</li>
          <li>🔹 <b>Deploy:</b> Copies build files to the server and restarts the application using PM2.</li>
        </ul>
      </section>

      <section>
        <b>4. ⚡ Notes</b>
        <ul>
          <li>Ensure Node.js, npm, and PM2 are installed on Jenkins agent/server.</li>
          <li>Update server path and PM2 app name according to your environment.</li>
          <li>Use environment variables for sensitive credentials.</li>
          <li>Optional: You can integrate Docker for containerized deployment.</li>
        </ul>
      </section>
    </div>
  );
}
