export default function CicdpipelinesNext() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>📘 Jenkins CI/CD Pipeline for Next.js Web Application</h2>

      <section>
        <b>1. ✅ Project Setup</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Clone your Next.js project
git clone https://github.com/username/MyNextApp.git
cd MyNextApp

# Install dependencies
npm install

# Run locally to verify
npm run dev`}
          </code>
        </pre>
      </section>

      <section>
        <b>2. 🔹 Jenkins Pipeline (Jenkinsfile)</b>
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
                git branch: 'main', url: 'https://github.com/username/MyNextApp.git'
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

        stage('Export/Deploy') {
            steps {
                // Example deployment (update according to your server)
                sh 'npm run export'   // Generate static files
                sh 'scp -r out/* user@server:/var/www/MyNextApp'
                sh 'ssh user@server "pm2 restart nextapp"'
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
          <li>🔹 <b>Install Dependencies:</b> Runs <code>npm install</code> to fetch packages.</li>
          <li>🔹 <b>Lint:</b> Checks code quality using ESLint.</li>
          <li>🔹 <b>Test:</b> Runs unit tests.</li>
          <li>🔹 <b>Build:</b> Builds the Next.js application.</li>
          <li>🔹 <b>Export/Deploy:</b> Generates static files using <code>npm run export</code> and deploys to server using SCP + PM2.</li>
        </ul>
      </section>

      <section>
        <b>4. ⚡ Notes</b>
        <ul>
          <li>Ensure Node.js and npm are installed on Jenkins agent.</li>
          <li>Update deployment path and PM2 app name according to your server.</li>
          <li>For SSR deployment, consider using Vercel, Docker, or PM2 instead of static export.</li>
          <li>Use environment variables for sensitive credentials.</li>
        </ul>
      </section>
    </div>
  );
}
