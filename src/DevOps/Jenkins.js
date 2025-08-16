export default function Jenkins() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>📘 Jenkins Setup for CI/CD Pipelines</h2>

      {/* 1. Jenkins Setup */}
      <section>
        <b>1. ✅ Jenkins Setup</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Install Jenkins on Linux
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt update
sudo apt install jenkins
sudo systemctl start jenkins
sudo systemctl enable jenkins
# Access Jenkins: http://localhost:8080`}
          </code>
        </pre>
      </section>

      {/* 2. Common Jenkins Plugins */}
      <section>
        <b>2. 📦 Install Required Plugins</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`- Git plugin
- Pipeline
- GitHub Integration
- NodeJS Plugin
- MSBuild Plugin (.NET Core)
- Docker Pipeline Plugin
- Email Extension (optional)` }
          </code>
        </pre>
      </section>

      {/* 3. Credentials */}
      <section>
        <b>3. 🔑 Configure Credentials</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Add credentials in Jenkins:
- GitHub / GitLab access token
- AWS (Access Key & Secret)
- Docker Registry (optional)
- .NET NuGet feed credentials (if needed)` }
          </code>
        </pre>
      </section>

      {/* 4. .NET Core API Pipeline */}
      <section>
        <b>4. ⚡ .NET Core API Pipeline (Jenkinsfile)</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/username/dotnet-api.git'
      }
    }
    stage('Restore') {
      steps {
        sh 'dotnet restore'
      }
    }
    stage('Build') {
      steps {
        sh 'dotnet build --configuration Release'
      }
    }
    stage('Test') {
      steps {
        sh 'dotnet test'
      }
    }
    stage('Publish') {
      steps {
        sh 'dotnet publish -c Release -o ./publish'
      }
    }
    stage('Deploy') {
      steps {
        # Example deployment to server
        sh 'scp -r ./publish user@server:/var/www/dotnet-api'
      }
    }
  }
  post {
    success { echo '✅ .NET Core API CI/CD Successful' }
    failure { echo '❌ Build Failed!' }
  }
}`}
          </code>
        </pre>
      </section>

      {/* 5. Node.js API Pipeline */}
      <section>
        <b>5. ⚡ Node.js API Pipeline</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps { git 'https://github.com/username/node-api.git' }
    }
    stage('Install Dependencies') {
      steps { sh 'npm install' }
    }
    stage('Test') {
      steps { sh 'npm run test' }
    }
    stage('Build') {
      steps { sh 'npm run build' }
    }
    stage('Deploy') {
      steps {
        sh 'scp -r ./dist user@server:/var/www/node-api'
      }
    }
  }
  post {
    success { echo '✅ Node.js API CI/CD Successful' }
    failure { echo '❌ Build Failed!' }
  }
}`}
          </code>
        </pre>
      </section>

      {/* 6. React App Pipeline */}
      <section>
        <b>6. ⚡ React App Pipeline</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps { git 'https://github.com/username/react-app.git' }
    }
    stage('Install') {
      steps { sh 'npm install' }
    }
    stage('Build') {
      steps { sh 'npm run build' }
    }
    stage('Deploy') {
      steps {
        sh 'scp -r ./build user@server:/var/www/react-app'
      }
    }
  }
  post {
    success { echo '✅ React App CI/CD Successful' }
    failure { echo '❌ Build Failed!' }
  }
}`}
          </code>
        </pre>
      </section>

      {/* 7. Next.js App Pipeline */}
      <section>
        <b>7. ⚡ Next.js App Pipeline</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps { git 'https://github.com/username/next-app.git' }
    }
    stage('Install') {
      steps { sh 'npm install' }
    }
    stage('Build') {
      steps { sh 'npm run build' }
    }
    stage('Export (Optional)') {
      steps { sh 'npm run export' }
    }
    stage('Deploy') {
      steps {
        sh 'scp -r ./out user@server:/var/www/next-app'
      }
    }
  }
  post {
    success { echo '✅ Next.js CI/CD Successful' }
    failure { echo '❌ Build Failed!' }
  }
}`}
          </code>
        </pre>
      </section>

      {/* 8. Summary */}
      <section>
        <b>✅ Summary</b>
        <ul>
          <li>🛠 Jenkins installed with required plugins</li>
          <li>🔑 Credentials configured for Git, AWS, Docker, NuGet</li>
          <li>🚀 Pipelines for .NET Core API, Node.js API, React, and Next.js apps</li>
          <li>⚡ Automates build, test, and deployment</li>
        </ul>
      </section>
    </div>
  );
}
