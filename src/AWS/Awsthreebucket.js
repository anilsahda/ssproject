import React, { useState } from 'react';

export default function Awsthreebucket() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>📦 AWS S3 Bucket Setup</h2>

      <ToggleSection title="1. ✅ What is S3?">
        <pre style={preStyle}>
          <code>
{`Amazon S3 (Simple Storage Service) is a scalable object storage service
for storing and retrieving any amount of data from anywhere.`}
          </code>
        </pre>
      </ToggleSection>

      <ToggleSection title="2. 🔹 Create an S3 Bucket">
        <pre style={preStyle}>
          <code>
{`1. Log in to AWS Management Console
2. Go to Services -> S3
3. Click "Create bucket"
4. Enter unique Bucket name like mybucket
5. Select AWS Region closest to your users
6. Click "Next"`}
          </code>
        </pre>
      </ToggleSection>

      <ToggleSection title="3. 🌐 Upload Objects">
        <pre style={preStyle}>
          <code>
{`1. Go to the bucket -> Click "Upload"
2. Add files or folders
3. Set permissions (optional)
4. Click "Upload"`}
          </code>
        </pre>
      </ToggleSection>

      <ToggleSection title="4. 🔑 Access Bucket Objects">
        <pre style={preStyle}>
          <code>
{`1. Click on an object
2. You can copy Object URL for direct access
3. Use SDKs to programmatically upload/download files from s3://mybucket/`}
          </code>
        </pre>
      </ToggleSection>

      <ToggleSection title="5. 📝 CRUD Operations - Node.js & AWS S3">
        <pre style={preStyle}>
          <code>
{`// Install: npm install aws-sdk
import AWS from 'aws-sdk';
import fs from 'fs';

const s3 = new AWS.S3({
  accessKeyId: 'YOUR_ACCESS_KEY',
  secretAccessKey: 'YOUR_SECRET_KEY',
  region: 'us-east-1'
});

// Upload
await s3.upload({
  Bucket: 'mybucket',
  Key: 'myfile.txt',
  Body: fs.readFileSync('./myfile.txt')
}).promise();

// Get
await s3.getObject({
  Bucket: 'mybucket',
  Key: 'myfile.txt'
}).promise();

// Delete
await s3.deleteObject({
  Bucket: 'mybucket',
  Key: 'myfile.txt'
}).promise();`}
          </code>
        </pre>
      </ToggleSection>

      <ToggleSection title="6. 📝 CRUD Operations - .NET Core & AWS S3">
        <p><b>📁 Controller: S3Controller.cs</b></p>
        <pre style={preStyle}>
          <code>
{`[ApiController]
[Route("api/[controller]")]
public class S3Controller : ControllerBase
{
    private readonly IAmazonS3 _s3Client;
    private const string bucketName = "mybucket";

    public S3Controller(IAmazonS3 s3Client)
    {
        _s3Client = s3Client;
    }

    [HttpPost("upload")]
    public async Task<IActionResult> Upload([FromForm] IFormFile file)
    {
        using var stream = file.OpenReadStream();
        var request = new PutObjectRequest
        {
            BucketName = bucketName,
            Key = file.FileName,
            InputStream = stream
        };
        await _s3Client.PutObjectAsync(request);
        return Ok("File uploaded.");
    }

    [HttpGet("{key}")]
    public async Task<IActionResult> Download(string key)
    {
        var request = new GetObjectRequest
        {
            BucketName = bucketName,
            Key = key
        };
        var response = await _s3Client.GetObjectAsync(request);
        return File(response.ResponseStream, response.Headers["Content-Type"], key);
    }

    [HttpDelete("{key}")]
    public async Task<IActionResult> Delete(string key)
    {
        await _s3Client.DeleteObjectAsync(bucketName, key);
        return Ok("File deleted.");
    }
}`}
          </code>
        </pre>
      </ToggleSection>

      <ToggleSection title="7. 📝 CRUD Operations - Spring Boot & AWS S3">
        <p><b>📁 Controller: S3Controller.java</b></p>
        <pre style={preStyle}>
          <code>
{`@RestController
@RequestMapping("/api/s3")
public class S3Controller {

    @Autowired
    private S3Client s3Client;

    private final String bucketName = "mybucket";

    @PostMapping("/upload")
    public ResponseEntity<String> upload(@RequestParam("file") MultipartFile file) throws IOException {
        PutObjectRequest putRequest = PutObjectRequest.builder()
                .bucket(bucketName)
                .key(file.getOriginalFilename())
                .build();

        s3Client.putObject(putRequest, RequestBody.fromBytes(file.getBytes()));
        return ResponseEntity.ok("File uploaded.");
    }

    @GetMapping("/download/{key}")
    public ResponseEntity<byte[]> download(@PathVariable String key) {
        GetObjectRequest getRequest = GetObjectRequest.builder()
                .bucket(bucketName)
                .key(key)
                .build();

        byte[] content = s3Client.getObject(getRequest).readAllBytes();
        return ResponseEntity.ok().body(content);
    }

    @DeleteMapping("/delete/{key}")
    public ResponseEntity<String> delete(@PathVariable String key) {
        DeleteObjectRequest deleteRequest = DeleteObjectRequest.builder()
                .bucket(bucketName)
                .key(key)
                .build();

        s3Client.deleteObject(deleteRequest);
        return ResponseEntity.ok("File deleted.");
    }
}`}
          </code>
        </pre>
      </ToggleSection>
    </div>
  );
}

/* Toggle Section Component */
function ToggleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section style={{ marginBottom: '1.5rem' }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          cursor: 'pointer',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          userSelect: 'none',
        }}
      >
        <span style={{ marginRight: '0.5rem' }}>{isOpen ? '▲' : '▼'}</span>
        {title}
      </div>
      {isOpen && <div style={{ marginTop: '0.5rem' }}>{children}</div>}
    </section>
  );
}

/* Pre block style */
const preStyle = {
  background: '#f5f5f5',
  padding: '1rem',
  overflowX: 'auto',
  whiteSpace: 'pre-wrap',
};
