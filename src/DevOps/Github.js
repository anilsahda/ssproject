export default function Github() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>🐙 GitHub Setup</h2>

      <section>
        <b>1. ✅ Create a GitHub Account</b>
        <p>
          Go to <a href="https://github.com/" target="_blank">https://github.com/</a> and create a free account using your email.
        </p>
      </section>

      <section>
        <b>2. 🔹 Install Git</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# For Windows
https://git-scm.com/download/win

# For macOS
brew install git

# For Linux (Debian/Ubuntu)
sudo apt-get update
sudo apt-get install git`}
          </code>
        </pre>
      </section>

      <section>
        <b>3. 🔹 Configure Git</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Set your username
git config --global user.name "Your Name"

# Set your email
git config --global user.email "youremail@example.com"

# Check configuration
git config --list`}
          </code>
        </pre>
      </section>

      <section>
        <b>4. 🔹 Create a Repository</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Go to GitHub -> New Repository
# Enter repository name, description, and choose visibility (Public/Private)
# Click 'Create Repository'`}
          </code>
        </pre>
      </section>

      <section>
        <b>5. 🔹 Clone Repository Locally</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Clone using HTTPS
git clone https://github.com/username/repository.git

# Or clone using SSH
git clone git@github.com:username/repository.git

# Navigate to repository folder
cd repository`}
          </code>
        </pre>
      </section>

      <section>
        <b>6. 🔹 Add, Commit & Push Changes</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Check status of files
git status

# Add files to staging
git add .

# Commit changes
git commit -m "Initial commit"

# Push changes to GitHub
git push origin main`}
          </code>
        </pre>
      </section>

      <section>
        <b>7. 🔹 Pull Latest Changes</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Pull latest changes from remote repository
git pull origin main`}
          </code>
        </pre>
      </section>

      <section>
        <b>✅ Summary</b>
        <ul>
          <li>📝 GitHub account setup and repository creation</li>
          <li>⚙️ Git installation and configuration</li>
          <li>💾 Clone, add, commit, push, and pull changes</li>
          <li>🔐 HTTPS or SSH for repository access</li>
        </ul>
      </section>
    </div>
  );
}
