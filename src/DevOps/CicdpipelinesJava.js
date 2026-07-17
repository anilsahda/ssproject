export default function CicdpipelinesSpringBoot() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>📘 Jenkins CI/CD Pipeline for Spring Boot API</h2>

      {/* Step 1 */}
      <section>
        <b>1. ✅ Install Jenkins & Prerequisites</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Install Java (JDK 17+ recommended)
sudo apt update
sudo apt install openjdk-17-jdk -y

# Verify installation
java -version

# Install Maven
sudo apt install maven -y
mvn -version

# Install Jenkins
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
- Maven Integration
- Email Extension (optional)
- Docker Pipeline (optional)`}
          </code>
        </pre>
      </section>

      {/* Step 3 */}
      <section>
        <b>3. 🔑 Configure Jenkins Credentials</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Jenkins Dashboard -> Manage Jenkins -> Credentials
- Add GitHub/GitLab personal access token
- Add SSH keys for deployment server
- Add secrets (DB URL, username, password, etc.)`}
          </code>
        </pre>
      </section>

      {/* Step 4 */}
      <section>
        <b>4. ⚛️ Prepare Spring Boot API Project</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`spring init --dependencies=web,data-jpa,mysql demo-api
cd demo-api
mvn clean install
mvn spring-boot:run

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

  tools {
    maven 'Maven 3.8.6' // configure Maven under Jenkins Global Tool Config
    jdk 'JDK17'         // configure JDK under Jenkins Global Tool Config
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/username/demo-api.git'
      }
    }

    stage('Build') {
      steps {
        sh 'mvn clean install -DskipTests'
      }
    }

    stage('Test') {
      steps {
        sh 'mvn test'
      }
    }

    stage('Package') {
      steps {
        sh 'mvn package -DskipTests'
      }
    }

    stage('Deploy') {
      steps {
        // Example: Copy JAR to server
        sh 'scp target/demo-api-0.0.1-SNAPSHOT.jar user@server:/opt/demo-api/'
        sh 'ssh user@server "nohup java -jar /opt/demo-api/demo-api-0.0.1-SNAPSHOT.jar > app.log 2>&1 &"'

        // Example: Dockerize
        // sh 'docker build -t demo-api:latest .'
        // sh 'docker run -d -p 8080:8080 demo-api:latest'
      }
    }
  }

  post {
    success {
      echo '✅ Spring Boot API CI/CD Pipeline Successful'
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
          <li>🔹 <b>Checkout:</b> Pulls latest code from Git repository.</li>
          <li>🔹 <b>Build:</b> Runs <code>mvn clean install</code> to resolve dependencies.</li>
          <li>🔹 <b>Test:</b> Executes unit/integration tests.</li>
          <li>🔹 <b>Package:</b> Generates Spring Boot JAR file.</li>
          <li>🔹 <b>Deploy:</b> Copies JAR to server or deploys Docker container.</li>
        </ul>
      </section>

      {/* Step 7 */}
      <section>
        <b>7. 🔄 Trigger Pipeline Automatically</b>
        <ul>
          <li>Enable GitHub webhook for "Build when a change is pushed".</li>
          <li>Optionally schedule nightly builds with cron syntax.</li>
        </ul>
      </section>

      {/* Step 8 */}
      <section>
        <b>8. ✅ Summary</b>
        <ul>
          <li>⚛️ Spring Boot API CI/CD automated with Jenkins.</li>
          <li>🔹 Automated build, test, package and deploy JAR using Docker hub.</li>
          <li>🚀 <a href="https://www.youtube.com/watch?v=icZUzgtz_d8" target="_blank" rel="noopener noreferrer">CI-CD Pipeline using GitHub Actions 1</a></li>
          <li>🚀 <a href="https://www.youtube.com/watch?v=NIAEruc-eP8" target="_blank" rel="noopener noreferrer">CI-CD Pipeline using GitHub Actions 2</a></li>
        </ul>
      </section>
    </div>
  );
}
