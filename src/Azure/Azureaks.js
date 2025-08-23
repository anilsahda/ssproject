import { FaBook, FaLink, FaCheckCircle, FaCode } from "react-icons/fa";

function AngularAKS() {
  const sectionHeaderStyle = {
    borderBottom: "2px solid #007bff",
    paddingBottom: "5px",
    marginBottom: "15px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#007bff",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const preStyle = {
    backgroundColor: "#f1f3f5",
    fontFamily: "monospace",
    fontSize: "0.95rem",
    border: "1px solid #dee2e6",
    padding: "15px",
    borderRadius: "5px",
    overflowX: "auto",
    whiteSpace: "pre",
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "40px 20px" }}>
      <div className="container bg-white p-5 shadow-sm rounded">
        <h1 className="fw-bold mb-5 text-primary text-center">Azure AKS (Azure Kubernetes Service)</h1>

        {/* Step 1: Create Resource Group */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 1: Create Resource Group
          </div>
          <pre style={preStyle}>{`az group create --name MyResourceGroup --location eastus`}</pre>
        </section>

        {/* Step 2: Create AKS Cluster */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 2: Create AKS Cluster
          </div>
          <pre style={preStyle}>{`az aks create \
  --resource-group MyResourceGroup \
  --name MyAKSCluster \
  --node-count 3 \
  --enable-addons monitoring \
  --generate-ssh-keys`}</pre>
        </section>

        {/* Step 3: Connect to AKS Cluster */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 3: Connect to AKS Cluster
          </div>
          <pre style={preStyle}>{`az aks get-credentials --resource-group MyResourceGroup --name MyAKSCluster

kubectl get nodes`}</pre>
        </section>

        {/* Step 4: Deploy Application */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 4: Deploy Application
          </div>
          <pre style={preStyle}>{`kubectl create deployment myapp --image=mcr.microsoft.com/oss/nginx/nginx:1.15.5-alpine

kubectl get deployments
kubectl get pods`}</pre>
        </section>

        {/* Step 5: Expose Application */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 5: Expose Application
          </div>
          <pre style={preStyle}>{`kubectl expose deployment myapp --type=LoadBalancer --name=myapp-service

kubectl get service myapp-service`}</pre>
        </section>

        {/* Step 6: Scale AKS Cluster */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 6: Scale AKS Cluster
          </div>
          <pre style={preStyle}>{`az aks scale \
  --resource-group MyResourceGroup \
  --name MyAKSCluster \
  --node-count 5`}</pre>
        </section>

        {/* Step 7: Upgrade AKS Cluster */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 7: Upgrade AKS Cluster
          </div>
          <pre style={preStyle}>{`az aks upgrade \
  --resource-group MyResourceGroup \
  --name MyAKSCluster \
  --kubernetes-version 1.28.0`}</pre>
        </section>

        {/* Step 8: Delete AKS Cluster */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 8: Delete AKS Cluster
          </div>
          <pre style={preStyle}>{`az aks delete --resource-group MyResourceGroup --name MyAKSCluster --yes --no-wait`}</pre>
        </section>

        {/* Summary */}
        <section>
          <div style={sectionHeaderStyle}>
            <FaBook /> Summary
          </div>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>✅ Create and manage Azure Resource Groups</li>
            <li>✅ Deploy and manage AKS clusters</li>
            <li>✅ Connect to AKS using kubectl</li>
            <li>✅ Deploy, expose, and scale applications</li>
            <li>✅ Upgrade and delete AKS clusters</li>
          </ul>
        </section>

      </div>
    </div>
  );
}

export default AngularAKS;
