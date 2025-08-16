export default function Awsthreebucket() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>📦 AWS S3 Bucket Setup</h2>

      <section>
        <b>1. ✅ What is S3?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Amazon S3 (Simple Storage Service) is a scalable object storage service
for storing and retrieving any amount of data from anywhere.`}
          </code>
        </pre>
      </section>

      <section>
        <b>2. 🔹 Create an S3 Bucket</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Log in to AWS Management Console
2. Go to Services -> S3
3. Click "Create bucket"
4. Enter a unique Bucket name (e.g., my-app-bucket)
5. Select AWS Region (closest to your users)
6. Click "Next"`}
          </code>
        </pre>
      </section>

      <section>
        <b>3. ⚙ Configure Bucket Options</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Versioning: Enable to keep multiple versions of an object (optional)
2. Tags: Add key-value pairs if needed
3. Default encryption: Enable to encrypt data automatically
4. Click "Next"`}
          </code>
        </pre>
      </section>

      <section>
        <b>4. 🔒 Set Permissions</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Block all public access: Recommended for private data
2. You can customize access via IAM policies or bucket policies
3. Click "Next"`}
          </code>
        </pre>
      </section>

      <section>
        <b>5. ✅ Review and Create</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Review bucket configuration
2. Click "Create bucket"
3. Bucket is now ready for storing objects`}</code>
        </pre>
      </section>

      <section>
        <b>6. 🌐 Upload Objects</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Go to the bucket -> Click "Upload"
2. Add files or folders
3. Set permissions (optional)
4. Click "Upload"`}
          </code>
        </pre>
      </section>

      <section>
        <b>7. 🔑 Access Bucket Objects</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`1. Click on an object
2. You can copy Object URL for direct access
3. Use SDKs or CLI to programmatically upload/download files
4. Example CLI command:
   aws s3 cp file.txt s3://my-app-bucket/`}
          </code>
        </pre>
      </section>

      <section>
        <b>8. ✅ Summary</b>
        <ul>
          <li>📦 S3 is object storage for files, images, backups, and static content</li>
          <li>🔒 Configure permissions to control access</li>
          <li>🌐 Upload objects via Console, SDK, or CLI</li>
          <li>🛠 Enable versioning, encryption, and tags for better management</li>
        </ul>
      </section>
    </div>
  );
}
