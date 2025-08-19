export default function Nodequestions() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>📘 Node.js Interview Questions & Answers</h2>

      {/* Question 1 */}
      <section>
        <b>1. What is Node.js?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Node.js is a runtime environment built on Chrome's V8 JavaScript engine.
It allows JavaScript to run outside the browser.
Example: Build server-side apps using JavaScript with Node.js.`}
          </code>
        </pre>
      </section>

      {/* Question 2 */}
      <section>
        <b>2. What is the difference between Node.js and JavaScript?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`JavaScript: A programming language that runs in browsers.
Node.js: A runtime environment for executing JavaScript outside browsers.
Example: Node.js lets you build REST APIs and backend systems.`}
          </code>
        </pre>
      </section>

      {/* Question 3 */}
      <section>
        <b>3. What is NPM in Node.js?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`NPM (Node Package Manager) is a package manager for Node.js.
It helps install, share, and manage dependencies.
Example: npm install express` }
          </code>
        </pre>
      </section>

      {/* Question 4 */}
      <section>
        <b>4. What is Event-driven architecture in Node.js?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Node.js uses an event-driven, non-blocking I/O model.
It listens for events and executes callbacks asynchronously.
Example: An HTTP server responds to requests using 'request' events.`}
          </code>
        </pre>
      </section>

      {/* Question 5 */}
      <section>
        <b>5. What is the difference between synchronous and asynchronous programming?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Synchronous: Tasks execute one after another, blocking execution.
Asynchronous: Tasks run without blocking, using callbacks, promises, or async/await.
Example: fs.readFileSync() is sync, fs.readFile() is async.`}
          </code>
        </pre>
      </section>

      {/* Question 6 */}
      <section>
        <b>6. What is Express.js?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Express.js is a lightweight Node.js framework for building web applications and APIs.
Example:
const express = require('express');
const app = express();
app.get('/', (req,res)=> res.send('Hello World'));`}
          </code>
        </pre>
      </section>

      {/* Question 7 */}
      <section>
        <b>7. What are streams in Node.js?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Streams are objects that let you read/write data continuously.
Types: Readable, Writable, Duplex, Transform.
Example: fs.createReadStream('file.txt') reads a file as a stream.`}
          </code>
        </pre>
      </section>

      {/* Question 8 */}
      <section>
        <b>8. What is the difference between process.nextTick() and setImmediate()?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`process.nextTick(): Executes after the current operation, before the event loop continues.
setImmediate(): Executes on the next iteration of the event loop.
Example:
process.nextTick(()=> console.log('nextTick'));
setImmediate(()=> console.log('setImmediate'));`}
          </code>
        </pre>
      </section>

      {/* Question 9 */}
      <section>
        <b>9. What is Middleware in Express.js?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Middleware are functions executed during the request-response cycle.
They can modify req, res, or end the cycle.
Example:
app.use((req,res,next)=> { console.log('Time:', Date.now()); next(); });`}
          </code>
        </pre>
      </section>

      {/* Question 10 */}
      <section>
        <b>10. What is the difference between CommonJS and ES Modules?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`CommonJS: Uses require() and module.exports (default in Node.js).
ES Modules: Uses import/export syntax.
Example:
const fs = require('fs'); // CommonJS
import fs from 'fs'; // ES Module`}
          </code>
        </pre>
      </section>

    </div>
  );
}
