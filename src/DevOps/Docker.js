export default function Docker() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>🐳 Docker Setup on Windows</h2>

      <section>
        <b>1. ✅ System Requirements</b>
        <ul>
          <li>Windows 10 64-bit: Pro, Enterprise, or Education (Build 15063 or later)</li>
          <li>Enable <b>Hyper-V</b> and <b>Containers</b> Windows features</li>
          <li>At least 4GB RAM</li>
          <li>Administrative privileges</li>
        </ul>
      </section>

      <section>
        <b>2. 🔹 Download Docker Desktop</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Go to official Docker website:
https://www.docker.com/products/docker-desktop

# Download Docker Desktop Installer for Windows`}
          </code>
        </pre>
      </section>

      <section>
        <b>3. 🔹 Install Docker Desktop</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Run the downloaded installer
# Select options:
#  - Use WSL 2 instead of Hyper-V (recommended for Windows Home)
#  - Enable Hyper-V (if using Windows Pro)
# Complete the installation and restart PC if prompted`}
          </code>
        </pre>
      </section>

      <section>
        <b>4. 🔹 Start Docker Desktop</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Launch Docker Desktop from Start Menu
# Wait until Docker icon shows "Running"`}
          </code>
        </pre>
      </section>

      <section>
        <b>5. 🔹 Verify Installation</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Open PowerShell or Command Prompt
docker --version
# Example output: Docker version 24.0.0, build abcdefg

docker run hello-world
# Pulls test image and prints confirmation message`}
          </code>
        </pre>
      </section>

      <section>
        <b>6. 🔹 Configure WSL 2 (Optional for Windows Home)</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Install WSL 2 if not installed
wsl --install

# Set default version
wsl --set-default-version 2

# Verify installed distributions
wsl --list --verbose`}
          </code>
        </pre>
      </section>

      <section>
        <b>7. 🔹 Pull a Test Image</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Pull nginx image
docker pull nginx

# Run nginx container
docker run -d -p 8080:80 nginx

# Open browser and visit http://localhost:8080`}
          </code>
        </pre>
      </section>

      <section>
        <b>8. ✅ Summary</b>
        <ul>
          <li>🐳 Docker Desktop installed on Windows</li>
          <li>✅ Verified with <code>hello-world</code> test container</li>
          <li>🌐 Pulled and ran nginx container</li>
          <li>⚡ Ready for containerizing apps like React, Node.js, .NET Core</li>
        </ul>
      </section>
    </div>
  );
}
