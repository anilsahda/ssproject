import React, { useState } from 'react';

export default function Azureblobstorage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>📦 Azure Blob Storage Setup</h2>

      <ToggleSection title="1. ✅ What is Azure Blob Storage?">
        <pre style={preStyle}>
          <code>{`Azure Blob Storage is Microsoft's cloud object storage solution
for storing massive amounts of unstructured data (text, binary, images, video).`}
          </code>
        </pre>
      </ToggleSection>

      <ToggleSection title="2. 🔹 Create a Storage Account">
        <pre style={preStyle}>
          <code>{`1. Log in to Azure Portal: https://portal.azure.com
2. Search for "Storage accounts"
3. Click "+ Create"
4. Choose subscription & resource group
5. Enter Storage account name (unique)
6. Select Region & Performance (Standard/Premium)
7. Set Redundancy (e.g., LRS, GRS)
8. Review + Create -> Deploy`}
          </code>
        </pre>
      </ToggleSection>

      <ToggleSection title="3. 🌐 Create a Blob Container">
        <pre style={preStyle}>
          <code>{`1. Open your Storage account in Azure Portal
2. Navigate to "Containers"
3. Click "+ Container"
4. Enter container name (e.g., mycontainer)
5. Set Public access level (Private, Blob, or Container)
6. Click "Create"`}
          </code>
        </pre>
      </ToggleSection>

      <ToggleSection title="4. 🔑 Upload & Manage Blobs">
        <pre style={preStyle}>
          <code>{`1. Open your container -> Click "Upload"
2. Browse and select file(s)
3. Set Blob type (BlockBlob for most scenarios)
4. Click "Upload"
5. Access blob via URL: https://<storageaccount>.blob.core.windows.net/<container>/<blob>`}
          </code>
        </pre>
      </ToggleSection>

      <ToggleSection title="5. 📝 CRUD Operations - Node.js & Azure Blob Storage">
        <pre style={preStyle}>
          <code>{`// Install: npm install @azure/storage-blob
import { BlobServiceClient } from "@azure/storage-blob";
import fs from 'fs';

const blobServiceClient = BlobServiceClient.fromConnectionString("<AZURE_STORAGE_CONNECTION_STRING>");
const containerClient = blobServiceClient.getContainerClient("mycontainer");

// Upload
await containerClient.uploadBlockBlob("myfile.txt", fs.readFileSync("./myfile.txt"), fs.statSync("./myfile.txt").size);

// Download
const blobClient = containerClient.getBlobClient("myfile.txt");
const downloadResponse = await blobClient.download();
console.log("Downloaded:", await streamToBuffer(downloadResponse.readableStreamBody));

// Delete
await containerClient.deleteBlob("myfile.txt");

async function streamToBuffer(readableStream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readableStream.on("data", (data) => chunks.push(data instanceof Buffer ? data : Buffer.from(data)));
    readableStream.on("end", () => resolve(Buffer.concat(chunks)));
    readableStream.on("error", reject);
  });
}`}
          </code>
        </pre>
      </ToggleSection>

      <ToggleSection title="6. 📝 CRUD Operations - .NET Core & Azure Blob Storage">
        <p><b>📁 Controller: BlobController.cs</b></p>
        <pre style={preStyle}>
          <code>{`[ApiController]
[Route("api/[controller]")]
public class BlobController : ControllerBase
{
    private readonly BlobServiceClient _blobServiceClient;
    private const string containerName = "mycontainer";

    public BlobController(BlobServiceClient blobServiceClient)
    {
        _blobServiceClient = blobServiceClient;
    }

    [HttpPost("upload")]
    public async Task<IActionResult> Upload([FromForm] IFormFile file)
    {
        var containerClient = _blobServiceClient.GetBlobContainerClient(containerName);
        await containerClient.CreateIfNotExistsAsync();

        var blobClient = containerClient.GetBlobClient(file.FileName);
        using var stream = file.OpenReadStream();
        await blobClient.UploadAsync(stream, true);
        return Ok("File uploaded.");
    }

    [HttpGet("{name}")]
    public async Task<IActionResult> Download(string name)
    {
        var containerClient = _blobServiceClient.GetBlobContainerClient(containerName);
        var blobClient = containerClient.GetBlobClient(name);

        var response = await blobClient.DownloadContentAsync();
        return File(response.Value.Content.ToArray(), "application/octet-stream", name);
    }

    [HttpDelete("{name}")]
    public async Task<IActionResult> Delete(string name)
    {
        var containerClient = _blobServiceClient.GetBlobContainerClient(containerName);
        await containerClient.DeleteBlobIfExistsAsync(name);
        return Ok("File deleted.");
    }
}`}
          </code>
        </pre>
      </ToggleSection>

      <ToggleSection title="7. 📝 CRUD Operations - Spring Boot & Azure Blob Storage">
        <p><b>📁 Controller: BlobController.java</b></p>
        <pre style={preStyle}>
          <code>{`@RestController
@RequestMapping("/api/blob")
public class BlobController {

    @Autowired
    private BlobServiceClient blobServiceClient;

    private final String containerName = "mycontainer";

    @PostMapping("/upload")
    public ResponseEntity<String> upload(@RequestParam("file") MultipartFile file) throws IOException {
        BlobContainerClient containerClient = blobServiceClient.getBlobContainerClient(containerName);
        containerClient.createIfNotExists();

        BlobClient blobClient = containerClient.getBlobClient(file.getOriginalFilename());
        blobClient.upload(file.getInputStream(), true);
        return ResponseEntity.ok("File uploaded.");
    }

    @GetMapping("/download/{name}")
    public ResponseEntity<byte[]> download(@PathVariable String name) throws IOException {
        BlobContainerClient containerClient = blobServiceClient.getBlobContainerClient(containerName);
        BlobClient blobClient = containerClient.getBlobClient(name);

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        blobClient.download(outputStream);
        return ResponseEntity.ok(outputStream.toByteArray());
    }

    @DeleteMapping("/delete/{name}")
    public ResponseEntity<String> delete(@PathVariable String name) {
        BlobContainerClient containerClient = blobServiceClient.getBlobContainerClient(containerName);
        containerClient.getBlobClient(name).deleteIfExists();
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

