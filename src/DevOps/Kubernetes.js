export default function Kubernetes() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>☸️ Kubernetes Setup on Windows</h2>

      <section>
        <b>1. ✅ Prerequisites</b>
        <ul>
          <li>Windows 10/11 64-bit</li>
          <li>Docker Desktop installed (with Kubernetes enabled)</li>
          <li>kubectl CLI installed</li>
          <li>Administrative privileges</li>
        </ul>
      </section>

      <section>
        <b>2. 🔹 Install kubectl CLI</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Using Chocolatey
choco install kubernetes-cli

# Verify installation
kubectl version --client`}
          </code>
        </pre>
      </section>

      <section>
        <b>3. 🔹 Enable Kubernetes in Docker Desktop</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Open Docker Desktop
# Go to Settings > Kubernetes
# Check "Enable Kubernetes"
# Click Apply & Restart

# Verify Kubernetes status
kubectl cluster-info`}
          </code>
        </pre>
      </section>

      <section>
        <b>4. 🔹 Verify Cluster</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`kubectl get nodes
# Example output:
# NAME             STATUS   ROLES    AGE   VERSION
# docker-desktop   Ready    master   10m   v1.27.0`}
          </code>
        </pre>
      </section>

      <section>
        <b>5. 🔹 Deploy First Pod</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`kubectl run hello-k8s --image=nginx --port=80

# Check pod status
kubectl get pods`}
          </code>
        </pre>
      </section>

      <section>
        <b>6. 🔹 Expose Pod as Service</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`kubectl expose pod hello-k8s --type=NodePort --port=80

# Get service info
kubectl get svc
# Note the NodePort and access via http://localhost:<NodePort>`}
          </code>
        </pre>
      </section>

      <section>
        <b>7. 🔹 Create Deployment</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`kubectl create deployment nginx-deploy --image=nginx

# Scale deployment
kubectl scale deployment nginx-deploy --replicas=3

# Check pods
kubectl get pods`}
          </code>
        </pre>
      </section>

      <section>
        <b>8. 🔹 Create a Service for Deployment</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`kubectl expose deployment nginx-deploy --type=NodePort --port=80

# Access via browser on NodePort`}
          </code>
        </pre>
      </section>

      <section>
        <b>9. 🔹 Summary</b>
        <ul>
          <li>☸️ Kubernetes enabled via Docker Desktop</li>
          <li>✅ kubectl installed and verified</li>
          <li>🟢 Pod and Deployment created</li>
          <li>🌐 Services exposed using NodePort</li>
          <li>⚡ Ready to deploy microservices or apps like React, Node.js, .NET Core</li>
        </ul>
      </section>
    </div>
  );
}
