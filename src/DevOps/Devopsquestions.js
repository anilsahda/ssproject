export default function Devopsquestions() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>📘 DevOps Interview Questions & Answers</h2>

      {/* Question 1 */}
      <section>
        <b>1. What is DevOps?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`DevOps means Development and Operations aimed at collaboration, automation and continuous delivery.
Example: Using CI/CD pipelines to automatically build, test, and deploy code.`}
          </code>
        </pre>
      </section>

      {/* Question 2 */}
      <section>
        <b>2. Key benefits of DevOps?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`- Faster delivery of features
- Improved collaboration
- Reduced failure rate of deployments
- Continuous feedback
Example: Web app release cycle reduced from 2 weeks to 2 days using CI/CD pipelines.`}
          </code>
        </pre>
      </section>

      {/* Question 3 */}
      <section>
        <b>3. What is Continuous Integration (CI)?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`CI is the process where developers merge code frequently into repository and build/test run automatically.
Example: Jenkins pipeline triggers on every Git push to build and test code automatically.`}
          </code>
        </pre>
      </section>

      {/* Question 4 */}
      <section>
        <b>4. What is Continuous Delivery (CD)?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`CD ensures that code is always deployable and can be automatically deployed to production.
Example: After CI, the build artifact is deployed automatically to staging or production using Jenkins.`}
          </code>
        </pre>
      </section>

      {/* Question 5 */}
      <section>
        <b>5. What is Continuous Deployment?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Every successful change is automatically deployed to production without manual intervention.
Example: Microservices deployed to Kubernetes automatically after passing tests.`}
          </code>
        </pre>
      </section>

      {/* Question 6 */}
      <section>
        <b>6. What is Infrastructure as Code (IaC)?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`IaC allows managing infrastructure using code, making it version-controlled, repeatable, and automated.
Example: AWS EC2 instances provisioned using Terraform scripts.`}
          </code>
        </pre>
      </section>

      {/* Question 7 */}
      <section>
        <b>7. DevOps tools?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`- Version Control: Git, GitHub
- CI/CD: Jenkins, GitHub Actions
- Config Management: Ansible, Puppet
- Containerization: Docker
- Orchestration: Kubernetes
- Monitoring: Prometheus, Grafana
- Cloud Platforms: AWS, Azure, GCP`}
          </code>
        </pre>
      </section>

      {/* Question 8 */}
      <section>
        <b>8. What is Git?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Git is a distributed version control system used to track code changes.
Example: git commit -m "Add login feature"`}
          </code>
        </pre>
      </section>

      {/* Question 9 */}
      <section>
        <b>9. Difference between Git and GitHub?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Git: Local version control system
GitHub: Cloud hosting platform for Git repositories
Example: Git stores code locally; GitHub allows collaboration.`}
          </code>
        </pre>
      </section>

      {/* Question 10 */}
      <section>
        <b>10. What is a Branch in Git?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`A branch is a parallel version of the repo to develop features independently.
Example: git checkout -b feature/login creates a new branch.`}
          </code>
        </pre>
      </section>

      {/* Question 11 */}
      <section>
        <b>11. What is a Merge in Git?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Combining changes from one branch into another.
Example: git merge feature/login into main after development.`}
          </code>
        </pre>
      </section>

      {/* Question 12 */}
      <section>
        <b>12. What is a Pull Request (PR)?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`A PR is a request to merge code from one branch to another, allowing code review and approval.
Example: On GitHub, create PR from feature/login to main.`}
          </code>
        </pre>
      </section>

      {/* Question 13 */}
      <section>
        <b>13. What is Jenkins?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Jenkins is an open-source automation server used to implement CI/CD pipelines.
Example: Jenkins builds, tests, and deploys your Node.js API automatically on every commit.`}
          </code>
        </pre>
      </section>

      {/* Question 14 */}
      <section>
        <b>14. What is a Jenkins Pipeline?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`A pipeline is a series of automated steps that build, test, and deploy code.
Example: Jenkinsfile defines steps: Checkout → Build → Test → Deploy.`}
          </code>
        </pre>
      </section>

      {/* Question 15 */}
      <section>
        <b>15. What is Docker?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Docker is a containerization platform that packages applications and dependencies into portable container.
Example: docker run -p 3000:3000 myapp runs a React app in a container.`}
          </code>
        </pre>
      </section>

      {/* Question 16 */}
      <section>
        <b>16. What is Kubernetes (K8s)?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Kubernetes automates deployment, scaling, and management of containerized apps.
Example: Running 3 replicas of Node.js API using a Deployment in K8s.`}
          </code>
        </pre>
      </section>

      {/* Question 17 */}
      <section>
        <b>17. What is Terraform?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Terraform is an IaC tool to provision cloud resources declaratively.
Example: Create AWS S3 bucket:
resource "aws_s3_bucket" "mybucket" {
  bucket = "myapp-bucket"
  acl    = "private"
}`}
          </code>
        </pre>
      </section>

      {/* Question 18 */}
      <section>
        <b>18. What is Ansible?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Ansible automates configuration management and deployment.
Example: Install Nginx:
- hosts: webservers
  tasks:
    - name: Install Nginx
      apt:
        name: nginx
        state: present`}
          </code>
        </pre>
      </section>

      {/* Question 19 */}
      <section>
        <b>19. What is CI/CD?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`CI/CD stands for Continuous Integration / Continuous Delivery (or Deployment).
CI: Automates code integration and testing.
CD: Automates deployment to staging/production.`}
          </code>
        </pre>
      </section>

      {/* Question 20 */}
      <section>
        <b>20. What is Monitoring in DevOps?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Monitoring ensures system performance and health are tracked.
Tools: Prometheus, Grafana, ELK Stack, CloudWatch
Example: Alerts triggered if CPU usage exceeds 80%.`}
          </code>
        </pre>
      </section>

      {/* Question 21 */}
      <section>
        <b>21. What is ELK Stack?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`ELK Stack = Elasticsearch + Logstash + Kibana
Used for centralized logging and visualization.
Example: Logs from multiple microservices sent to Elasticsearch and visualized in Kibana.`}
          </code>
        </pre>
      </section>

      {/* Question 22 */}
      <section>
        <b>22. What is Prometheus?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Prometheus is a monitoring and alerting tool for cloud-native applications.
Example: Monitoring Node.js API metrics and triggering alerts if requests fail.`}
          </code>
        </pre>
      </section>

      {/* Question 23 */}
      <section>
        <b>23. What is Grafana?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Grafana is a visualization tool that works with Prometheus, ELK, etc.
Example: Display CPU, memory, and request metrics of a microservice in a dashboard.`}
          </code>
        </pre>
      </section>

      {/* Question 24 */}
      <section>
        <b>24. What is a Container?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`A lightweight, portable, and isolated environment for running applications.
Example: Docker container running a Node.js API with all dependencies.`}
          </code>
        </pre>
      </section>

      {/* Question 25 */}
      <section>
        <b>25. What is a VM vs Container?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`VM: Full OS, heavier, slower startup
Container: Shares OS kernel, lightweight, fast
Example: Docker container vs AWS EC2 instance`}
          </code>
        </pre>
      </section>

      {/* Question 26 */}
      <section>
        <b>26. What is Microservices architecture?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Microservices = multiple small, independent services communicating via APIs.
Example: User service, Product service, Order service in e-commerce app.`}
          </code>
        </pre>
      </section>

      {/* Question 27 */}
      <section>
        <b>27. What is a Dockerfile?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`A text file with instructions to build a Docker image.
Example:
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "index.js"]`}
          </code>
        </pre>
      </section>

      {/* Question 28 */}
      <section>
        <b>28. What is a Docker Image?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`A read-only template built from a Dockerfile.
Example: node-app:1.0 image used to create containers.`}
          </code>
        </pre>
      </section>

      {/* Question 29 */}
      <section>
        <b>29. What is Docker Compose?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Docker Compose defines multi-container applications.
Example: docker-compose.yml for Node.js API + MongoDB.`}
          </code>
        </pre>
      </section>

      {/* Question 30 */}
      <section>
        <b>30. What is a Kubernetes Pod?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Pod = smallest deployable unit in K8s, can contain one or more containers.
Example: A pod with Node.js container and a sidecar container.`}
          </code>
        </pre>
      </section>

      {/* Question 31 */}
      <section>
        <b>31. What is a Kubernetes Deployment?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Deployment manages replica sets and ensures desired state.
Example: 3 replicas of Node.js API maintained automatically.`}
          </code>
        </pre>
      </section>
    </div>
  );
}
