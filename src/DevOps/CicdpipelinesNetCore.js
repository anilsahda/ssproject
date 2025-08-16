export default function CicdpipelinesNetCore() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>📘 Jenkins CI/CD Pipeline for .NET Core API (Step-by-Step)</h2>

      {/* Step 1 */}
      <section>
        <b>1. ✅ Install Jenkins & Prerequisites</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Install .NET SDK
wget https://dot.net/v1/dotnet-install.sh -O dotnet-install.sh
chmod +x dotnet-install.sh
./dotnet-install.sh --channel 7.0

# Verify installation
dotnet --version

# Jenkins installation (Linux example)
sudo apt update && sudo apt install openjdk-11-jdk -y
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt update
sudo apt install jenkins -y
sudo systemctl start jenkins
sudo systemctl enable jenkins`}
          </code>
        </pre>
      </section>

      {/* Step 2 */}
      <section>
        <b>2. 🔧 Install Required Jenkins Plugins</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`- Git plugin
- Pipeline
- MSBuild plugin (optional)
- Email Extension (optional)
- Docker Pipeline (optional)` }
          </code>
        </pre>
      </section>

      {/* Step 3 */}
      <section>
        <b>3. 🔑 Configure Jenkins Credentials</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Go to Jenkins Dashboard -> Manage Jenkins -> Credentials
- Add GitHub/GitLab personal access token for code checkout
- Add SSH keys for deployment server (Linux/Windows)
- Add secrets for environment variables (e.g., DB connection string)` }
          </code>
        </pre>
      </section>

      {/* Step 4 */}
      <section>
        <b>4. ⚛️ Prepare .NET Core API Project</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`dotnet new webapi -n MyDotnetAPI
cd MyDotnetAPI
dotnet restore
dotnet build
dotnet run

# Push project to GitHub or GitLab`} 
          </code>
        </pre>
      </section>

      {/* Step 5 */}
      <section>
        <b>5. 📂 Create Jenkins Pipeline (Jenkinsfile)</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`pipeline {
  agent any

  environment {
    DOTNET_HOME = "/usr/share/dotnet"
    PATH = "{DOTNET_HOME}:{env.PATH}"
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/username/MyDotnetAPI.git'
      }
    }

    stage('Restore Dependencies') {
      steps {
        sh 'dotnet restore'
      }
    }

    stage('Build') {
      steps {
        sh 'dotnet build --configuration Release'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'dotnet test --no-build --verbosity normal'
      }
    }

    stage('Publish') {
      steps {
        sh 'dotnet publish -c Release -o ./publish'
      }
    }

    stage('Deploy') {
      steps {
        # Example: Deploy to remote Linux server
        sh 'scp -r ./publish user@server:/var/www/mydotnetapi'
        # Example: Deploy Docker container
        # sh 'docker build -t mydotnetapi:latest .'
        # sh 'docker run -d -p 5000:5000 mydotnetapi:latest'
      }
    }
  }

  post {
    success {
      echo '✅ .NET Core API CI/CD Pipeline Successful'
    }
    failure {
      echo '❌ Pipeline Failed'
    }
  }
}`}
          </code>
        </pre>
      </section>

      {/* Step 6 */}
      <section>
        <b>6. 📝 Pipeline Steps Explanation</b>
        <ul>
          <li>🔹 <b>Checkout:</b> Pulls code from Git repository.</li>
          <li>🔹 <b>Restore Dependencies:</b> Runs <code>dotnet restore</code> to install NuGet packages.</li>
          <li>🔹 <b>Build:</b> Builds the API in Release configuration.</li>
          <li>🔹 <b>Run Tests:</b> Executes unit/integration tests.</li>
          <li>🔹 <b>Publish:</b> Creates a folder with compiled output for deployment.</li>
          <li>🔹 <b>Deploy:</b> Deploys the published folder to server or container platform.</li>
        </ul>
      </section>

      {/* Step 7 */}
      <section>
        <b>7. 🔄 Trigger Pipeline Automatically</b>
        <ul>
          <li>Enable "Build when a change is pushed to GitHub" under pipeline triggers.</li>
          <li>Optionally, schedule pipeline with cron syntax for nightly builds.</li>
        </ul>
      </section>

      {/* Step 8 */}
      <section>
        <b>8. ✅ Summary</b>
        <ul>
          <li>⚛️ .NET Core API CI/CD automated with Jenkins.</li>
          <li>🔹 Automated restore, build, test, publish, and deployment steps.</li>
          <li>🔹 Optional deployment to Linux server or Docker container.</li>
          <li>🚀 Quick feedback on build/test success or failure.</li>
        </ul>
      </section>
    </div>
  );
}

