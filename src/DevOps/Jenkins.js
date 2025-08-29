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
sudo apt install jenkins -y
sudo systemctl start jenkins
sudo systemctl enable jenkins
sudo systemctl status jenkins  # Check if running
Access Jenkins Web UI: http://localhost:8080 or http://<server-ip>:8080 if remote
Fetch initial admin password: sudo cat /var/lib/jenkins/secrets/initialAdminPassword
Copy the password and use it to unlock Jenkins`}
          </code>
        </pre>
      </section>

      {/* 2. Common Jenkins Plugins */}
      <section>
        <b>2. 📦 Install Required Plugins After Login</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Click “Install Suggested Plugins”.
If manual:
- Git Plugin (for Git operations)
- Pipeline (for Jenkinsfile pipelines)
- GitHub Integration
- NodeJS Plugin (for Node/React/Next builds)
- MSBuild Plugin (.NET Core builds)
- Docker Pipeline Plugin (for Docker builds)
- Email Extension (optional for notifications)` }
          </code>
        </pre>
      </section>

      {/* 3. Credentials */}
      <section>
        <b>3. 🔑 Configure Jenkins Credentials</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Step 3.1: Add GitHub / GitLab Token:
- Go to Jenkins → Manage Jenkins → Credentials → Global → Add Credentials
- Type: Secret Text
- Enter GitHub Access Token
- ID: github-token

# Step 3.2: Add SSH Key for Servers:
- Go to Jenkins → Manage Jenkins → Credentials → Global → Add Credentials
- Type: SSH Username with private key
- Username: server user (e.g., ubuntu)
- Private Key: Paste your ~/.ssh/id_rsa
- ID: server-ssh-key

# Step 3.3: Add Docker Registry Credentials (if deploying Docker images):
- Username, Password/API key for Docker Hub or AWS ECR

# Step 3.4: Add AWS Credentials:
- ID: aws-credentials
- Access Key & Secret Key` }
          </code>
        </pre>
      </section>

      {/* 4. Configure SSH Host Key Checking */}
      <section>
        <b>4. 📦 Configure SSH Host Key Checking</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`To allow Jenkins to connect to remote servers via SSH: ssh-keyscan -H server_ip >> ~/.ssh/known_hosts
- Replace server_ip with your target server
- This ensures the first connection does not fail due to host key verification`}
          </code>
        </pre>
      </section>

      {/* 5. Configure SSH Host Key Checking */}
      <section>
        <b>5. 📦 Install SSH Agent Plugin in Jenkins</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`- Navigate to Manage Jenkins → Manage Plugins → Available → SSH Agent
- Use it in your pipeline to load private key for deployments

Example in Jenkinsfile:
stage('Deploy') {
  steps {
    sshagent(['server-ssh-key']) {
      sh 'scp -r ./publish user@server:/var/www/dotnet-api'
    }
  }
}`}
          </code>
        </pre>
      </section>

      {/* 6. Configure GitHub Webhook */}
      <section>
        <b>6. 📦 Configure GitHub Webhook</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`- Go to your GitHub repository → Settings → Webhooks → Add webhook
- Payload URL: http://<jenkins-server>:8080/github-webhook/
- Content type: application/json
- Events: Just the push event (or customize)
- Click Add webhook`}
          </code>
        </pre>
      </section>

      {/* 7. Configure GitHub Webhook */}
      <section>
        <b>7. 📦 Enable SCM Polling (Optional)</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`If you prefer polling instead of webhooks:
- In Jenkins pipeline job → Build Triggers → Poll SCM
- Add schedule: H/5 * * * * (poll every 5 minutes)`}
          </code>
        </pre>
      </section>



      {/* 8. .NET Core API Pipeline */}
      <section>
        <b>8. ⚡ .NET Core API Pipeline via Jenkinsfile</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps { git url: 'https://github.com/username/dotnet-api.git', credentialsId: 'github-token' }
    }
    stage('Restore') { steps { sh 'dotnet restore' } }
    stage('Build') { steps { sh 'dotnet build --configuration Release' } }
    stage('Test') { steps { sh 'dotnet test' } }
    stage('Publish') { steps { sh 'dotnet publish -c Release -o ./publish' } }
    stage('Deploy') {
      steps {
        sshagent(['server-ssh-key']) {
          sh 'scp -r ./publish user@server:/var/www/dotnet-api'
        }
      }
    }
  }
  post {
    success { echo '✅ .NET Core API CI/CD Successful' }
    failure { echo '❌ Build Failed!' }
  }
}
`}
          </code>
        </pre>
      </section>

      {/* 9. Node.js API Pipeline */}
      <section>
        <b>9. ⚡ Node.js API Pipeline via Jenkinsfile</b>
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

      {/* 10. React App Pipeline */}
      <section>
        <b>10. ⚡ React App Pipeline via Jenkinsfile</b>
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

      {/* 11. Next.js App Pipeline */}
      <section>
        <b>11. ⚡ Next.js App Pipeline via Jenkinsfile</b>
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

      {/* 12. Steps to Create a Pipeline Job in Jenkins */}
      <section>
        <b>12. ⚡ Steps to Create a Pipeline Job in Jenkins</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`- Jenkins Dashboard → New Item
- Name your pipeline → select Pipeline
- Under Pipeline Definition, choose Pipeline script from SCM
- SCM: Git
- Repository URL: Your repo URL
- Credentials: github-token
- Branch: main (or default branch)
- Script Path: Jenkinsfile
- Save & Build`}
          </code>
        </pre>
      </section>

      {/* 13. Validate the Pipeline */}
      <section>
        <b>13. ⚡ Validate the Pipeline</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`- Check Build History → Console Output
- Ensure all stages (Checkout, Build, Test, Deploy) succeed
- Verify deployed code on the server`}
          </code>
        </pre>
      </section>

      {/* 15. Summary */}
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
