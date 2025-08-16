export default function Monitoring() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>📊 Monitoring & Logging Setup</h2>

      <section>
        <b>1. ✅ Overview</b>
        <p>
          Monitoring and logging are crucial for tracking application performance, detecting issues, and maintaining system health.
          Common tools include <b>Prometheus</b>, <b>Grafana</b>, <b>ELK Stack (Elasticsearch, Logstash, Kibana)</b>, and cloud-native services like AWS CloudWatch, Azure Monitor, and GCP Stackdriver.
        </p>
      </section>

      <section>
        <b>2. 🔹 Logging Setup (Node.js Example)</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Install winston for logging
npm install winston

# Create logger.js
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/app.log' })
  ]
});

module.exports = logger;

# Usage in app.js
const logger = require('./logger');

logger.info('Application started');
logger.error('An error occurred');`}
          </code>
        </pre>
      </section>

      <section>
        <b>3. 🔹 Monitoring Setup with Prometheus & Grafana</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Step 1: Install Prometheus
# Download Prometheus from https://prometheus.io/download/

# Step 2: Configure Prometheus
# prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'node'
    static_configs:
      - targets: ['localhost:9090']

# Step 3: Start Prometheus
./prometheus --config.file=prometheus.yml

# Step 4: Install Grafana
# Download and run Grafana from https://grafana.com/

# Step 5: Add Prometheus as a Data Source in Grafana
# Step 6: Create dashboards to visualize metrics`}
          </code>
        </pre>
      </section>

      <section>
        <b>4. 🔹 AWS CloudWatch Logging & Monitoring</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Step 1: Create a log group in CloudWatch
aws logs create-log-group --log-group-name MyAppLogs

# Step 2: Install CloudWatch Agent on EC2
sudo yum install amazon-cloudwatch-agent

# Step 3: Configure Agent
sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-config-wizard

# Step 4: Start Agent
sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a start

# Step 5: View metrics & logs in AWS CloudWatch console`}
          </code>
        </pre>
      </section>

      <section>
        <b>5. 🔹 ELK Stack Logging</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Step 1: Install Elasticsearch, Logstash, Kibana
# Step 2: Configure Logstash to read app logs
input {
  file {
    path => "/var/log/app/*.log"
    start_position => "beginning"
  }
}

output {
  elasticsearch {
    hosts => ["localhost:9200"]
    index => "app-logs-%{+YYYY.MM.dd}"
  }
}

# Step 3: Start Kibana and visualize logs`}
          </code>
        </pre>
      </section>

      <section>
        <b>✅ Summary</b>
        <ul>
          <li>📝 Logging captures application events and errors for analysis</li>
          <li>📊 Monitoring tracks metrics and system performance</li>
          <li>⚙️ Prometheus + Grafana for metric monitoring</li>
          <li>☁️ AWS CloudWatch for cloud-native logging & monitoring</li>
          <li>📂 ELK Stack for centralized log management and visualization</li>
        </ul>
      </section>
    </div>
  );
}
