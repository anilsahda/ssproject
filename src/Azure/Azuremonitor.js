import { FaBook, FaCheckCircle, FaLink, FaCode } from "react-icons/fa";

function AzureMonitor() {
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
        <h1 className="fw-bold mb-5 text-primary text-center">Azure Monitor</h1>

        {/* Step 1: Create Resource Group */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 1: Create Resource Group
          </div>
          <pre style={preStyle}>{`az group create --name MyMonitorRG --location eastus`}</pre>
        </section>

        {/* Step 2: Enable Azure Monitor for a Resource */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 2: Enable Azure Monitor
          </div>
          <pre style={preStyle}>{`az monitor log-analytics workspace create \
  --resource-group MyMonitorRG \
  --workspace-name MyMonitorWorkspace

az monitor diagnostic-settings create \
  --resource /subscriptions/<sub-id>/resourceGroups/MyResourceGroup/providers/Microsoft.Compute/virtualMachines/MyVM \
  --workspace MyMonitorWorkspace \
  --name "DiagSettings" \
  --logs '[{"category": "AuditLogs","enabled": true}]'`}</pre>
        </section>

        {/* Step 3: View Metrics */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 3: View Metrics
          </div>
          <pre style={preStyle}>{`# List metrics for a VM
az monitor metrics list \
  --resource /subscriptions/<sub-id>/resourceGroups/MyResourceGroup/providers/Microsoft.Compute/virtualMachines/MyVM \
  --metric "Percentage CPU" "Network In" "Network Out"`}</pre>
        </section>

        {/* Step 4: Create Alerts */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCode /> Step 4: Create Alerts
          </div>
          <pre style={preStyle}>{`az monitor metrics alert create \
  --name HighCPUAlert \
  --resource-group MyMonitorRG \
  --scopes /subscriptions/<sub-id>/resourceGroups/MyResourceGroup/providers/Microsoft.Compute/virtualMachines/MyVM \
  --condition "Percentage CPU > 80" \
  --description "Alert when CPU usage is high" \
  --action-group MyActionGroup`}</pre>
        </section>

        {/* Step 5: View Logs */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaBook /> Step 5: View Logs
          </div>
          <pre style={preStyle}>{`# Query logs in Azure Monitor
az monitor log-analytics query \
  --workspace MyMonitorWorkspace \
  --query "Heartbeat | summarize count() by bin(TimeGenerated, 1h)"`}</pre>
        </section>

        {/* Step 6: Configure Autoscale */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaCheckCircle /> Step 6: Configure Autoscale
          </div>
          <pre style={preStyle}>{`az monitor autoscale create \
  --resource-group MyMonitorRG \
  --resource MyVM \
  --min-count 1 --max-count 5 --count 2 \
  --name MyAutoscaleSetting`}</pre>
        </section>

        {/* Step 7: Delete Monitoring Resources */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaLink /> Step 7: Delete Monitoring Resources
          </div>
          <pre style={preStyle}>{`az monitor log-analytics workspace delete --resource-group MyMonitorRG --workspace-name MyMonitorWorkspace --yes`}</pre>
        </section>

        {/* Summary */}
        <section>
          <div style={sectionHeaderStyle}>
            <FaBook /> Summary
          </div>
          <ul style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            <li>✅ Create and manage Log Analytics Workspaces</li>
            <li>✅ Enable Azure Monitor for VMs, AKS, and other resources</li>
            <li>✅ Collect and query logs</li>
            <li>✅ Configure alerts and autoscale settings</li>
            <li>✅ View metrics and monitor system performance</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default AzureMonitor;
