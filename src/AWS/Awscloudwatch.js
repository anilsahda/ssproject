export default function Awscloudwatch() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>☁️ AWS CloudWatch Setup</h2>

      <section>
        <b>1. ✅ What is CloudWatch?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`AWS CloudWatch is a monitoring and observability service.
It provides metrics, logs, and alarms for your AWS resources and applications.`}
          </code>
        </pre>
      </section>

      <section>
        <b>2. 🔹 CloudWatch Metrics</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`- Metrics are numerical data points about your AWS resources
- Examples:
  - EC2 CPUUtilization
  - RDS FreeStorageSpace
  - Lambda Invocations`}
          </code>
        </pre>
      </section>

      <section>
        <b>3. 🔹 CloudWatch Logs</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`- Collect and monitor log files from AWS services
- Can create Log Groups and Log Streams
- Example: EC2 or Lambda logs`}
          </code>
        </pre>
      </section>

      <section>
        <b>4. 🔹 Create a CloudWatch Alarm</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Go to CloudWatch -> Alarms -> Create Alarm
2. Select metric (e.g., EC2 -> CPUUtilization)
3. Set threshold (e.g., CPU > 80%)
4. Choose notification (SNS topic/email)
5. Name alarm: HighCPUAlarm
6. Click "Create Alarm"`}
          </code>
        </pre>
      </section>

      <section>
        <b>5. 🔹 CloudWatch Dashboards</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`- Visualize metrics in dashboards
- Create widgets for CPU, memory, network, logs
- Can share dashboard with team
- Provides real-time monitoring of resources`}
          </code>
        </pre>
      </section>

      <section>
        <b>6. 🔹 CloudWatch Logs Insights</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`- Query and analyze log data using SQL-like syntax
- Example query:
  fields @timestamp, @message
  | filter @message like /ERROR/
  | sort @timestamp desc
  | limit 20`}
          </code>
        </pre>
      </section>
    </div>
  );
}
