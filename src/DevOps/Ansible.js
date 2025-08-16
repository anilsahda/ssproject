export default function Ansible() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>⚙️ Ansible Setup</h2>

      <section>
        <b>1. ✅ Prerequisites</b>
        <ul>
          <li>Windows/Linux machine (control node)</li>
          <li>Python 3.x installed</li>
          <li>SSH access to managed nodes (remote servers)</li>
          <li>Administrative privileges on control node</li>
        </ul>
      </section>

      <section>
        <b>2. 🔹 Install Ansible (Linux)</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Update system
sudo apt update && sudo apt upgrade -y

# Install Ansible
sudo apt install ansible -y

# Verify installation
ansible --version`}
          </code>
        </pre>
      </section>

      <section>
        <b>3. 🔹 Install Ansible on Windows (via WSL)</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Install WSL with Ubuntu
wsl --install -d Ubuntu

# Open Ubuntu terminal and update
sudo apt update && sudo apt upgrade -y

# Install Ansible
sudo apt install ansible -y

# Verify installation
ansible --version`}
          </code>
        </pre>
      </section>

      <section>
        <b>4. 🔹 Configure Hosts</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Edit /etc/ansible/hosts
sudo nano /etc/ansible/hosts

# Example content:
[webservers]
192.168.1.10
192.168.1.11

[dbservers]
192.168.1.20`}
          </code>
        </pre>
      </section>

      <section>
        <b>5. 🔹 Test Connectivity</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Test ping all hosts
ansible all -m ping

# Test ping specific group
ansible webservers -m ping`}
          </code>
        </pre>
      </section>

      <section>
        <b>6. 🔹 Create Playbook</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`# Example: install Nginx on webservers
nano nginx_setup.yml

# Content:
---
- name: Install Nginx on webservers
  hosts: webservers
  become: yes
  tasks:
    - name: Install Nginx
      apt:
        name: nginx
        state: present
    - name: Start Nginx service
      service:
        name: nginx
        state: started`}
          </code>
        </pre>
      </section>

      <section>
        <b>7. 🔹 Run Playbook</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`ansible-playbook nginx_setup.yml

# Verify installation on remote server
ssh user@192.168.1.10
systemctl status nginx`}
          </code>
        </pre>
      </section>

      <section>
        <b>8. 🔹 Summary</b>
        <ul>
          <li>⚡ Ansible installed and verified on control node</li>
          <li>🌐 Hosts configured for remote management</li>
          <li>✅ Connectivity tested using ping module</li>
          <li>📝 Playbook created and executed to install Nginx</li>
          <li>🔧 Ready for automation of deployments, configurations, and server management</li>
        </ul>
      </section>
    </div>
  );
}
